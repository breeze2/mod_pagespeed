(function(){var h,aa=aa||{},l=this;function ba(a){a=a.split(".");for(var b=l,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}function ca(){}
function m(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){var b=m(a);return"array"==b||"object"==b&&"number"==typeof a.length}function n(a){return"string"==typeof a}function p(a){return"function"==m(a)}var ea="closure_uid_"+(1E9*Math.random()>>>0),fa=0;function ga(a,b,c){return a.call.apply(a.bind,arguments)}
function ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function q(a,b,c){q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ga:ha;return q.apply(null,arguments)}var ia=Date.now||function(){return+new Date};
function r(a,b){function c(){}c.prototype=b.prototype;a.da=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.qa=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};function ja(a){ja[" "](a);return a}ja[" "]=ca;function ka(){0!=la&&(this[ea]||(this[ea]=++fa));this.N=this.N;this.ja=this.ja}var la=0;ka.prototype.N=!1;function ma(){}ma.prototype.S=null;function na(a){var b;(b=a.S)||(b={},oa(a)&&(b[0]=!0,b[1]=!0),b=a.S=b);return b};function pa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function qa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function sa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ra.length;f++)c=ra[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};function u(a){if(Error.captureStackTrace)Error.captureStackTrace(this,u);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}r(u,Error);u.prototype.name="CustomError";function v(a,b,c,d,e){this.reset(a,b,c,d,e)}v.prototype.U=null;v.prototype.T=null;var ta=0;v.prototype.reset=function(a,b,c,d,e){"number"==typeof e||ta++;d||ia();this.q=a;this.ia=b;delete this.U;delete this.T};v.prototype.ca=function(a){this.q=a};var w="closure_listenable_"+(1E6*Math.random()|0),ua=0;function x(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.i=!1;this.ba=!0}x.prototype.stopPropagation=function(){this.i=!0};x.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ba=!1};function va(a,b,c,d,e){this.h=a;this.F=null;this.src=b;this.type=c;this.v=!!d;this.A=e;this.key=++ua;this.m=this.u=!1}function wa(a){a.m=!0;a.h=null;a.F=null;a.src=null;a.A=null};function xa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ya=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};
function za(a){if(!Aa.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Ba,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Ca,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Da,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ea,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Fa,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(Ga,"&#0;"));return a}var Ba=/&/g,Ca=/</g,Da=/>/g,Ea=/"/g,Fa=/'/g,Ga=/\x00/g,Aa=/[\x00&<>"']/;function Ha(a,b){return a<b?-1:a>b?1:0};function Ia(a,b){b.unshift(a);u.call(this,xa.apply(null,b));b.shift()}r(Ia,u);Ia.prototype.name="AssertionError";function Ja(a,b){throw new Ia("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var Ka;function La(){}r(La,ma);function Ma(a){return(a=oa(a))?new ActiveXObject(a):new XMLHttpRequest}function oa(a){if(!a.W&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.W=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.W}Ka=new La;var y=Array.prototype,Na=y.indexOf?function(a,b,c){return y.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Oa=y.forEach?function(a,b,c){y.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function Pa(a){var b;a:{b=Qa;for(var c=a.length,d=n(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:n(a)?a.charAt(b):a[b]}function Ra(a){if("array"!=m(a))for(var b=a.length-1;0<=b;b--)delete a[b];a.length=0};function Sa(a){if("function"==typeof a.w)return a.w();if(n(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return pa(a)}
function Ta(a,b){if("function"==typeof a.forEach)a.forEach(b,void 0);else if(da(a)||n(a))Oa(a,b,void 0);else{var c;if("function"==typeof a.o)c=a.o();else if("function"!=typeof a.w)if(da(a)||n(a)){c=[];for(var d=a.length,e=0;e<d;e++)c.push(e)}else c=qa(a);else c=void 0;for(var d=Sa(a),e=d.length,f=0;f<e;f++)b.call(void 0,d[f],c&&c[f],a)}};function z(a,b){this.e={};this.b=[];this.k=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof z?(c=a.o(),d=a.w()):(c=qa(a),d=pa(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}h=z.prototype;h.w=function(){Ua(this);for(var a=[],b=0;b<this.b.length;b++)a.push(this.e[this.b[b]]);return a};h.o=function(){Ua(this);return this.b.concat()};
h.clear=function(){this.e={};this.k=this.b.length=0};h.remove=function(a){return Object.prototype.hasOwnProperty.call(this.e,a)?(delete this.e[a],this.k--,this.b.length>2*this.k&&Ua(this),!0):!1};function Ua(a){if(a.k!=a.b.length){for(var b=0,c=0;b<a.b.length;){var d=a.b[b];Object.prototype.hasOwnProperty.call(a.e,d)&&(a.b[c++]=d);b++}a.b.length=c}if(a.k!=a.b.length){for(var e={},c=b=0;b<a.b.length;)d=a.b[b],Object.prototype.hasOwnProperty.call(e,d)||(a.b[c++]=d,e[d]=1),b++;a.b.length=c}}
h.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.e,a)?this.e[a]:b};h.set=function(a,b){Object.prototype.hasOwnProperty.call(this.e,a)||(this.k++,this.b.push(a));this.e[a]=b};h.forEach=function(a,b){for(var c=this.o(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new z(this)};function A(a){this.src=a;this.c={};this.I=0}A.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.c[f];a||(a=this.c[f]=[],this.I++);var g=Va(a,b,d,e);-1<g?(b=a[g],c||(b.u=!1)):(b=new va(b,this.src,f,!!d,e),b.u=c,a.push(b));return b};A.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.c))return!1;var e=this.c[a];b=Va(e,b,c,d);return-1<b?(wa(e[b]),y.splice.call(e,b,1),0==e.length&&(delete this.c[a],this.I--),!0):!1};
function Wa(a,b){var c=b.type;if(c in a.c){var d=a.c[c],e=Na(d,b),f;(f=0<=e)&&y.splice.call(d,e,1);f&&(wa(b),0==a.c[c].length&&(delete a.c[c],a.I--))}}A.prototype.Q=function(a,b,c,d){a=this.c[a.toString()];var e=-1;a&&(e=Va(a,b,c,d));return-1<e?a[e]:null};function Va(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.m&&f.h==b&&f.v==!!c&&f.A==d)return e}return-1};var B;a:{var Xa=l.navigator;if(Xa){var Ya=Xa.userAgent;if(Ya){B=Ya;break a}}B=""}function C(a){return-1!=B.indexOf(a)};var Za=C("Opera")||C("OPR"),D=C("Trident")||C("MSIE"),E=C("Gecko")&&-1==B.toLowerCase().indexOf("webkit")&&!(C("Trident")||C("MSIE")),F=-1!=B.toLowerCase().indexOf("webkit");function $a(){var a=l.document;return a?a.documentMode:void 0}var ab=function(){var a="",b;if(Za&&l.opera)return a=l.opera.version,p(a)?a():a;E?b=/rv\:([^\);]+)(\)|;)/:D?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:F&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(B))?a[1]:"");return D&&(b=$a(),b>parseFloat(a))?String(b):a}(),bb={};
function G(a){var b;if(!(b=bb[a])){b=0;for(var c=ya(String(ab)).split("."),d=ya(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",H=RegExp("(\\d*)(\\D*)","g"),L=RegExp("(\\d*)(\\D*)","g");do{var s=H.exec(g)||["","",""],t=L.exec(k)||["","",""];if(0==s[0].length&&0==t[0].length)break;b=Ha(0==s[1].length?0:parseInt(s[1],10),0==t[1].length?0:parseInt(t[1],10))||Ha(0==s[2].length,0==t[2].length)||Ha(s[2],t[2])}while(0==b)}b=bb[a]=0<=b}return b}
var cb=l.document,db=cb&&D?$a()||("CSS1Compat"==cb.compatMode?parseInt(ab,10):5):void 0;var eb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,fb=F;function gb(a,b){if(fb){fb=!1;var c=l.location;if(c){var d=c.href;if(d&&(d=(d=gb(3,d))?decodeURI(d):d)&&d!=c.hostname)throw fb=!0,Error();}}return b.match(eb)[a]||null};function hb(a){var b;b||(b=ib(a||arguments.callee.caller,[]));return b}
function ib(a,b){var c=[];if(0<=Na(b,a))c.push("[...circular reference...]");else if(a&&50>b.length){c.push(jb(a)+"(");for(var d=a.arguments,e=0;d&&e<d.length;e++){0<e&&c.push(", ");var f;f=d[e];switch(typeof f){case "object":f=f?"object":"null";break;case "string":break;case "number":f=String(f);break;case "boolean":f=f?"true":"false";break;case "function":f=(f=jb(f))?f:"[fn]";break;default:f=typeof f}40<f.length&&(f=f.substr(0,40)+"...");c.push(f)}b.push(a);c.push(")\n");try{c.push(ib(a.caller,
b))}catch(g){c.push("[exception trying to get caller]\n")}}else a?c.push("[...long stack...]"):c.push("[end]");return c.join("")}function jb(a){if(I[a])return I[a];a=String(a);if(!I[a]){var b=/function ([^\(]+)/.exec(a);I[a]=b?b[1]:"[Anonymous]"}return I[a]}var I={};function J(a){this.Y=a;this.V=this.M=this.q=this.D=null}function K(a,b){this.name=a;this.value=b}K.prototype.toString=function(){return this.name};var kb=new K("SEVERE",1E3),lb=new K("INFO",800),mb=new K("CONFIG",700),nb=new K("FINE",500);h=J.prototype;h.getName=function(){return this.Y};h.getParent=function(){return this.D};h.ca=function(a){this.q=a};function ob(a){if(a.q)return a.q;if(a.D)return ob(a.D);Ja("Root logger has no level set.");return null}
h.log=function(a,b,c){if(a.value>=ob(this).value)for(p(b)&&(b=b()),a=this.ha(a,b,c,J.prototype.log),b="log:"+a.ia,l.console&&(l.console.timeStamp?l.console.timeStamp(b):l.console.markTimeline&&l.console.markTimeline(b)),l.msWriteProfilerMark&&l.msWriteProfilerMark(b),b=this;b;){c=b;var d=a;if(c.V)for(var e=0,f=void 0;f=c.V[e];e++)f(d);b=b.getParent()}};
h.ha=function(a,b,c,d){var e=new v(a,String(b),this.Y);if(c){var f;f=d||arguments.callee.caller;e.U=c;var g;try{var k;var H=ba("window.location.href");if(n(c))k={message:c,name:"Unknown error",lineNumber:"Not available",fileName:H,stack:"Not available"};else{var L,s,t=!1;try{L=c.lineNumber||c.ra||"Not available"}catch(Wb){L="Not available",t=!0}try{s=c.fileName||c.filename||c.sourceURL||l.$googDebugFname||H}catch(Xb){s="Not available",t=!0}k=!t&&c.lineNumber&&c.fileName&&c.stack&&c.message&&c.name?
c:{message:c.message||"Not available",name:c.name||"UnknownError",lineNumber:L,fileName:s,stack:c.stack||"Not available"}}g="Message: "+za(k.message)+'\nUrl: <a href="view-source:'+k.fileName+'" target="_new">'+k.fileName+"</a>\nLine: "+k.lineNumber+"\n\nBrowser stack:\n"+za(k.stack+"-> ")+"[end]\n\nJS stack traversal:\n"+za(hb(f)+"-> ")}catch(Mb){g="Exception trying to expose exception! You win, we lose. "+Mb}e.T=g}return e};h.info=function(a,b){this.log(lb,a,b)};var pb={},M=null;
function qb(a){M||(M=new J(""),pb[""]=M,M.ca(mb));var b;if(!(b=pb[a])){b=new J(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=qb(a.substr(0,c));c.M||(c.M={});c.M[d]=b;b.D=c;pb[a]=b}return b};function N(a,b){a&&a.log(nb,b,void 0)};var rb;(rb=!D)||(rb=D&&9<=db);var sb=rb,tb=D&&!G("9");!F||G("528");E&&G("1.9b")||D&&G("8")||Za&&G("9.5")||F&&G("528");E&&!G("8")||D&&G("9");function O(a,b){x.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.n=this.state=null;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(E){var e;a:{try{ja(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=
a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=F||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=F||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.n=a;a.defaultPrevented&&this.preventDefault()}}r(O,x);O.prototype.stopPropagation=function(){O.da.stopPropagation.call(this);this.n.stopPropagation?this.n.stopPropagation():this.n.cancelBubble=!0};O.prototype.preventDefault=function(){O.da.preventDefault.call(this);var a=this.n;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,tb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var ub="closure_lm_"+(1E6*Math.random()|0),vb={},wb=0;function P(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)P(a,b[f],c,d,e);else if(c=xb(c),a&&a[w])a.l.add(String(b),c,!1,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=Q(a);g||(a[ub]=g=new A(a));c=g.add(b,c,!1,d,e);c.F||(d=yb(),c.F=d,d.src=a,d.h=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(zb(b.toString()),d),wb++)}}
function yb(){var a=Ab,b=sb?function(c){return a.call(b.src,b.h,c)}:function(c){c=a.call(b.src,b.h,c);if(!c)return c};return b}function Bb(a,b,c,d,e){if("array"==m(b))for(var f=0;f<b.length;f++)Bb(a,b[f],c,d,e);else c=xb(c),a&&a[w]?a.l.remove(String(b),c,d,e):a&&(a=Q(a))&&(b=a.Q(b,c,!!d,e))&&Cb(b)}
function Cb(a){if("number"!=typeof a&&a&&!a.m){var b=a.src;if(b&&b[w])Wa(b.l,a);else{var c=a.type,d=a.F;b.removeEventListener?b.removeEventListener(c,d,a.v):b.detachEvent&&b.detachEvent(zb(c),d);wb--;(c=Q(b))?(Wa(c,a),0==c.I&&(c.src=null,b[ub]=null)):wa(a)}}}function zb(a){return a in vb?vb[a]:vb[a]="on"+a}function Db(a,b,c,d){var e=1;if(a=Q(a))if(b=a.c[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.v==c&&!f.m&&(e&=!1!==Eb(f,d))}return Boolean(e)}
function Eb(a,b){var c=a.h,d=a.A||a.src;a.u&&Cb(a);return c.call(d,b)}
function Ab(a,b){if(a.m)return!0;if(!sb){var c=b||ba("window.event"),d=new O(c,this),e=!0;if(!(0>c.keyCode||void 0!=c.returnValue)){a:{var f=!1;if(0==c.keyCode)try{c.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==c.returnValue)c.returnValue=!0}c=[];for(f=d.currentTarget;f;f=f.parentNode)c.push(f);for(var f=a.type,k=c.length-1;!d.i&&0<=k;k--)d.currentTarget=c[k],e&=Db(c[k],f,!0,d);for(k=0;!d.i&&k<c.length;k++)d.currentTarget=c[k],e&=Db(c[k],f,!1,d)}return e}return Eb(a,new O(b,this))}
function Q(a){a=a[ub];return a instanceof A?a:null}var Fb="__closure_events_fn_"+(1E9*Math.random()>>>0);function xb(a){if(p(a))return a;a[Fb]||(a[Fb]=function(b){return a.handleEvent(b)});return a[Fb]};function R(){ka.call(this);this.l=new A(this);this.fa=this;this.$=null}r(R,ka);R.prototype[w]=!0;R.prototype.addEventListener=function(a,b,c,d){P(this,a,b,c,d)};R.prototype.removeEventListener=function(a,b,c,d){Bb(this,a,b,c,d)};
R.prototype.dispatchEvent=function(a){var b,c=this.$;if(c)for(b=[];c;c=c.$)b.push(c);var c=this.fa,d=a.type||a;if(n(a))a=new x(a,c);else if(a instanceof x)a.target=a.target||c;else{var e=a;a=new x(d,c);sa(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.i&&0<=g;g--)f=a.currentTarget=b[g],e=S(f,d,!0,a)&&e;a.i||(f=a.currentTarget=c,e=S(f,d,!0,a)&&e,a.i||(e=S(f,d,!1,a)&&e));if(b)for(g=0;!a.i&&g<b.length;g++)f=a.currentTarget=b[g],e=S(f,d,!1,a)&&e;return e};
function S(a,b,c,d){b=a.l.c[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.m&&g.v==c){var k=g.h,H=g.A||g.src;g.u&&Wa(a.l,g);e=!1!==k.call(H,d)&&e}}return e&&0!=d.ba}R.prototype.Q=function(a,b,c,d){return this.l.Q(String(a),b,c,d)};function Gb(a,b,c){if(p(a))c&&(a=q(a,c));else if(a&&"function"==typeof a.handleEvent)a=q(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:l.setTimeout(a,b||0)};function T(a){R.call(this);this.headers=new z;this.L=a||null;this.j=!1;this.K=this.a=null;this.f=this.X=this.C="";this.p=this.R=this.B=this.O=!1;this.s=0;this.H=null;this.aa=Hb;this.J=this.pa=!1}r(T,R);var Hb="",Ib=T.prototype,Jb=qb("goog.net.XhrIo");Ib.d=Jb;var Kb=/^https?$/i,Lb=["POST","PUT"];h=T.prototype;
h.send=function(a,b,c,d){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.C+"; newUri="+a);b=b?b.toUpperCase():"GET";this.C=a;this.f="";this.X=b;this.O=!1;this.j=!0;this.a=this.L?Ma(this.L):Ma(Ka);this.K=this.L?na(this.L):na(Ka);this.a.onreadystatechange=q(this.Z,this);try{N(this.d,U(this,"Opening Xhr")),this.R=!0,this.a.open(b,String(a),!0),this.R=!1}catch(e){N(this.d,U(this,"Error opening Xhr: "+e.message));Nb(this,e);return}a=c||"";var f=this.headers.clone();
d&&Ta(d,function(a,b){f.set(b,a)});d=Pa(f.o());c=l.FormData&&a instanceof l.FormData;!(0<=Na(Lb,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");f.forEach(function(a,b){this.a.setRequestHeader(b,a)},this);this.aa&&(this.a.responseType=this.aa);"withCredentials"in this.a&&(this.a.withCredentials=this.pa);try{Ob(this),0<this.s&&(this.J=Pb(this.a),N(this.d,U(this,"Will abort after "+this.s+"ms if incomplete, xhr2 "+this.J)),this.J?(this.a.timeout=this.s,this.a.ontimeout=
q(this.ea,this)):this.H=Gb(this.ea,this.s,this)),N(this.d,U(this,"Sending request")),this.B=!0,this.a.send(a),this.B=!1}catch(g){N(this.d,U(this,"Send error: "+g.message)),Nb(this,g)}};function Pb(a){return D&&G(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Qa(a){return"content-type"==a.toLowerCase()}h.ea=function(){"undefined"!=typeof aa&&this.a&&(this.f="Timed out after "+this.s+"ms, aborting",N(this.d,U(this,this.f)),this.dispatchEvent("timeout"),this.abort(8))};
function Nb(a,b){a.j=!1;a.a&&(a.p=!0,a.a.abort(),a.p=!1);a.f=b;Qb(a);Rb(a)}function Qb(a){a.O||(a.O=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}h.abort=function(){this.a&&this.j&&(N(this.d,U(this,"Aborting")),this.j=!1,this.p=!0,this.a.abort(),this.p=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Rb(this))};h.Z=function(){this.N||(this.R||this.B||this.p?Sb(this):this.ka())};h.ka=function(){Sb(this)};
function Sb(a){if(a.j&&"undefined"!=typeof aa)if(a.K[1]&&4==V(a)&&2==W(a))N(a.d,U(a,"Local request error detected and ignored"));else if(a.B&&4==V(a))Gb(a.Z,0,a);else if(a.dispatchEvent("readystatechange"),4==V(a)){N(a.d,U(a,"Request complete"));a.j=!1;try{if(Tb(a))a.dispatchEvent("complete"),a.dispatchEvent("success");else{var b;try{b=2<V(a)?a.a.statusText:""}catch(c){N(a.d,"Can not get status: "+c.message),b=""}a.f=b+" ["+W(a)+"]";Qb(a)}}finally{Rb(a)}}}
function Rb(a){if(a.a){Ob(a);var b=a.a,c=a.K[0]?ca:null;a.a=null;a.K=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){(a=a.d)&&a.log(kb,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}function Ob(a){a.a&&a.J&&(a.a.ontimeout=null);"number"==typeof a.H&&(l.clearTimeout(a.H),a.H=null)}
function Tb(a){var b=W(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=gb(1,String(a.C)),!a&&self.location&&(a=self.location.protocol,a=a.substr(0,a.length-1)),b=!Kb.test(a?a.toLowerCase():"");c=b}return c}function V(a){return a.a?a.a.readyState:0}function W(a){try{return 2<V(a)?a.a.status:-1}catch(b){return-1}}h.getResponseHeader=function(a){return this.a&&4==V(this)?this.a.getResponseHeader(a):void 0};
h.getAllResponseHeaders=function(){return this.a&&4==V(this)?this.a.getAllResponseHeaders():""};function U(a,b){return b+" ["+a.X+" "+a.C+" "+W(a)+"]"};function Ub(a){this.a=a||new T;this.g=document.getElementById("log").innerHTML.split("\n");0<this.g.length&&this.g.pop();this.r=this.g.length;this.G=!1;this.P="";this.t=!1;a=document.createElement("div");a.style.overflow="hidden";a.style.clear="both";var b=document.createElement("div");b.id="ui-div";b.innerHTML='<table id="ui-table" border="1" style="float:left; border-collapse: collapse;border-color:silver;"><tr valign="center"><td>Reverse: <input type="checkbox" id="reverse" '+(this.G?"checked":
"")+'></td><td>Auto refresh (every 5 seconds): <input type="checkbox" id="auto-refresh" '+(this.t?"checked":"")+'></td><td>&nbsp;&nbsp;&nbsp;&nbsp;Filter: <input id="text-filter" type="text" size="70"></td></tr></table>';a.appendChild(b);b=document.createElement("div");b.id="num";b.className="pagespeed-show-number";a.appendChild(b);document.body.insertBefore(a,document.getElementById("log"));X(this)}h=Ub.prototype;h.oa=function(){this.G=!this.G;this.update()};h.na=function(){this.t=!this.t};
h.ma=function(a){this.P=a.value;this.update()};function X(a,b){var c=void 0!=b?b:a.g.length;document.getElementById("num").textContent=c==a.r?"Total message count: "+c:"Visible message count: "+c+"/"+a.r}
h.update=function(){var a=document.getElementById("log"),b;b=this.g;var c=b.length;if(0<c){for(var d=Array(c),e=0;e<c;e++)d[e]=b[e];b=d}else b=[];if(this.P)for(c=b.length-1;0<=c;--c)b[c]&&-1!=b[c].toLowerCase().indexOf(this.P.toLowerCase())||b.splice(c,1);X(this,b.length);a.innerHTML=this.G?b.reverse().join("\n"):b.join("\n")};h.ga=function(){this.t&&!this.a.a&&this.a.send(document.location.href)};
h.la=function(){if(Tb(this.a)){var a;var b=this.a;try{a=b.a?b.a.responseText:""}catch(c){N(b.d,"Can not get responseText: "+c.message),a=""}var b=[],b=a.indexOf('<div id="log">'),d=a.indexOf('<script type="text/javascript">',b);0<=b&&0<=d?(b=a.substring(b+14,d-7).split("\n"),b.pop(),this.g=b,this.r=b.length,this.update()):(Ra(this.g),this.r=0,X(this),document.getElementById("log").textContent="Failed to write messages to this page. Verify that MessageBufferSize is not set to 0 in pagespeed.conf.")}else a=
this.a,console.log(n(a.f)?a.f:String(a.f)),Ra(this.g),this.r=0,X(this),document.getElementById("log").textContent="Sorry, the message history cannot be loaded. Please wait and try again later."};function Vb(){P(window,"load",function(){var a=new Ub,b=document.getElementById("text-filter");P(b,"keyup",q(a.ma,a,b));P(document.getElementById("reverse"),"change",q(a.oa,a));P(document.getElementById("auto-refresh"),"change",q(a.na,a));P(a.a,"complete",q(a.la,a));setInterval(a.ga.bind(a),5E3)})}
var Y=["pagespeed","Messages","Start"],Z=l;Y[0]in Z||!Z.execScript||Z.execScript("var "+Y[0]);for(var $;Y.length&&($=Y.shift());)Y.length||void 0===Vb?Z=Z[$]?Z[$]:Z[$]={}:Z[$]=Vb;})();
