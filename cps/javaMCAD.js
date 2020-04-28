/*
 mcad.library.v1-0 (release) 2017-02-01 
*/
function BufferLoader(a){if(null===a)throw new TypeError("(BufferLoader.BufferLoader) Invalid AudioContext (did you make a typo or forget to create the context?");this.a=a,this.b={},this.c=0}function Mseg(){this.d=[],this.e=[0,0],this.f=0}function Scheduler(a,b){if(null===a)throw new TypeError("(Scheduler.Scheduler) Invalid AudioContext (did you make a typo or forget to create the context?");this.g=60,this.h=4,this.i=4,this.j=0,this.k=.5,this.l=!1,this.m=!1,this.n=this.o(0,0,0),this.p=this.o(0,0,0),this.q={},this.r=.02,this.s=.01,"undefined"!=typeof b&&(b.s&&(this.s=b.s),b.r&&(this.r=b.r),b.k&&(this.k=b.k),b.i&&(this.i=b.i),b.h&&(this.h=b.h),b.g&&(this.g=b.g),this.q={t:b.t,u:b.u,v:b.v}),this.a=a,this.w=null,this.x=null,this.y=0,this.z=0,this.A=null,this.B=this.o(0,0,0),this.C=[],void(this.D={E:this.F(0,0),G:this.o(0,0,-1)})}function Rotary(a,b){this.H=b.I,this.J=a,this.K=b.L,this.M=b.N,this.O=b.P,this.Q=b.R,this.S=b.T,this.U=this.Q,this.V=225,b.W&&(this.V=b.W),this.X=135,b.Y&&(this.X=b.Y),this.Z=360-this.V,this.$=this.Z+this.X,this._=this.Z/this.$,this.aa=this.V,this.ba=0,this.ca=0,$(this.J).da("width",this.M),$(this.J).da("height",this.O),$(this.J).ea("<img></img>"),$(this.J+" img").fa("src",this.K),$(this.J+" img").da("width",this.M),$(this.J+" img").da("height",this.O),$(this.J+" img").da("user-select","none"),this.ga(0),this.ha=0,this.ia=!1;var c,d=this;$(this.J).ja(function(a){a.ka&&a.ka(),a.la&&a.la(),a.ma=!0,a.na=!1,d.ia=!0,d.ha=a.oa}),$(this.J).pa(function(a){d.ia=!1}),$(this.J).qa(function(a){d.ia=!1}),$(this.J).ra(function(a){if(a.ka&&a.ka(),a.la&&a.la(),a.ma=!0,a.na=!1,d.ia){var b=d.ha-a.oa;d.ha=a.oa,d.ga(b)}}),b.sa&&b.sa!==!0||(this.ta=new Hammer($(a)[0]),this.ta.va("rotate").ua({wa:!0}),this.ta.xa("rotatestart",function(a){c=a.ya}),this.ta.xa("rotate",function(a){var b=a.ya-c;d.ga(b),c=a.ya})),b.za&&b.za!==!0||(this.ta.va("pan").ua({Aa:Hammer.Ba}),this.ta.xa("panup pandown",function(a){d.ga(-25*a.Ca)}))}BufferLoader.Ea.Da=function(a,b,c,d){if("undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,null===b)throw new TypeError("(BufferLoader.loadBufferList) List of samples to load is invalid");this.b[this.c]={},this.b[this.c].Fa={},this.b[this.c].Ga=0,this.b[this.c].Ha=0;for(var e in b)"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=2&&void 0,this.b[this.c].Fa[e]=b[e],this.b[this.c].Ha++;this.Ia(a,this.c++,c,d)},BufferLoader.Ea.Ia=function(a,b,c,d){"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0;var e=this.b;for(var f in e[b].Fa)"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,this.Ja({Ka:e[b].Fa[f],La:f},function(f,g){a[g.La]=f,d&&d({Ka:g.Ka,La:g.La,Ma:!!f}),++e[b].Ga>=e[b].Ha&&("undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=2&&void 0,delete e[b],c())})},BufferLoader.Ea.Ja=function(a,b){if("undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,null===a)throw new TypeError("(BufferLoader.loadBuffer) Sample resource to load is invalid");var c,d=this;c="string"==typeof a||a instanceof String?a:a.Ka;var e=new XMLHttpRequest;e.Na("GET",c,!0),e.Oa="arraybuffer",e.Pa=function(){d.a.Qa(e.Ra,function(c){"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,b(c,a)},function(){b(null,a)})},e.Sa()},Mseg.Ea.Ta=function(a){"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0;var b=a.Ua,c=a.Va,d=0;a.Wa&&(d="linear"==a.Wa?0:1),this.d.Xa(new Array(b,c,d)),this.f+=a.Ua},Mseg.Ea.Ya=function(a){"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0;var b=0;a.Wa&&(b="linear"==a.Wa?0:1),this.e=new Array(a.Ua,b)},Mseg.Ea.Za=function(a,b,c){"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0;var d=0;c&&c.$a&&(d=c.$a),0===this.e[1]?a._a(d,b+this.e[0]):a.ab(d,b+this.e[0])},Mseg.Ea.bb=function(){return this.e[0]},Mseg.Ea.cb=function(a,b,c){"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,a.db(b),a.eb(a.Va,b);var d=0,e=0,f=1;c&&(c.$a&&(e=c.$a),c.fb&&(f=c.fb));for(var g=0;g<this.d.gb;g++){var h=mcad.hb(this.d[g][1],e,f),i=b+d+this.d[g][0];0===this.d[g][2]?a._a(h,i):a.ab(h,i),d+=this.d[g][0]}},Mseg.Ea.ib=function(a,b,c){"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,a.db(b),a.eb(a.Va,b),this.e[0]>0&&this.Za(a,b,c)},Mseg.Ea.jb=function(a,b,c,d){"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0,this.cb(a,b,d),this.e[0]>0&&this.Za(a,b+c)},Scheduler.Ea.kb=function(){var a=this.a.lb;for(a-=this.A;this.z<a+this.r;){var b=this.z+this.A,c=b,d=this.mb(),e=this.j*this.k*d;this.B.nb%2&&(c+=e);var f=this.F(b,c);this.C.Xa({E:this.ob(f),G:this.pb(this.B)}),this.q.t&&this.q.t(this.ob(f),this.pb(this.B)),"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=2&&void 0,this.qb()}var g=this;this.w=setTimeout(function(){g.kb()},1e3*this.s)},Scheduler.Ea.qb=function(){var a=60/this.g;this.B.nb++,this.rb(this.B),this.z+=1/this.h*a},Scheduler.Ea.sb=function(){for(var a=this.D,b=this.a.lb;this.C.gb&&this.C[0].E.j<b;)a=this.C[0],this.C.tb(0,1);this.ub(b),this.D.G.nb!=a.G.nb&&(this.n=this.pb(a.G),this.vb(this.n,1),this.q.u&&this.q.u(this.pb(a.G),this.pb(this.D.G)),this.D=a,"undefined"!=typeof MCAD_DEBUG&&MCAD_DEBUG>=1&&void 0);var c=this;this.x=requestAnimationFrame(function(){c.sb()})},Scheduler.Ea.ub=function(a){if(this.D.G.nb>=0&&this.l){var b=this.mb(),c=a-this.D.E.wb,d=c/b,e=this.D.G.xb+d,f=this.yb();this.y=e/f}this.q.v&&this.q.v(this.y)},Scheduler.Ea.yb=function(){return this.h*this.i},Scheduler.Ea.zb=function(a){this.l===!0&&this.Ab(),this.l=!0,this.z=0,this.A=this.a.lb,a?this.B=this.pb(this.Bb):this.m?this.B=this.pb(this.n):this.B=this.o(0,0,0),this.D={E:this.F(this.a.lb,this.a.lb),G:this.o(0,0,-1)},this.kb(),this.sb()},Scheduler.Ea.Cb=function(){this.l=!1,clearTimeout(this.w),cancelAnimationFrame(this.x),this.q.v&&!this.m&&(this.y=0,this.q.v(this.y)),this.p=this.pb(this.D.G),this.n=this.pb(this.p),this.vb(this.n,1)},Scheduler.Ea.mb=function(){return 60/this.g*(1/this.h)},Scheduler.Ea.pb=function(a){var b={Db:a.Db,Eb:a.Eb,nb:a.nb,xb:a.xb,Fb:a.Fb};return b},Scheduler.Ea.o=function(a,b,c){var d={Db:a,Eb:b,nb:c};return this.rb(d),d},Scheduler.Ea.rb=function(a){var b=a.nb+a.Db*this.yb()+a.Eb*this.h;b<0?a={nb:-1,Db:0,Eb:0,xb:0,Fb:-1}:(a.Db=Math.Gb(b/this.yb()),b-=a.Db*this.yb(),a.Eb=Math.Gb(b/this.h),b-=Math.Gb(a.Eb*this.h),a.nb=b,a.xb=a.Eb*this.h+a.nb,a.Fb=a.Db*this.yb()+a.xb)},Scheduler.Ea.vb=function(a,b){a.nb+=b,this.rb(a)},Scheduler.Ea.ob=function(a){var b={wb:a.wb,j:a.j};return b},Scheduler.Ea.F=function(a,b){var c={wb:a,j:b};return c},Scheduler.Ea.Hb=function(a){if(!this.l)return{nb:-1,Db:0,Eb:0,xb:0,Fb:-1};var b=a-this.A,c=Math.Gb(b/this.mb());return this.o(0,0,c)},Rotary.Ea.Ib=function(a){this.ca=a,this.ca<this._?this.aa=this.ca*this.$+360-this.Z:this.aa=this.ca*this.$-this.Z,this.ga(0)},Rotary.Ea.Jb=function(a){this.Ib(mcad.Kb(a,this.Q,this.S))},Rotary.Ea.Lb=function(a){return this.ca},Rotary.Ea.Mb=function(a){return this.U},Rotary.Ea.ga=function(a){var b,c=this.aa,d=a;this.aa>180?(b=this.aa-180,d<-b&&(d=-b)):(b=180-this.aa,d>b&&(d=b)),c+=d,c>=359?c=0:c<0&&(c=360+c),this.aa=c,this.aa>this.X&&this.aa<this.V&&(this.aa>180?1==this.ba?this.aa=this.V:this.aa=this.X:1==this.ba?this.aa=this.V:this.aa=this.X),this.aa<0&&(this.aa=0),this.aa>360&&(this.aa=360),this.aa>180?(this.ca=(this.aa+this.Z-360)/this.$,this.ba=1):(this.ca=(this.Z+this.aa+.5)/this.$,this.ba=2),this.ca>1&&(this.ca=1),this.ca<0&&(this.ca=0),this.U=mcad.hb(this.ca,this.Q,this.S),$(this.J).da("transform","rotate("+this.aa+"deg)"),this.H(this.U.Nb(0),this.ca.Nb(2))};var mcad={hb:function(a,b,c){return b+(c-b)*a},Kb:function(a,b,c){return(a-b)/(c-b)},Ob:function(a){return 2*a-1},Pb:function(a){return(a+1)/2},Qb:function(a,b,c){return this.hb(this.Pb(a),b,c)},Rb:function(a,b,c){return this.Ob(this.Kb(a,b,c))},Sb:function(a,b,c){var d=Math.Tb(b),e=Math.Tb(c),f=e-d;return(Math.Tb(a)-d)/f},Ub:function(a,b,c){var d=Math.Tb(b),e=Math.Tb(c),f=e-d;return Math.Vb(f*a+d)},Wb:function(a,b,c,d,e){var f=this.Kb(a,b,c);return this.hb(f,d,e)},Xb:function(a,b,c,d,e){var f=this.Kb(a,b,c);return this.Ub(f,d,e)},Yb:function(a,b,c,d,e){var f=this.Sb(a,b,c);return this.hb(f,d,e)},Zb:function(a){f_0=440,MidA=69;var b=a-MidA,c=Math.$b(2,1/12);return f_0*Math.$b(c,b)}};