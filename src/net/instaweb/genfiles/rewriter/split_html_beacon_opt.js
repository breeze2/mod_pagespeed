(function(){var g={};function h(d){var c=window;if(c.addEventListener)c.addEventListener("load",d,!1);else if(c.attachEvent)c.attachEvent("onload",d);else{var a=c.onload;c.onload=function(){d.call(this);a&&a.call(this)}}};window.pagespeed=window.pagespeed||{};var k=window.pagespeed;function l(d,c,a,e){this.a=[];this.b=d;this.c=c;this.e=a;this.d=e;this.g={height:window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,width:window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}}
function m(d,c){for(var a=!0,e=[],b=c.firstChild;null!=b;b=b.nextSibling)b.nodeType===Node.ELEMENT_NODE&&"SCRIPT"!=b.tagName&&"NOSCRIPT"!=b.tagName&&"STYLE"!=b.tagName&&"LINK"!=b.tagName&&(m(d,b)?e.push(b):a=!1);if(a){for(var f=c,a=f.offsetTop,b=f.offsetLeft;f.offsetParent;)f=f.offsetParent,a+=f.offsetTop,b+=f.offsetLeft;f=d.g;a=!(a<f.height&&b<f.width)}if(a)return!0;for(a=0;a<e.length;++a)d.a.push(g.h(e[a],window.document));return!1}
k.f=function(d,c,a,e){var b=new l(d,c,a,e);h(function(){m(b,document.body);if(0!=b.a.length){for(var a="oh="+b.e+"&n="+b.d,a=a+("&xp="+encodeURIComponent(b.a[0])),c=1;c<b.a.length;++c){var d=","+encodeURIComponent(b.a[c]);if(131072<a.length+d.length)break;a+=d}var c=b.b,d=b.c,e;if(window.XMLHttpRequest)e=new XMLHttpRequest;else if(window.ActiveXObject)try{e=new ActiveXObject("Msxml2.XMLHTTP")}catch(n){try{e=new ActiveXObject("Microsoft.XMLHTTP")}catch(p){}}e&&(e.open("POST",c+(-1==c.indexOf("?")?
"?":"&")+"url="+encodeURIComponent(d)),e.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),e.send(a))}})};k.splitHtmlBeaconInit=k.f;})();
