(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,n,t){e.exports=t(40)},22:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),o=t(15),r=t.n(o),u=(t(22),t(16)),l=t(2),i=function(e){return c.a.createElement("div",null,"Filter shown with: ",c.a.createElement("input",{value:e.search,onChange:e.handleSearchChange}))},s=function(e){return c.a.createElement("form",{onSubmit:e.add},c.a.createElement("div",null,"Name: ",c.a.createElement("input",{value:e.name,onChange:e.handleNameChange})),c.a.createElement("div",null,"Number: ",c.a.createElement("input",{value:e.number,onChange:e.handleNumberChange})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"Add")))},d=function(e){return c.a.createElement("div",null,e.contactsToShow.map((function(n){return c.a.createElement("div",{key:n.id},c.a.createElement("p",{key:n.id},n.name,": ",n.number),c.a.createElement("button",{onClick:function(){return e.deletePerson(n.id)}},"Delete Person"))})))},m=function(e){var n=e.message,t=e.type;return null===n?null:c.a.createElement("div",{className:t},n)},f=t(4),h=t.n(f),b="/api/persons",p=function(){return h.a.get(b).then((function(e){return e.data}))},v=function(e){return h.a.post(b,e).then((function(e){return e.data}))},E=function(e,n){var t=h.a.put("".concat(b,"/").concat(e),n);console.log("Request:",t),console.log("New person: ",n);var a=t.then((function(e){return e.data}));return console.log(a),a},g=function(e){return h.a.delete("".concat(b,"/").concat(e)).then((function(e){return e.data}))},w=function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],o=n[1],r=Object(a.useState)(""),f=Object(l.a)(r,2),h=f[0],b=f[1],w=Object(a.useState)(""),j=Object(l.a)(w,2),O=j[0],y=j[1],C=Object(a.useState)([]),S=Object(l.a)(C,2),N=S[0],k=S[1],P=Object(a.useState)(null),D=Object(l.a)(P,2),T=D[0],x=D[1],A=Object(a.useState)(null),I=Object(l.a)(A,2),J=I[0],L=I[1];Object(a.useEffect)((function(){p().then((function(e){k(e)}))}),[]);var q=N.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())})),B=function(e,n){var t=N.find((function(n){return n.id===e}));console.log("Moin"),console.log(t),E(t.id,n).then((function(n){console.log(n);var t=N.map((function(t){return t.id!==e?t:n}));k(t)})).catch((function(e){L("Sorry, but you cannot update this person: ".concat(t.name,"."))}))};return c.a.createElement("div",null,c.a.createElement("h2",null,"Phonebook"),c.a.createElement(i,{search:O,handleSearchChange:function(e){y(e.target.value)}}),c.a.createElement("h2",null,"Add a New Contact"),c.a.createElement(m,{message:T,type:"success"}),c.a.createElement(m,{message:J,type:"error"}),c.a.createElement(s,{add:function(e){e.preventDefault();var n={name:t,number:h};if(N.some((function(e){return e.name===t}))){if(window.confirm("".concat(t," is already added to phonebook, replace the old number with the new one?"))){var a=N.find((function(e){return e.name===t}));B(a.id,n)}}else v(n).then((function(e){k(N.concat(e)),o(""),b("")})),x("".concat(n.name," was successfully added to the database.")),setTimeout((function(){x(null)}),5e3)},name:t,number:h,handleNameChange:function(e){o(e.target.value)},handleNumberChange:function(e){b(e.target.value)}}),c.a.createElement("h2",null,"Numbers"),c.a.createElement(d,{contactsToShow:q,deletePerson:function(e){var n=N.findIndex((function(n){return n.id===e})),t=N.find((function(n){return n.id===e}));if(window.confirm("Do you really want to delete ".concat(t.name))){var a=Object(u.a)(N);a.splice(n,1),g(e).then((function(e){L("".concat(t.name," was deleted.")),k(a)}))}}}))};r.a.render(c.a.createElement(w,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.8b4784fd.chunk.js.map