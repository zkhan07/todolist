(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{39:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),i=a.n(r),s=a(14),c=a(12),o=a(15),u=a(16),m=a(18),d=a(32),h=a.n(d).a.initializeApp({apiKey:"AIzaSyBGbLaAy7OpD2oCsbB0cnUhJOUKjB5BZJo",authDomain:"todolist-27957.firebaseapp.com",databaseURL:"https://todolist-27957.firebaseio.com",projectId:"todolist-27957",storageBucket:"",messagingSenderId:"1096558024816",appId:"1:1096558024816:web:70ca69d93997e28d857cb5",measurementId:"G-K9EZXD9T4E"}),p=a(13),b=a(11),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).signin=a.signin.bind(Object(b.a)(a)),a.signup=a.signup.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.state={email:"",password:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"signin",value:function(e){e.preventDefault(),h.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){})).catch((function(e){console.log(e)}))}},{key:"signup",value:function(e){e.preventDefault(),h.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log()})).catch((function(e){console.log(e)}))}},{key:"handleChange",value:function(e){this.setState(Object(p.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputEmail1"},"Email address"),l.a.createElement("input",{onChange:this.handleChange,type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email",name:"email"}),l.a.createElement("small",{id:"emailHelp",className:"form-text text-muted"}))," ",l.a.createElement("br",null),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{for:"exampleInputPassword1"},"Password"),l.a.createElement("input",{name:"password",onChange:this.handleChange,type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password"}))," ",l.a.createElement("br",null),l.a.createElement("button",{onClick:this.signin,className:"btn btn-primary"}," Sign In"),l.a.createElement("button",{onClick:this.signup,className:"btn btn-primary"}," Sign Up")))}}]),t}(n.Component),E=a(80),g=a(85),v=a(81),O=a(83),j=a(84),y=a(82),I=a(35),k=a.n(I),w=Object(E.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function C(){var e=w();return l.a.createElement("div",{className:e.root},l.a.createElement(g.a,{position:"static"},l.a.createElement(v.a,null,l.a.createElement(y.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},l.a.createElement(k.a,null)),l.a.createElement(O.a,{variant:"h6",className:e.title},"Home Page"),l.a.createElement(j.a,{color:"inherit"}," Logout "))))}var S=a(25),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={newItem:"",list:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"updateInput",value:function(e,t){this.setState(Object(p.a)({},e,t))}},{key:"addItem",value:function(){var e={id:1+Math.random(),value:this.state.newItem.slice()},t=Object(S.a)(this.state.list);t.push(e),this.setState({list:t,newItem:""})}},{key:"deleteItem",value:function(e){var t=Object(S.a)(this.state.list).filter((function(t){return t.id!==e}));this.setState({list:t})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,"Add an Items ",l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Type item here",value:this.state.newItem,onChange:function(t){return e.updateInput("newItem",t.target.value)}}),l.a.createElement("button",{onClick:function(){return e.addItem()}},"Add")," ",l.a.createElement("br",null),l.a.createElement("ul",null,this.state.list.map((function(t){return l.a.createElement("li",{key:t.id},t.value,l.a.createElement("button",{onClick:function(){return e.deleteItem(t.id)}},"Delete"))}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).logout=a.logout.bind(Object(b.a)(a)),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"logout",value:function(){h.auth().signOut()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(C,null),"You are home",l.a.createElement("button",{onClick:this.logout}," Logout "),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x,null))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).authListener=function(){h.auth().onAuthStateChanged((function(e){e?a.setState({user:e}):a.setState({user:null})}))},a.state={user:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.user?l.a.createElement(N,null):l.a.createElement(f,null))}}]),t}(n.Component);i.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.218e7458.chunk.js.map