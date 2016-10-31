#!/bin/bash

set -e
set -u

this_dir="$(dirname "${BASH_SOURCE[0]}")"
source $(dirname "$BASH_SOURCE")/../build_env.sh || exit 1

CHROOTDIR=/var/chroot/centos_i386
CENTOS_KEY=https://centos.org/keys/RPM-GPG-KEY-CentOS-5
CENTOS_RELEASE=http://mirror.centos.org/centos/5/os/i386/CentOS/centos-release-5-11.el5.centos.i386.rpm

if [ -d "$CHROOTDIR" ]; then
  echo "Chroot already exists!" >&2
  exit 1
fi

if [ "$UID" != 0 ]; then
  exec sudo $0 "@"
  exit 1  # NOTREACHED
fi

yum -y install setarch

cd /tmp
wget $CENTOS_KEY
rpm --import $(basename $CENTOS_KEY)
wget $CENTOS_RELEASE

mkdir -p $CHROOTDIR/var/lib/rpm

set -x

# Centos insists on reading /etc/rpm/platform to get the architecture.
trap 'mv -f /etc/rpm/platform.real /etc/rpm/platform 2>/dev/null || true' EXIT
mv /etc/rpm/platform /etc/rpm/platform.real
echo i686-redhat-linux > /etc/rpm/platform
rpm --rebuilddb --root=$CHROOTDIR
rpm --root=$CHROOTDIR --nodeps -i $(basename $CENTOS_RELEASE)

yum -y --installroot=$CHROOTDIR update
# sudo is required for run_in_chroot.sh
yum -y --installroot=$CHROOTDIR install -y rpm-build yum sudo

mv /etc/rpm/platform.real /etc/rpm/platform
trap - EXIT

cd $CHROOTDIR/etc
for x in passwd shadow group gshadow hosts sudoers resolv.conf; do
  ln -f /etc/$x $x
done

cp -p /etc/yum.repos.d/* $CHROOTDIR/etc/yum.repos.d/

for dir in /proc /sys /dev /selinux /etc/selinux /home; do
  [ -d $dir ] || continue
  chroot_dir=${CHROOTDIR}$dir
  if [ ! -d $chroot_dir ]; then
    mkdir -p $chroot_dir
    chown --reference $dir $chroot_dir
    chmod --reference $dir $chroot_dir
  fi
  echo "$dir $chroot_dir none bind 0 0" >> /etc/fstab
done

echo "none $CHROOTDIR/dev/shm tmpfs defaults 0 0" >> /etc/fstab

mount -a

git_pkg=''
if version_compare "$(lsb_release -rs)" -ge 6; then
  git_pkg='git'
fi

$this_dir/run_in_chroot.sh yum -y update
$this_dir/run_in_chroot.sh yum -y install which redhat-lsb curl wget $git_pkg

if [ -z "$git_pkg" ]; then
  $this_dir/run_in_chroot.sh $this_dir/../install_from_source.sh git
fi
