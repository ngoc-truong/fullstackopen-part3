(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{17:function(e,n,t){e.exports=t(40)},22:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(15),u=t.n(c),o=(t(22),t(16)),l=t(2),i=function(e){return r.a.createElement("div",null,"Filter shown with: ",r.a.createElement("input",{value:e.search,onChange:e.handleSearchChange}))},d=function(e){return r.a.createElement("form",{onSubmit:e.add},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.name,onChange:e.handleNameChange})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:e.number,onChange:e.handleNumberChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"Add")))},m=function(e){return r.a.createElement("div",null,e.contactsToShow.map((function(n){return r.a.createElement("div",{key:n.id},r.a.createElement("p",{key:n.id},n.name,": ",n.number),r.a.createElement("button",{onClick:function(){return e.deletePerson(n.id)}},"Delete Person"))})))},f=function(e){var n=e.message,t=e.type;return null===n?null:r.a.createElement("div",{className:t},n)},s=t(4),h=t.n(s),b="/api/persons",p=function(){return h.a.get(b).then((function(e){return e.data}))},v=function(e){return h.a.post(b,e).then((function(e){return e.data}))},E=function(e,n){return h.a.put("".concat(b,"/").concat(e),n).then((function(e){return e.data}))},w=function(e){var n="".concat(b,"/").concat(e);return h.a.delete(n)},g=function(){var e=Object(a.useState)(""),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),s=Object(l.a)(u,2),h=s[0],b=s[1],g=Object(a.useState)(""),j=Object(l.a)(g,2),O=j[0],C=j[1],y=Object(a.useState)([]),S=Object(l.a)(y,2),k=S[0],N=S[1],P=Object(a.useState)(null),T=Object(l.a)(P,2),D=T[0],x=T[1],A=Object(a.useState)(null),I=Object(l.a)(A,2),J=I[0],L=I[1];Object(a.useEffect)((function(){p().then((function(e){N(e)}))}),[]);var B=k.filter((function(e){return e.name.toLowerCase().includes(O.toLowerCase())})),F=function(e,n){var t=k.find((function(n){return n.id===e}));E(t.id,n).then((function(n){var t=k.map((function(t){return t.id!==e?t:n}));N(t)})).catch((function(n){L("The person ".concat(t.name," was already deleted from the server.")),N(k.filter((function(n){return n.id!==e})))}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(i,{search:O,handleSearchChange:function(e){C(e.target.value)}}),r.a.createElement("h2",null,"Add a New Contact"),r.a.createElement(f,{message:D,type:"success"}),r.a.createElement(f,{message:J,type:"error"}),r.a.createElement(d,{add:function(e){e.preventDefault();var n={name:t,number:h};if(k.some((function(e){return e.name===t}))){if(window.confirm("".concat(t," is already added to phonebook, replace the old number with the new one?"))){var a=k.find((function(e){return e.name===t}));F(a.id,n)}}else v(n).then((function(e){N(k.concat(e)),c(""),b("")})),x("".concat(n.name," was successfully added to the database.")),setTimeout((function(){x(null)}),5e3)},name:t,number:h,handleNameChange:function(e){c(e.target.value)},handleNumberChange:function(e){b(e.target.value)}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(m,{contactsToShow:B,deletePerson:function(e){var n=k.findIndex((function(n){return n.id===e})),t=k.find((function(n){return n.id===e}));if(window.confirm("Do you really want to delete ".concat(t.name))){var a=Object(o.a)(k);a.splice(n,1),w(e).then((function(){N(a)}))}}}))};u.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.f7de849d.chunk.js.map