(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(7),i=n.n(r),o=(n(13),n(1)),u=n(2),s=n(4),l=n(3),d=n(5),h=(n(15),function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"I thought that since I didn't get to be there today, I'd get you a card"))}}]),e}(a.Component)),p=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"But then I realized I wouldn't be able to give you the card"))}}]),e}(a.Component),m=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"Which kinda defeats the whole point of getting a card.  So..."))}}]),e}(a.Component),b=function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"card"},c.a.createElement("p",null,"I made you a virtual card instead!  (Hope it counts)"))}}]),e}(a.Component),y=function(t){function e(){var t,n;Object(o.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(l.a)(e)).call.apply(t,[this].concat(c)))).state={button:"Click here to begin!",count:0,curContent:"",cards:["First","Second","Third","Fourth","Fifth"]},n}return Object(d.a)(e,t),Object(u.a)(e,[{key:"startParty",value:function(){if(this.setState({button:"Next"}),document.querySelector(".happy-birthday").classList.add("clicked"),this.state.count>5)this.setState({count:0,curContent:""}),document.querySelector(".happy-birthday").classList.remove("clicked"),document.querySelector(".button").classList.add("clicked");else{this.setState(function(t){return{count:t.count+1}});var t=this.state.count;this.setState(function(e){return{curContent:e.cards[t]}})}}},{key:"setText",value:function(){switch(this.state.count){case 1:return c.a.createElement(h,null);case 2:return c.a.createElement(p,null);case 3:return c.a.createElement(m,null);case 4:return c.a.createElement(b,null);default:return c.a.createElement("div",{class:"card"},"Happy 33rd Birthday!")}}},{key:"render",value:function(){return c.a.createElement("div",{className:"App-header"},c.a.createElement("h1",{className:"happy-birthday"},this.props.content),c.a.createElement("div",{className:"button",onClick:this.startParty.bind(this)},c.a.createElement("p",null,this.state.button)),this.state.curContent&&c.a.createElement("div",null,this.setText()))}}]),e}(a.Component),f=(n(16),function(t){function e(){return Object(o.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(y,{content:"Happy Birthday Galiya!"}))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.0378973a.chunk.js.map