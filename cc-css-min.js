!function(o){function r(){function r(o){function r(o){var r;return o?"bg"==o?r="background":"border"==o?r="border":"border-top"==o?r="borderTop":"border-right"==o?r="borderRight":"border-bottom"==o?r="borderBottom":"border-left"==o?r="borderLeft":"text-shadow"==o?r="textShadow":"box-shadow"==o?r="boxShadow":"outline"==o&&(r="outline"):r="content",r}function s(o){var r;return o?"hover"==o?r="hover":"active"==o?r="active":"visited"==o?r="visited":"focus"==o?r="focus":"selection"==o&&(r="selection"):r="normal",r}for(var c,a,i=o.classList,v={normal:{content:{color:"",adjustions:[],contrast:0,overwrite:0},background:{color:"",adjustions:[],contrast:0,overwrite:0},border:{color:"",adjustions:[],contrast:0,overwrite:0},borderTop:{color:"",adjustions:[],contrast:0,overwrite:0},borderRight:{color:"",adjustions:[],contrast:0,overwrite:0},borderBottom:{color:"",adjustions:[],contrast:0,overwrite:0},borderLeft:{color:"",adjustions:[],contrast:0,overwrite:0},textShadow:{color:"",adjustions:[],contrast:0,overwrite:0},boxShadow:{color:"",adjustions:[],contrast:0,overwrite:0},outline:{color:"",adjustions:[],contrast:0,overwrite:0}},hover:{content:{color:"",adjustions:[],contrast:0,overwrite:0},background:{color:"",adjustions:[],contrast:0,overwrite:0},border:{color:"",adjustions:[],contrast:0,overwrite:0},borderTop:{color:"",adjustions:[],contrast:0,overwrite:0},borderRight:{color:"",adjustions:[],contrast:0,overwrite:0},borderBottom:{color:"",adjustions:[],contrast:0,overwrite:0},borderLeft:{color:"",adjustions:[],contrast:0,overwrite:0},textShadow:{color:"",adjustions:[],contrast:0,overwrite:0},boxShadow:{color:"",adjustions:[],contrast:0,overwrite:0},outline:{color:"",adjustions:[],contrast:0,overwrite:0}},active:{content:{color:"",adjustions:[],contrast:0,overwrite:0},background:{color:"",adjustions:[],contrast:0,overwrite:0},border:{color:"",adjustions:[],contrast:0,overwrite:0},borderTop:{color:"",adjustions:[],contrast:0,overwrite:0},borderRight:{color:"",adjustions:[],contrast:0,overwrite:0},borderBottom:{color:"",adjustions:[],contrast:0,overwrite:0},borderLeft:{color:"",adjustions:[],contrast:0,overwrite:0},textShadow:{color:"",adjustions:[],contrast:0,overwrite:0},boxShadow:{color:"",adjustions:[],contrast:0,overwrite:0},outline:{color:"",adjustions:[],contrast:0,overwrite:0}},visited:{content:{color:"",adjustions:[],contrast:0,overwrite:0},background:{color:"",adjustions:[],contrast:0,overwrite:0},border:{color:"",adjustions:[],contrast:0,overwrite:0},borderTop:{color:"",adjustions:[],contrast:0,overwrite:0},borderRight:{color:"",adjustions:[],contrast:0,overwrite:0},borderBottom:{color:"",adjustions:[],contrast:0,overwrite:0},borderLeft:{color:"",adjustions:[],contrast:0,overwrite:0},textShadow:{color:"",adjustions:[],contrast:0,overwrite:0},boxShadow:{color:"",adjustions:[],contrast:0,overwrite:0},outline:{color:"",adjustions:[],contrast:0,overwrite:0}},focus:{content:{color:"",adjustions:[],contrast:0,overwrite:0},background:{color:"",adjustions:[],contrast:0,overwrite:0},border:{color:"",adjustions:[],contrast:0,overwrite:0},borderTop:{color:"",adjustions:[],contrast:0,overwrite:0},borderRight:{color:"",adjustions:[],contrast:0,overwrite:0},borderBottom:{color:"",adjustions:[],contrast:0,overwrite:0},borderLeft:{color:"",adjustions:[],contrast:0,overwrite:0},textShadow:{color:"",adjustions:[],contrast:0,overwrite:0},boxShadow:{color:"",adjustions:[],contrast:0,overwrite:0},outline:{color:"",adjustions:[],contrast:0,overwrite:0}},selection:{content:{color:"",adjustions:[],contrast:0,overwrite:0},background:{color:"",adjustions:[],contrast:0,overwrite:0},border:{color:"",adjustions:[],contrast:0,overwrite:0},borderTop:{color:"",adjustions:[],contrast:0,overwrite:0},borderRight:{color:"",adjustions:[],contrast:0,overwrite:0},borderBottom:{color:"",adjustions:[],contrast:0,overwrite:0},borderLeft:{color:"",adjustions:[],contrast:0,overwrite:0},textShadow:{color:"",adjustions:[],contrast:0,overwrite:0},boxShadow:{color:"",adjustions:[],contrast:0,overwrite:0},outline:{color:"",adjustions:[],contrast:0,overwrite:0}}},n=0;n<i.length;n++)if((c=i.item(n).match(/^cc-(?:(bg|border|border-top|border-right|border-bottom|border-left|text-shadow|box-shadow|outline)-)?(?:(hover|active|visited|focus|selection)-)?color-([A-z0-9_]*?)$/))&&z.hasOwnProperty(c[3])){var d=r(c[1]),l=s(c[2]);v[l][d].color=c[3]}else if(c=i.item(n).match(/^(?:(bg|border|border-top|border-right|border-bottom|border-left|text-shadow|box-shadow|outline)-)?(?:(hover|active|visited|focus|selection)-)?(lightness|saturation|hue|alpha)(-i|-d)?(\d+)(p)?$/)){var u={adjuster:0,amount:0,type:0,percentage:0},d=r(c[1]),l=s(c[2]);"hue"==c[3]?u.adjuster=1:"saturation"==c[3]?u.adjuster=2:"lightness"==c[3]?u.adjuster=3:"alpha"==c[3]&&(u.adjuster=4),"-i"==c[4]?u.type=1:"-d"==c[4]&&(u.type=2),u.amount=+c[5],c[6]&&(u.percentage=1),v[l][d].adjustions.push(u)}else if(c=i.item(n).match(/^(?:(bg|border|border-top|border-right|border-bottom|border-left|text-shadow|box-shadow|outline)-)?(?:(hover|active|visited|focus|selection)-)?contrast$/)){var d=r(c[1]),l=s(c[2]);v[l][d].contrast=1}else if(c=i.item(n).match(/^(?:(bg|border|border-top|border-right|border-bottom|border-left|text-shadow|box-shadow|outline)-)?(?:(hover|active|visited|focus|selection)-)?overwrite$/)){var d=r(c[1]),l=s(c[2]);v[l][d].overwrite=1}for(var n in v)for(var h in v[n])v[n][h].color&&(a=n+"_"+h+"_"+t(v[n][h]),R.hasOwnProperty(a)||(R[a]=1,e(n,h,v[n][h])))}function t(o){return[o.color,o.adjustions.map(function(o){return[o.adjuster,o.type,o.amount,o.percentage].join(",")}).join(";"),o.contrast,o.overwrite].join("_")}function s(o){var r="";return 0==o.adjuster?r:(1==o.adjuster?r+="hue":2==o.adjuster?r+="saturation":3==o.adjuster?r+="lightness":4==o.adjuster&&(r+="alpha"),1==o.type?r+="-i":2==o.type&&(r+="-d"),r+=o.amount,o.percentage&&(r+="p"),r)}function e(o,r,t){var e,c,a,i,v,n=z[t.color].hsv(!1);"normal"==o?(i="",v=""):"hover"==o?(i="hover-",v=":hover"):"active"==o?(i="active-",v=":active"):"visited"==o?(i="visited-",v=":visited"):"focus"==o?(i="focus-",v=":focus"):"selection"==o&&(i="selection-",v="::selection"),"content"==r?(e=".cc-"+i+"color-"+t.color,c="color: ",a=""):"background"==r?(e=".cc-bg-"+i+"color-"+t.color,c="background-color: ",a="bg-"):"border"==r?(e=".cc-border-"+i+"color-"+t.color,c="border-color: ",a="border-"):"borderTop"==r?(e=".cc-border-top-"+i+"color-"+t.color,c="border-top-color: ",a="border-top-"):"borderRight"==r?(e=".cc-border-right-"+i+"color-"+t.color,c="border-right-color: ",a="border-right-"):"borderBottom"==r?(e=".cc-border-bottom-"+i+"color-"+t.color,c="border-bottom-color: ",a="border-bottom-"):"borderLeft"==r?(e=".cc-border-left-"+i+"color-"+t.color,c="border-left-color: ",a="border-left-"):"textShadow"==r?(e=".cc-text-shadow-"+i+"color-"+t.color,c="text-shadow: "+L.x+" "+L.y+" "+L.size+" ",a="text-shadow-"):"boxShadow"==r?(e=".cc-box-shadow-"+i+"color-"+t.color,c="box-shadow: "+C.x+" "+C.y+" "+C.size+" ",a="box-shadow-"):"outline"==r&&(e=".cc-outline-"+i+"color-"+t.color,c="outline-color: ",a="outline-");for(var d=0;d<t.adjustions.length;d++){var l=t.adjustions[d],u="",h="";if(1==l.adjuster)u="hue",h="h";else if(2==l.adjuster)u="saturation",h="s";else if(3==l.adjuster)u="lightness",h="v";else{if(4!=l.adjuster)continue;u="alpha",h="alpha"}4==l.adjuster?1==l.type?l.percentage?n.alphaRatio*=1+l.amount/100:n.alphaRatio+=l.amount/100:2==l.type?l.percentage?n.alphaRatio*=1-l.amount/100:n.alphaRatio-=l.amount/100:n.alphaRatio=l.amount/100:1==l.type?n[u](l.amount+(l.percentage?"%":"")):2==l.type?n[u](-l.amount+(l.percentage?"%":"")):l.percentage?n[h].ratio=l.amount/100:n[h]=l.amount,e+="."+a+i+s(l)}t.contrast&&(e+="."+a+i+"contrast",n=n.light_contrast()),c+=n.css(),t.overwrite&&(e+="."+a+i+"overwrite",c+=" !important"),e+=v,"selection"!=o&&$.insertRule(e+" {"+c+";}",0)}function c(o){var r=o.hsv(0),t=r[1],s=r[2];if(15>=s)return"v1";if(60<s)if(90<s){if(100>=s){if(10>=t)return"v4s1";if(90>=t)return"v4s2";if(100>=t)return"v4s3"}}else{if(10>=t)return"v3s1";if(90>=t)return"v3s2";if(100>=t)return"v3s3"}else{if(10>=t)return"v2s1";if(90>=t)return"v2s2";if(100>=t)return"v2s3"}}function a(o,r){var t=c(o),s=c(r),e=o.hsv(0),a=r.hsv(0),i=(e[0]-a[0]+360)%360,v=e[1]-a[1],n=e[2]-a[2],d=e.distance(a),l={v1:{v1:T.v1,v2s1:T.v2s1,v2s2:T.v2s2,v2s3:T.v2s3,v3s1:T.v3s1,v3s2:T.v3s2,v3s3:T.v3s3,v4s1:T.v4s1,v4s2:T.v4s2,v4s3:T.v4s3},v2s1:{v1:T.v2s1,v2s1:T.v2s1,v2s2:T.v2s2,v2s3:T.v2s3,v3s1:T.g,v3s2:T.v3s2,v3s3:T.v3s3,v4s1:T.g,v4s2:T.v4s2,v4s3:T.v4s3},v2s2:{v1:T.v2s2,v2s1:T.v2s2,v2s2:T.v2s2d,v2s3:T.dsv0,v3s1:T.v2s2d,v3s2:T.dv1,v3s3:T.dsv1,v4s1:T.v2s2d,v4s2:T.dv2,v4s3:T.dsv2},v2s3:{v1:T.v2s3,v2s1:T.v2s3,v2s2:T.dsv0,v2s3:T.v2s3d,v3s1:T.v2s3,v3s2:T.dsv1,v3s3:T.dv1,v4s1:T.v2s3,v4s2:T.dsv2,v4s3:T.dv2},v3s1:{v1:T.v3s1,v2s1:T.g,v2s2:T.v2s2,v2s3:T.v2s3,v3s1:T.v3s1,v3s2:T.v3s2,v3s3:T.v3s3,v4s1:T.g,v4s2:T.v4s2,v4s3:T.v4s3},v3s2:{v1:T.v3s2,v2s1:T.v3s2,v2s2:T.dv1,v2s3:T.dsv1,v3s1:T.v3s2,v3s2:T.v3s2d,v3s3:T.dsv0,v4s1:T.v3s2,v4s2:T.dv1,v4s3:T.dsv1},v3s3:{v1:T.v3s3,v2s1:T.v3s3,v2s2:T.dsv1,v2s3:T.dv1,v3s1:T.v3s3,v3s2:T.dsv0,v3s3:T.v3s3d,v4s1:T.v3s3,v4s2:T.dsv1,v4s3:T.dv1},v4s1:{v1:T.v4s1,v2s1:T.g,v2s2:T.v2s2,v2s3:T.v2s3,v3s1:T.g,v3s2:T.v3s2,v3s3:T.v3s3,v4s1:T.v4s1,v4s2:T.v4s2,v4s3:T.v4s3},v4s2:{v1:T.v4s2,v2s1:T.v4s2,v2s2:T.dv2,v2s3:T.dsv2,v3s1:T.v4s2,v3s2:T.dv1,v3s3:T.dsv1,v4s1:T.v4s2,v4s2:T.v4s2d,v4s3:T.dsv0},v4s3:{v1:T.v4s3,v2s1:T.v4s3,v2s2:T.dsv2,v2s3:T.dv2,v3s1:T.v4s3,v3s2:T.dsv1,v3s3:T.dv1,v4s1:T.v4s3,v4s2:T.dsv0,v4s3:T.v4s3d}};return{type:l[t][s],sub:{dh:i,ds:v,dv:n,de:d}}}function i(o,r){function t(o,r,t,s){return t>s&&(t-=360),(t>o||o>s)&&(t=0,s=360,r=180,o=(o+360)%360),i>r?(o-r)/(s-r):(o-r)/(r-t)}function s(o,r,t,s,e){return t>s&&(t-=360),e&&(o=-o),0>o?(r+(r-t)*o+360)%360:r+(s-r)*o}var e,c=o.hsv(!1),a=r.hsv(!1),i=c[0],v=a[0],n={b:[220,180,260],g:[105,90,120],p:[315,300,330]},d={r:[45,30,60],p:[0,-30,30],y:[280,260,300]},l={r:[0,-30,30],p:[280,260,300],y:[45,30,60]},u={link:null,hover:null,active:null,visited:null};return 180>i||i>270?270>i||i>300?330>i&&i>30?90>i||i>120?e=t(c[0],180,0,360):(e=t(c[0],105,90,120),n.g=null,l.y=null):(e=t(c[0],0,330,30),n.p=null,l.r=null):(e=t(c[0],285,270,300),n.b=null,l.p=null):(e=t(c[0],220,180,270),n.b=null,l.p=null),(180>v||v>270)&&(270>v||v>300)?330>v&&v>30?90>v||v>120||(n.g=null,l.y=null):(n.p=null,l.r=null):(n.b=null,l.p=null),c.v.ratio<.3?a.v.ratio<.4?c.v.ratio+=a.v.ratio/2+.2:a.v.ratio>.7?c.v.ratio+=.3:c.v.ratio=c.v.ratio/7+.8:c.v.ratio<.7?a.v.ratio>.7?c.v.ratio=(c.v.ratio-.3)/2+.3:a.v.ratio>.3&&(c.v.ratio=(c.v.ratio-.3)/4+.8):a.v.ratio>.7&&(c.v.ratio=(c.v.ratio-.7)/3+.4),c.s.ratio<.33?c.s.ratio+=.33:c.s.ratio>.66&&a.s.ratio>.66&&(c.s.ratio=Math.max(c.s.ratio/2,.4)),c[0]=s.apply(this,[e].concat(n.b||n.g||n.p)),u.link=c.rgb(!1),c.s.ratio+=.2,c.v.ratio+=.2,u.hover=c.rgb(!1),c=u.link.hsv(!1),c[0]=s.apply(this,[e].concat(d.p||d.r||d.y)),u.active=c.rgb(!1),c[0]=s.apply(this,[e].concat(l.p||l.r||l.y).concat(1)),u.visited=c.rgb(!1),u}function v(o,r){var t=o.hsv(!1),s=r.hsv(!1),e={ignore:null,strong:null,border:null,shadow:null,light:null,dark:null};return t[2]=(3*s[2]+2*t[2])/5,t[1]=(3*s[1]+2*t[1])/5,e.ignore=t.rgb(!1),t=o.hsv(!1),t.h=s.h>45&&s.h<300||s.s.ratio<=.05?s.s.ratio<=.05&&t.s.ratio>.05?(t.h+180)%360:t.s.ratio>.05?((s.h-45)/51*25+330)%360:(30*t.h.ratio+345)%360:(s.h+180)%360,t.v.ratio=t.v.ratio>.2?.96:s.v.ratio<.6?.93:.9,t.s.ratio=s.s.ratio<.8?.2*t.s.ratio+.8:.2*t.s.ratio+.7,e.strong=t.rgb(!1),s.v.ratio<.5?(s.v.ratio+=.2,e.border=s.rgb(!1),s.v.ratio+=.2,e.shadow=s.rgb(!1)):(s.v.ratio-=.1,e.border=s.rgb(!1),s.v.ratio-=.1,e.shadow=s.rgb(!1)),t=o.hsv(!1),0!=t.s&&(t.s.ratio+=.33),t.v.ratio=.9,e.light=t.rgb(!1),t.v.ratio=.3,e.dark=t.rgb(!1),e}function n(o){var r=o.hsv(!1),t=[.9,.66,.5,.33,.25];return out={shadow_1:null,shadow_2:null,shadow_3:null,shadow_4:null},r.s.ratio*=.85,r.v.ratio>.75?t.shift():t.pop(),r.v.ratio=t[0],out.shadow_1=r.rgb(!1),r.v.ratio=t[1],out.shadow_2=r.rgb(!1),r.v.ratio=t[2],out.shadow_3=r.rgb(!1),r.v.ratio=t[3],out.shadow_4=r.rgb(!1),out}function d(o){var r=o.hsv(!1);return out={light_gray:null,medium_gray:null,dark_gray:null},r.s*=.05,r.v.ratio=.9,out.light_gray=r.rgb(!1),r.v.ratio=.6,out.medium_gray=r.rgb(!1),r.v.ratio=.3,out.dark_gray=r.rgb(!1),out}function l(o,r,t){var s,e=o.hsv(!1),c=[],a=[],i=8,v=Math.ceil(r/i);e.v.ratio<.8?(e.v.ratio=.1*e.v.ratio+.9,e.s.ratio=.5*e.s.ratio+.5):(e.v.ratio=.4*e.v.ratio+.6,e.s.ratio=.33*e.s.ratio+.67);for(var n in t)s=t[n].hsv(!1),n.match(/^cc_link_active|^cc_light|^cc_dark/)||c.push(s);for(;a.length<=r;){for(var n=1;i>n;n++){e.h.ratio=(e.h.ratio+1/i)%1;var d=!0;for(var l in c)e.distance(c[l])<.06&&(d=!1);d&&(a.push(e.rgb(0)),c.push(e.duplicate()))}if(e.h.ratio=(e.h.ratio+1/v/i)%1,e.s.ratio-=.2,e.v.ratio-=.2,e.v.ratio<.2)break}return a.slice(0,r+1)}function u(o,r,t,s){var e,c,a,n={};s?(e=s.hsv(!1),a=t.lch(!1)):e=t.hsv(!1),c=e.lch(!1),a&&Math.abs(c.l.ratio-a.l.ratio)>.3?e[2]=c.hsv(0)[2]:(c.l.ratio=c.l.ratio>.6?.1-(c.l.ratio-.6)/6:1-c.l.ratio/4,e[2]=c.hsv(0)[2],e[1]=Math.max(e[1]/r-2,0)),1==o?(n.background=t.duplicate(),n.text=e.rgb(!1)):(n.text=t.duplicate(),n.background=e.rgb(!1));var d=v(n.text,n.background);n.ignore=d.ignore,n.strong=d.strong,n.border=d.border,n.shadow=d.shadow,n.light=d.light,n.dark=d.dark;var l=i(n.text,n.background);return n.link=l.link,n.link_hover=l.hover,n.link_active=l.active,n.link_visited=l.visited,n}function h(){var r,t,s,e,i=1,v=0,h=0;if(z.primary&&z.secondary){var b=a(z.primary,z.secondary);r=b.type,t=b.sub}else z.primary&&(r=c(z.primary));switch(s=z.primary?z.primary.hsv(!1):z.secondary?z.secondary.hsv(!1):new o("hsv",0,0,100),r){case T.dsv1:case T.dv1:h=t.dv;case T.dsv0:case T.dv2:case T.dsv2:case T.v2s2d:case T.v2s3d:case T.v3s2d:case T.v3s3d:case T.v4s2d:case T.v4s3d:e=z.secondary.hsv(!1),e.v+=h,e.s+=v;default:case T.v1:case T.g:i+=4;case T.v2s3:case T.v3s3:case T.v4s3:i+=3;case T.v2s2:case T.v3s2:case T.v4s2:i+=5;case T.v2s1:case T.v3s1:case T.v4s1:}var _=u(1,i,s,e),g=u(2,i,s,e);z.cc_text=_.text,z.cc_background=_.background,z.cc_ignore=_.ignore,z.cc_strong=_.strong,z.cc_border=_.border,z.cc_shadow=_.shadow,z.cc_light=_.light,z.cc_dark=_.dark,z.cc_link=_.link,z.cc_link_hover=_.link_hover,z.cc_link_active=_.link_active,z.cc_link_visited=_.link_visited,z.cc_text_2=g.text,z.cc_background_2=g.background,z.cc_ignore_2=g.ignore,z.cc_strong_2=g.strong,z.cc_border_2=g.border,z.cc_shadow_2=g.shadow,z.cc_light_2=g.light,z.cc_dark_2=g.dark,z.cc_link_2=g.link,z.cc_link_hover_2=g.link_hover,z.cc_link_active_2=g.link_active,z.cc_link_visited_2=g.link_visited;var w=n(s);z.cc_shade_1=w.shadow_1,z.cc_shade_2=w.shadow_2,z.cc_shade_3=w.shadow_3,z.cc_shade_4=w.shadow_4;var f=d(s);z.cc_light_gray=f.light_gray,z.cc_medium_gray=f.medium_gray,z.cc_dark_gray=f.dark_gray;for(var p=l(s,9,z),m=0;m<p.length;m++)z["cc_different_"+(m+1)]=p[m];z.cc_text_1=z.cc_text,z.cc_link_1=z.cc_link,z.cc_link_hover_1=z.cc_link_hover,z.cc_link_active_1=z.cc_link_active,z.cc_link_visited_1=z.cc_link_visited,z.cc_ignore_1=z.cc_ignore,z.cc_strong_1=z.cc_strong,z.cc_background_1=z.cc_background,z.cc_border_1=z.cc_border,z.cc_shadow_1=z.cc_shadow,z.cc_light_1=z.cc_light,z.cc_dark_1=z.cc_dark,z.cc_content=z.cc_text,z.cc_content_1=z.cc_text_1,z.cc_content_2=z.cc_text_2}function b(r){for(var t in r)z[t]=new o(r[t]);f()}function _(o){"string"==typeof o?o=[o]:Array.isArray(o)||(o=[".*?"]);var r={};for(var t in z)for(var s in o){var e="";if("string"==typeof o[s]?(o[s].replace(/^\^|\$$/g,""),e=RegExp("^"+o[s]+"$")):o[s]instanceof RegExp&&(e=o[s]),t.match(e)){r[t]=z[t].duplicate();break}}return r}function g(o){var r=_(o);for(var t in r)delete z[t];f()}function w(){for(var o=document.querySelectorAll("[class*=cc-]"),t=0;t<o.length;t++)r(o[t])}function f(){S&&S.remove(),x="ccjs_css_"+(1e3*Math.random()<<0),S=document.head.appendChild(document.createElement("style")),S.id=x,R={};for(var o=0;o<document.styleSheets.length;o++)document.styleSheets[o].ownerNode.id==x&&($=document.styleSheets[o]);h(),w()}function p(){for(var r,t,s,e=0;e<document.styleSheets.length;e++)"cc_config"==document.styleSheets[e].ownerNode.id&&(r=document.styleSheets[e]);if(r){t=r.cssRules;for(var e=0;e<t.length;e++)(s=t[e].selectorText.match(/^.cc-set-([A-z0-9_]*?)$/))&&(z[s[1]]=new o(t[e].style.color))}f()}function m(o){"string"==typeof o.x&&o.x.match(/^0$|^\d+.?(\d+)?(px|em|ex|%|in|cm|mm|pt|pc|vh|vw)$/)&&(L.x=o.x),"string"==typeof o.y&&o.y.match(/^0$|^\d+.?(\d+)?(px|em|ex|%|in|cm|mm|pt|pc|vh|vw)$/)&&(L.y=o.y),"string"==typeof o.z&&o.z.match(/^0$|^\d+.?(\d+)?(px|em|ex|%|in|cm|mm|pt|pc|vh|vw)$/)&&(L.z=o.z)}function k(o){"string"==typeof o.x&&o.x.match(/^0$|^\d+.?(\d+)?(px|em|ex|%|in|cm|mm|pt|pc|vh|vw)$/)&&(C.x=o.x),"string"==typeof o.y&&o.y.match(/^0$|^\d+.?(\d+)?(px|em|ex|%|in|cm|mm|pt|pc|vh|vw)$/)&&(C.y=o.y),"string"==typeof o.z&&o.z.match(/^0$|^\d+.?(\d+)?(px|em|ex|%|in|cm|mm|pt|pc|vh|vw)$/)&&(C.z=o.z)}function j(o){2==o?($.insertRule("body { color: "+z.cc_text_2.css()+"; background-color: "+z.cc_background_2.css()+"; }",0),$.insertRule("div, p, span, a, ol, ul, li { border-color: "+z.cc_border_2.css()+"; outline-color"+z.cc_border_2.css()+"; }",0),$.insertRule("em, strong { color: "+z.cc_strong_2.css()+"; }",0),$.insertRule("del { color: "+z.cc_ignore_2.css()+"; }",0),$.insertRule("a[href] { color: "+z.cc_link_2.css()+"; }",0),$.insertRule("a[href]:hover { color: "+z.cc_link_hover_2.css()+"; }",0),$.insertRule("a[href]:active { color: "+z.cc_link_active_2.css()+"; }",0),$.insertRule("a[href]:visited { color: "+z.cc_link_visited_2.css()+"; }",0)):($.insertRule("body { color: "+z.cc_text.css()+"; background-color: "+z.cc_background.css()+"; }",0),$.insertRule("div, p, span, a, ol, ul, li { border-color: "+z.cc_border.css()+"; outline-color"+z.cc_border.css()+"; }",0),$.insertRule("em, strong { color: "+z.cc_strong.css()+"; }",0),$.insertRule("del { color: "+z.cc_ignore.css()+"; }",0),$.insertRule("a[href] { color: "+z.cc_link.css()+"; }",0),$.insertRule("a[href]:hover { color: "+z.cc_link_hover.css()+"; }",0),$.insertRule("a[href]:active { color: "+z.cc_link_active.css()+"; }",0),$.insertRule("a[href]:visited { color: "+z.cc_link_visited.css()+"; }",0))}function y(o){o.forEach(function(o){if("attributes"==o.type)"class"==o.attributeName&&r(o.target);else if("childList"==o.type)for(var t=0;t<o.addedNodes.length;t++)r(o.addedNodes[t])})}var x,R,S,$,z={white:new o("1"),gray:new o("0.5"),black:new o("0"),red:new o("#f00"),orange:new o("#f70"),yellow:new o("#ff0"),green:new o("#070"),blue:new o("#00f"),purple:new o("#707"),thinwhite:new o(255,255,255,25),thickwhite:new o(255,255,255,153),thinblack:new o(0,0,0,25),thickblack:new o(0,0,0,153),transparent:new o(255,255,255,0)},L={x:0,y:0,size:"0.3em"},C={x:0,y:0,size:"0.3em"},T={v1:"v1",v2s1:"v2s1",v2s2:"v2s2",v2s3:"v2s3",v3s1:"v3s1",v3s2:"v3s2",v3s3:"v3s3",v4s1:"v4s1",v4s2:"v4s2",v4s3:"v4s3",g:"grayscale",dsv0:"dsv0",dsv1:"dsv1",dsv2:"dsv2",dv1:"dv1",dv2:"dv2",v2s2d:"v2s2d",v2s3d:"v2s3d",v3s2d:"v3s2d",v3s3d:"v3s3d",v4s2d:"v4s2d",v4s3d:"v4s3d"};p();var B=new MutationObserver(y);B.observe(document.body,{subtree:!0,childList:!0,attributes:!0,characterData:!1,attributeOldValue:!1}),window.Color.CSS={updateRules:f,setColors:b,getColors:_,removeColors:g,setTextShadow:m,setBoxShadow:k,addTagColors:j}}if(!o)throw Error("CC.js required.");document.addEventListener("DOMContentLoaded",r)}(Color);