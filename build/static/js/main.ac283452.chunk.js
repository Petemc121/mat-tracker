(this["webpackJsonpmat-tracker-client"]=this["webpackJsonpmat-tracker-client"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(12),c=n.n(a),s=n(6),m=n.n(s),i=n(7),b=n(3),o=n(5),l=n(2);function d(e){return j.apply(this,arguments)}function j(){return(j=Object(i.a)(m.a.mark((function e(t){var n,r,a,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.name,e.next=3,fetch("/members");case 3:return r=e.sent,e.next=6,r.json();case 6:if(a=e.sent,""!==n){e.next=9;break}return e.abrupt("return",a);case 9:return c=a.filter((function(e){return null!==e.member_name&&e.member_name.toUpperCase().includes(n.toUpperCase())})),e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var u=n(9),h=n(8),p=n(0);function O(e){var t=e.handleChange,n=e.handleSubmit,a=e.getMembersFunction,c=void 0===a?d:a,s=e.setMembers,l=Object(r.useState)({member_name:"",member_phone:"",member_belt:"",member_joined_at:""}),j=Object(b.a)(l,2),O=j[0],x=j[1],f=Object(r.useState)(!1),v=Object(b.a)(f,2),g=v[0],_=v[1],k=new Date,y=k.getMonth()+1,N=k.getFullYear()+"-"+y+"-"+k.getDate();return console.log(O),Object(r.useEffect)((function(){function e(){return(e=Object(i.a)(m.a.mark((function e(){var t,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Object.values(O).every((function(e){return""!==e}))){e.next=18;break}return e.prev=1,t=O,e.next=5,fetch("/members",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 5:return n=e.sent,e.next=8,c({name:""});case 8:r=e.sent,s(r),console.log(n),O={},_(!0),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[O]),void 0===n&&(n=function(e){e.preventDefault(),""!==O.member_name?""!==O.member_phone?isNaN(parseInt(O.member_phone))?alert("please only enter numbers in phone field"):O.member_phone.length<10||O.member_phone.length>11?alert("Your phone number is not valid"):(""===O.member_belt&&x((function(e){return Object(h.a)(Object(h.a)({},e),{},{member_belt:"white"})})),""===O.member_joined_at&&x((function(e){return Object(h.a)(Object(h.a)({},e),{},{member_joined_at:N})})),console.log(O)):alert("please enter your phone number"):alert("please enter your name")}),void 0===t&&(t=function(e){var t=e.target.name,n=e.target.value;x((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(u.a)({},t,n))}))}),Object(p.jsxs)("div",{id:"memberInputFormContainer",children:[Object(p.jsxs)("form",{id:"memberInputForm",style:{display:g?"none":"block"},children:[Object(p.jsxs)("div",{className:"memberInputElement",children:["Name:",Object(p.jsx)("input",{onChange:t,name:"member_name",className:"memberInput","data-testid":"name"})]}),Object(p.jsxs)("div",{className:"memberInputElement",children:["Phone number:",Object(p.jsx)("input",{onChange:t,name:"member_phone",className:"memberInput","data-testid":"phone"})]}),Object(p.jsxs)("div",{className:"memberInputElement",children:["Belt:",Object(p.jsxs)("select",{onChange:t,name:"member_belt","data-testid":"beltInput",className:"memberInput",children:[Object(p.jsx)("option",{value:"white",children:"white"}),Object(p.jsx)("option",{value:"blue",children:"blue"}),Object(p.jsx)("option",{value:"purple",children:"purple"}),Object(p.jsx)("option",{value:"brown",children:"brown"}),Object(p.jsx)("option",{value:"black",children:"black"})]})]}),Object(p.jsxs)("div",{className:"memberInputElement",children:["Joined:",Object(p.jsx)("input",{name:"member_joined_at",className:"memberInput",type:"date","data-testid":"joined",onChange:t,defaultValue:N})]}),Object(p.jsx)("input",{"data-testid":"submit",onClick:n,type:"submit"})]}),Object(p.jsx)(o.b,{className:"homeLink",to:"/",children:"Home"}),Object(p.jsxs)("div",{id:"memberAddedNotification",style:{display:g?"flex":"none"},children:[Object(p.jsx)("h3",{id:"memberAddedMessage",children:"Member added! Navigate back to home."}),Object(p.jsx)(o.b,{className:"homeLink",to:"/",children:"Home"})]})]})}function x(e){var t=e.setMembers,n=e.getMembersFunction,a=void 0===n?d:n,c=Object(l.g)(),s=c.id,j=c.name,u=c.phone,h=c.belt,O=c.joined,x=Object(r.useState)(!1),f=Object(b.a)(x,2),v=f[0],g=f[1];function _(){return(_=Object(i.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/members/"+s,{method:"DELETE",headers:{"Content-type":"application/json"}});case 3:return e.sent,e.next=6,a({name:""});case 6:n=e.sent,t(n),g(!0),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(p.jsxs)("div",{id:"memberPage",children:[Object(p.jsxs)("div",{id:"memberInfoContainer",style:{display:!1===v?"flex":"none"},children:[Object(p.jsxs)("div",{className:"memberInfoElement",children:[Object(p.jsx)("h3",{children:"Name:"})," ",j]}),Object(p.jsxs)("div",{className:"memberInfoElement",children:[Object(p.jsx)("h3",{children:"Phone number:"})," ",u]}),Object(p.jsxs)("div",{className:"memberInfoElement",children:[Object(p.jsx)("h3",{children:"Belt:"})," ",h]}),Object(p.jsxs)("div",{className:"memberInfoElement",children:[Object(p.jsx)("h3",{children:"Joined at:"})," ",O]}),Object(p.jsx)("button",{"data-testid":"delete",onClick:function(){return _.apply(this,arguments)},children:"delete"}),Object(p.jsx)(o.b,{className:"homeLink",to:"/",children:"Home"})]}),Object(p.jsxs)("div",{id:"memberDeleted",style:{display:!1===v?"none":"flex"},children:[Object(p.jsx)("h2",{children:"Member deleted, navigate back to home"}),Object(p.jsx)(o.b,{className:"homeLink",to:"/",children:"Home"})]})]})}n(19);var f=function(e){var t=e.member;return Object(p.jsxs)("button",{className:"memberButton",children:[Object(p.jsx)("h3",{children:t.member_name}),Object(p.jsx)("div",{style:{backgroundColor:void 0!==t?null===t.member_belt?"white":t.member_belt:"white"},"data-testid":"belt"})]})};function v(e){return Object(p.jsx)("div",{id:"membersContain",children:void 0!==e.members&&e.members.map((function(e){return Object(p.jsx)(o.b,{className:"memberLink",to:"member/"+e.member_id+"/"+e.member_name+"/"+e.member_belt+"/"+e.member_phone+"/"+e.member_joined_at,children:Object(p.jsx)(f,{member:e},e.member_id)},e.member_id+"_link")}))})}function g(e){var t=e.setMemberSearch;return Object(p.jsx)("div",{id:"input",children:Object(p.jsx)("input",{onChange:function(e){t(e.target.value),console.log(e.target.value)},placeholder:"Search Member","data-testid":"search"})})}function _(e){var t=e.members,n=e.setMemberSearch;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{"data-testid":"header",children:"Mat Tracker"}),Object(p.jsxs)("div",{id:"elementContainer",children:[Object(p.jsx)(o.b,{id:"addMemberLink",to:"CreateMemberPage",children:Object(p.jsx)("button",{id:"addMember",children:"Add member"})}),Object(p.jsx)(g,{setMemberSearch:n}),Object(p.jsx)(v,{members:t})]})]})}function k(e){var t=e.getMembersFunction,n=void 0===t?d:t,a=Object(r.useState)(),c=Object(b.a)(a,2),s=c[0],j=c[1],u=Object(r.useState)(!0),h=Object(b.a)(u,2),f=h[0],v=h[1],g=Object(r.useState)(""),k=Object(b.a)(g,2),y=k[0],N=k[1];return Object(r.useEffect)((function(){function e(){return(e=Object(i.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n({name:y});case 3:t=e.sent,j(t),v(!1),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),v(!0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n,y]),f?Object(p.jsx)("div",{children:"...loading"}):Object(p.jsx)(o.a,{children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{path:"/",element:Object(p.jsx)(_,{members:s,setMemberSearch:N})}),Object(p.jsx)(l.a,{path:"CreateMemberPage",element:Object(p.jsx)(O,{setMembers:j})}),Object(p.jsx)(l.a,{path:"member/:id/:name/:belt/:phone/:joined",element:Object(p.jsx)(x,{setMembers:j,getMembersFunction:d})})]})})}var y=function(){return Object(p.jsx)(k,{})};c.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.ac283452.chunk.js.map