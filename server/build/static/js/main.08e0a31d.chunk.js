(this["webpackJsonpteam-paylend"]=this["webpackJsonpteam-paylend"]||[]).push([[0],{45:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(21),c=a.n(s),l=(a(45),a(35)),o=a(20),d=a(1),i=function(){return Object(d.jsx)("div",{className:"py-4 px-4 max-w-4xl mx-auto mt-auto border-t border-gray-200",children:Object(d.jsxs)("p",{className:"flex items-center text-base md:text-lg justify-center",children:["Built with \xa0",Object(d.jsx)(o.a,{className:"h-8 text-paylend-dark opacity-80"})," \xa0 by",Object(d.jsx)("span",{className:"text-paylend-dark font-semibold cursor-pointer",children:"\xa0 GeoffreyWN"})]})})},u=a(9),m=a(5),b=a(6),p=a.n(b),j=a(14),x=a(16),g=a.n(x),h=a(22),f={token:localStorage.getItem("token"),user:localStorage.getItem("user")?JSON.parse(localStorage.getItem("user")):null},O=Object(h.b)({name:"auth",initialState:f,reducers:{signupAction:function(e,t){e.user=t.payload.user,localStorage.setItem("token",JSON.stringify(t.payload.token)),localStorage.setItem("user",JSON.stringify(t.payload.user))},updateUser:function(e,t){e.user=t.payload,localStorage.setItem("user",JSON.stringify(t.payload))},loginSuccess:function(e,t){e.user=t.payload.user,localStorage.setItem("token",JSON.stringify(t.payload.token)),localStorage.setItem("user",JSON.stringify(t.payload.user))},logoutSuccess:function(e,t){e.token=null,e.user=null,localStorage.removeItem("token"),localStorage.removeItem("user")}}}),y=O.reducer,N=O.actions,w=N.loginSuccess,v=N.logoutSuccess,k=N.signupAction,S=N.updateUser,C=function(e){var t=e.fname,a=e.lname,r=e.email,n=e.gender,s=e.password,c=e.confirmPassword,l=e.dob;return function(){var e=Object(j.a)(p.a.mark((function e(o){var d,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,d={headers:{"Content-Type":"application/json"}},e.next=4,g.a.post("/api/v1/users/register",{fname:t,lname:a,email:r,gender:n,password:s,confirmPassword:c,dob:l},d);case 4:i=e.sent,console.log(i.data),o(k(i.data)),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.errors[0].msg),e.abrupt("return",console.error(e.t0.response.data.errors));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},F=function(e){var t=e.id,a=e.fname,r=e.lname,n=e.email,s=e.gender,c=e.password,l=e.confirmPassword,o=e.dob;return function(){var e=Object(j.a)(p.a.mark((function e(d){var i,u;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i={headers:{"Content-Type":"application/json","x-auth-token":localStorage.getItem("token")}},e.next=4,g.a.post("/api/v1/users/update/".concat(t),{fname:a,lname:r,email:n,gender:s,password:c,confirmPassword:l,dob:o},i);case 4:u=e.sent,d(S(u.data)),e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),alert(e.t0.response.data.errors[0].msg),e.abrupt("return",console.error(e.t0.response.data.errors));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()},P=function(e){return e.auth.user},I=a(4),q=function(){var e=Object(m.c)(P),t=Object(m.b)(),a=Object(I.g)();return Object(d.jsx)("div",{className:" px-4 md:px-8 bg-paylend-dark",children:Object(d.jsxs)("nav",{className:" py-6 flex max-w-screen-xl  mx-auto ",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("h1",{className:"text-3xl text-white cursor-pointer scale-100 transition duration-200 transform hover:scale-105 hover:text-red-200 hover:font-semibold ",onClick:function(){return a.push("/dashboard")},children:"Team Paylend"})}),Object(d.jsx)("div",{className:"flex-grow"}),Object(d.jsx)("div",{className:"flex gap-2 md:gap-8",children:e?Object(d.jsx)("button",{onClick:function(){t(function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",t(v()));case 4:return e.prev=4,e.t0=e.catch(0),e.abrupt("return",console.error(e.t0.response.data.errors));case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}()),a.push("/login"),console.log("logout clikced")},className:"navbar-btn",children:"Log out"}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(u.b,{to:"/login",className:"navbar-btn",children:"Login"}),Object(d.jsx)(u.b,{to:"/signup",className:"navbar-btn hidden md:inline-block ",children:"Sign Up"})]})})]})})},L=function(e){var t=e.children,a=e.isLoggedIn;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(q,{isLoggedIn:a}),t,Object(d.jsx)(i,{})]})},D=a(15),M=a(10),U=a(17),J={email:"",password:""},T=function(){var e=Object(r.useState)(J),t=Object(U.a)(e,2),a=t[0],n=t[1],s=a.email,c=a.password,l=Object(m.b)(),o=function(e){n(Object(M.a)(Object(M.a)({},a),{},Object(D.a)({},e.target.name,e.target.value)))},i=function(e){e.preventDefault(),l(function(e){var t=e.email,a=e.password;return function(){var e=Object(j.a)(p.a.mark((function e(r){var n,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={headers:{"Content-Type":"application/json"}},e.next=4,g.a.post("/api/v1/users/login",{email:t,password:a},n);case 4:s=e.sent,console.log(s.data),r(w(s.data)),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(0),alert(e.t0.response.data.errors[0].msg),e.abrupt("return",console.error(e.t0.response.data.errors));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()}(a)),n(J)};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"text-2xl md:text-3xl font-bold text-paylend text-center ",children:"Log in"}),Object(d.jsxs)("div",{className:"mt-6 mx-auto ",children:[Object(d.jsxs)("form",{onSubmit:function(e){return i(e)},children:[Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-8",children:[Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-white text-md md:text-lg",children:"Email address"}),Object(d.jsx)("input",{type:"email",value:s,name:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"name@yourdomain.com",onChange:function(e){return o(e)},required:!0})]}),Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-white text-md md:text-lg",children:"Password"}),Object(d.jsx)("input",{type:"password",value:c,name:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"",onChange:function(e){return o(e)},required:!0})]})]}),Object(d.jsx)("div",{className:"py-8 text-center",children:Object(d.jsx)("button",{className:"py-2 px-4 text-white bg-paylend hover:bg-paylend-dark  rounded-lg shadow-md",type:"submit",children:"Login"})})]}),Object(d.jsxs)("p",{className:"text-center text-white",children:[" Create an account today! ",Object(d.jsx)(u.b,{to:"/signup",className:"text-paylend",children:" Sign Up"})," "]})]})]})},E=function(){return Object(m.c)(P)?Object(d.jsx)(I.a,{to:"/dashboard"}):Object(d.jsx)("div",{className:"page-bg pt-24 md:pt-40 pb-28 md:pb-64 px-8 h-full",children:Object(d.jsx)("div",{className:"py-5 md:py-6 px-5 md:px-10 md:w-2/3 max-w-md bg-white rounded-xl mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 border border-gray-200 ",children:Object(d.jsx)(T,{})})})},Y={fname:"",lname:"",email:"",gender:"",dob:"",password:"",confirmPassword:""},B=function(){var e=Object(r.useState)(Y),t=Object(U.a)(e,2),a=t[0],n=t[1],s=a.fname,c=a.lname,l=a.email,o=a.gender,i=a.password,u=a.confirmPassword,b=a.dob,x=function(e){var t=e.target,r=t.name,s=t.value;n(Object(M.a)(Object(M.a)({},a),{},Object(D.a)({},r,s)))},g=Object(m.b)(),h=function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),console.log(a),g(C(a)),n(Y);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"text-2xl md:text-3xl font-bold text-paylend text-center ",children:"Sign Up"}),Object(d.jsx)("div",{className:"mt-12 max-w-lg mx-auto ",children:Object(d.jsxs)("form",{onSubmit:function(e){return h(e)},children:[Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8",children:[Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-white text-md md:text-lg",children:"First Name"}),Object(d.jsx)("input",{type:"text",value:s,name:"fname",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"First Name",onChange:function(e){return x(e)},required:!0})]}),Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-white text-md md:text-lg",children:"Last Name"}),Object(d.jsx)("input",{type:"text",value:c,name:"lname",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"Last Name",onChange:function(e){return x(e)},required:!0})]}),Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-white text-md md:text-lg",children:"Email address"}),Object(d.jsx)("input",{type:"email",value:l,name:"email",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"name@yourdomain.com",onChange:function(e){return x(e)},required:!0})]}),Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-white text-md md:text-lg",children:"Date of birth"}),Object(d.jsx)("input",{type:"date",value:b,name:"dob",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",onChange:function(e){return x(e)},required:!0})]})]}),Object(d.jsx)("div",{className:"mx-auto flex justify-center py-8",children:Object(d.jsx)("label",{className:"block text-center",children:Object(d.jsxs)("div",{className:"flex gap-6 pt-3 items-center ",children:[Object(d.jsxs)("span",{className:"flex gap-2",children:[Object(d.jsx)("input",{type:"radio",value:"Male",id:"male",name:"gender",checked:"Male"===o,className:"mt-1 block rounded-md cursor-pointer border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",onChange:function(e){return x(e)},required:!0}),Object(d.jsx)("label",{htmlFor:"male",className:"text-white cursor-pointer",children:"Male"})]}),Object(d.jsxs)("span",{className:"flex gap-2 cursor-pointer",children:[Object(d.jsx)("input",{type:"radio",value:"Female",id:"female",name:"gender",checked:"Female"===o,className:"mt-1 block rounded-md cursor-pointer border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",onChange:function(e){return x(e)},required:!0}),Object(d.jsx)("label",{htmlFor:"female",className:"text-white cursor-pointer",children:"Female"})]})]})})}),Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8",children:[Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-white text-md md:text-lg",children:"Password"}),Object(d.jsx)("input",{type:"password",value:i,name:"password",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"Password",onChange:function(e){return x(e)},required:!0})]}),Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-white text-md md:text-lg",children:"Confirm Password"}),Object(d.jsx)("input",{type:"password",value:u,name:"confirmPassword",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"Confirm Password",onChange:function(e){return x(e)},required:!0})]})]}),Object(d.jsx)("div",{className:"pt-12 pb-2 text-center",children:Object(d.jsx)("button",{className:"py-2 px-6 text-white bg-paylend hover:bg-paylend-dark  rounded-lg shadow-md",type:"submit",children:"Sign Up"})})]})})]})},A=function(){return Object(m.c)(P)?Object(d.jsx)(I.a,{to:"/dashboard"}):Object(d.jsx)("div",{className:"page-bg pt-40 pb-64 px-8  h-full",children:Object(d.jsx)("div",{className:"py-6 px-8 w-1/3 md:w-2/3 max-w-screen-md bg-gray-900 rounded-xl mx-auto bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 border border-gray-200 ",children:Object(d.jsx)(B,{})})})},G=a.p+"static/media/avatar.230ccea7.png",W=a(39),_=a.n(W),z=function(){var e=Object(m.c)(P),t=e.email,a=e.fname,r=e.lname,n=e.gender,s=e.dob,c=Object(I.g)();return Object(d.jsx)("div",{className:"bg-red-50 py-10 px-8 my-auto",children:Object(d.jsxs)("div",{className:" px-4 py-10 my-10 max-w-screen-md mx-auto space-y-8 bg-red-100 rounded-xl shadow-xl flex flex-col justify-center items-center",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("img",{src:G,alt:"profile",loading:"lazy",className:"rounded-full h-40"})}),Object(d.jsxs)("div",{className:"space-y-8 text-center",children:[Object(d.jsxs)("h1",{className:"text-paylend-dark text-2xl",children:[a," ",r,"  "]}),Object(d.jsx)("h2",{children:"Software Engineer from Kenya. Let's build the future #fintech"}),Object(d.jsxs)("p",{className:"flex items-center justify-center gap-2",children:["  ",Object(d.jsx)(o.b,{className:"h-5 text-paylend-dark opacity-80"})," ",t]})]}),Object(d.jsxs)("div",{className:"flex gap-4",children:[Object(d.jsxs)("h2",{children:["Gender: ",n]}),Object(d.jsxs)("h2",{children:[" DOB: ",Object(d.jsx)(_.a,{format:"YYYY/MM/DD",children:s})," "]})]}),Object(d.jsx)("div",{className:"flex justify-center",children:Object(d.jsxs)("button",{className:"btn-edit flex items-center",onClick:function(){return c.push("/user/".concat(e._id))},children:[" ",Object(d.jsx)(o.c,{className:"h-5 pr-2"})," Edit  "]})})]})})},K=function(){var e=Object(m.c)(P),t=new Date(e.dob),a=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate(),n={id:e._id,fname:e.fname,lname:e.lname,email:e.email,gender:e.gender,dob:a},s=Object(r.useState)(n),c=Object(U.a)(s,2),l=c[0],o=c[1],i=l.fname,u=l.lname,b=l.email,x=l.gender,g=l.dob,h=Object(I.g)(),f=function(e){var t=e.target,a=t.name,r=t.value;o(Object(M.a)(Object(M.a)({},l),{},Object(D.a)({},a,r)))},O=Object(m.b)(),y=function(){var e=Object(j.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),O(F(l)),h.push("/dashboard"),o(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("div",{className:"bg-red-50 py-10 px-8 my-auto",children:Object(d.jsx)("div",{className:" px-4 py-10 my-10 max-w-screen-md mx-auto space-y-8 bg-red-100 rounded-xl shadow-xl flex flex-col justify-center items-center",children:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"text-2xl md:text-3xl font-bold text-paylend text-center ",children:"Edit User"}),Object(d.jsx)("div",{className:"mt-12 max-w-lg mx-auto ",children:Object(d.jsxs)("form",{onSubmit:function(e){return y(e)},children:[Object(d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8",children:[Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-paylend-dark text-md md:text-lg",children:"First Name"}),Object(d.jsx)("input",{type:"text",value:i,name:"fname",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"First Name",onChange:function(e){return f(e)},required:!0})]}),Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-paylend-dark text-md md:text-lg",children:"Last Name"}),Object(d.jsx)("input",{type:"text",value:u,name:"lname",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"Last Name",onChange:function(e){return f(e)},required:!0})]}),Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-paylend-dark text-md md:text-lg",children:"Email address"}),Object(d.jsx)("input",{type:"email",value:b,readOnly:!0,disabled:!0,name:"email",className:"mt-1 block w-full rounded-md bg-gray-200  border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",placeholder:"name@yourdomain.com",onChange:function(e){return f(e)},required:!0})]}),Object(d.jsxs)("label",{className:"block text-left shadow-lg",children:[Object(d.jsx)("span",{className:"text-paylend-dark text-md md:text-lg",children:"Date of birth"}),Object(d.jsx)("input",{type:"text",value:g,name:"dob",min:"1950-01-01",max:"2020-12-31",className:"mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",onChange:function(e){return f(e)}})]})]}),Object(d.jsx)("div",{className:"mx-auto flex justify-center py-8",children:Object(d.jsx)("label",{className:"block text-paylend-dark",children:Object(d.jsxs)("div",{className:"flex gap-6 pt-3 items-center ",children:[Object(d.jsx)("span",{className:"text-paylend-dark text-md md:text-lg",children:" Gender:"}),Object(d.jsxs)("span",{className:"flex gap-2",children:[Object(d.jsx)("input",{type:"radio",value:"Male",id:"male",name:"gender",checked:"Male"===x,className:"mt-1 block rounded-md cursor-pointer border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",onChange:function(e){return f(e)},required:!0}),Object(d.jsx)("label",{htmlFor:"male",className:"text-paylend-dark cursor-pointer",children:"Male"})]}),Object(d.jsxs)("span",{className:"flex gap-2 cursor-pointer",children:[Object(d.jsx)("input",{type:"radio",value:"Female",id:"female",name:"gender",checked:"Female"===x,className:"mt-1 block rounded-md cursor-pointer border-gray-300 shadow-sm focus:border-paylend focus:ring focus:ring-paylend focus:ring-opacity-50",onChange:function(e){return f(e)},required:!0}),Object(d.jsx)("label",{htmlFor:"female",className:"text-paylend-dark cursor-pointer",children:"Female"})]})]})})}),Object(d.jsx)("div",{className:"pt-12 pb-2 text-center",children:Object(d.jsx)("button",{className:"py-2 px-6 text-white bg-paylend hover:bg-paylend-dark  rounded-lg shadow-md",type:"submit",children:"Update User"})})]})})]})})})},H=a(40),Q=["component"],R=function(e){var t=e.component,a=Object(H.a)(e,Q),r=Object(m.c)(P);return Object(d.jsx)(I.b,Object(M.a)(Object(M.a)({},a),{},{render:function(e){return r?Object(d.jsx)(t,Object(M.a)({},e)):Object(d.jsx)(I.a,{to:"/login"})}}))},V=function(e){e?g.a.defaults.headers.common["x-auth-token"]=e:delete g.a.defaults.headers.common["x-auth-token"]},X=Object(h.a)({reducer:{auth:y}});localStorage.token&&V(localStorage.token);var Z=function(){return Object(d.jsxs)(m.a,{store:X,children:[Object(d.jsxs)(l.a,{children:[Object(d.jsx)("title",{children:"Team Paylend"}),Object(d.jsx)("meta",{name:"description",content:"Welcome to Team Paylend. A community built around fintech"})]}),Object(d.jsx)(u.a,{children:Object(d.jsx)(L,{children:Object(d.jsxs)(I.d,{children:[Object(d.jsx)(R,{exact:!0,path:"/dashboard",component:z}),Object(d.jsx)(R,{exact:!0,path:"/user/:userId",component:K}),Object(d.jsx)(I.b,{path:"/login",exact:!0,component:E}),Object(d.jsx)(I.b,{path:"/signup",exact:!0,component:A}),Object(d.jsx)(I.b,{exact:!0,path:"/",children:Object(d.jsx)(I.a,{to:"/login"})})]})})})]})},$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,77)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(Z,{})}),document.getElementById("root")),$()}},[[76,1,2]]]);
//# sourceMappingURL=main.08e0a31d.chunk.js.map