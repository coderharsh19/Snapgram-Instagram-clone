(this["webpackJsonpsnapgram-react-app"]=this["webpackJsonpsnapgram-react-app"]||[]).push([[0],{29:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(6),s=c.n(n),a=c(23),o=c.n(a),l=(c(29),c(14)),i=c.n(l),r=c(19),m=c(11),u=s.a.createContext(null),d=c(12),j=(c(36),c(37),c(21)),p=c(24),b=c(15),h=c(3),f=function(e){var t=e.slideUp;return Object(h.jsxs)("ul",{className:"header__menu",children:[Object(h.jsx)("li",{className:"header__menu_items",children:Object(h.jsx)("a",{children:Object(h.jsx)(j.a,{className:"header__icons",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}})})}),Object(h.jsx)("li",{className:"header__menu_items",children:Object(h.jsx)("a",{children:Object(h.jsx)(j.b,{className:"header__icons inbox",onClick:function(){alert("Feature will be implemented soon")}})})}),Object(h.jsx)("li",{className:"header__menu_items",children:Object(h.jsx)("a",{children:Object(h.jsx)(p.a,{className:"header__icons profile",onClick:function(){alert("Feature will be implemented soon")}})})}),Object(h.jsx)("li",{className:"header__menu_items new_post",children:Object(h.jsx)("a",{children:Object(h.jsx)(b.a,{className:"header__icons",onClick:t})})})]})},O=function(e){var t=e.slideUp,c=e.login,n=e.user,s=e.logout;return Object(h.jsx)("div",{className:"header",children:Object(h.jsxs)("div",{className:"header__inner_container",children:[Object(h.jsx)("h1",{children:"Snapgram"}),n?Object(h.jsxs)("nav",{className:"header__nav",children:[Object(h.jsx)(f,{slideUp:t}),Object(h.jsxs)("div",{className:"header__nav_profile",children:[Object(h.jsx)("p",{style:{fontWeight:"600",userSelect:"none"},children:n?"Hello, ".concat(n.displayName):" "}),Object(h.jsx)("a",{className:"btn header__logout_btn",onClick:s,children:"Logout"})]})]}):Object(h.jsx)("a",{className:" btn header__login_btn",onClick:c,children:"Log-in/Sign-Up"})]})})},_=c(16),x=d.a.initializeApp({apiKey:"AIzaSyC03hYQihgWdUrN9kSGvwidfbYVhUkiGGA",authDomain:"snapgram-43830.firebaseapp.com",projectId:"snapgram-43830",storageBucket:"snapgram-43830.appspot.com",messagingSenderId:"723093481176",appId:"1:723093481176:web:eb2eced8141c8e371099ad"}),g=d.a.auth(),v=x.firestore(),N=d.a.storage(),S=new d.a.auth.GoogleAuthProvider,C=function(e){var t=e.username,c=e.comment,s=e.commentId,a=e.postId,o=Object(n.useContext)(u);return Object(h.jsxs)("div",{className:"comment",children:[Object(h.jsx)("h3",{className:"comment__username",children:t}),Object(h.jsx)("p",{className:"comment__text",children:c}),o&&o.email.replace("@gmail.com","")===t?Object(h.jsx)(_.a,{className:"comment__delete",onClick:function(){v.collection("posts").doc(a).collection("comments").doc(s).delete()}}):""]})},y=function(e){var t=e.id,c=e.user,s=(e.comments,Object(n.useState)("")),a=Object(m.a)(s,2),o=a[0],l=a[1];return Object(h.jsxs)("form",{className:"comment_form",children:[Object(h.jsx)("textarea",{name:"",id:"",cols:"15",rows:"3",className:"comment_form__input",placeholder:"Type your comment here...",value:o,onChange:function(e){l(e.target.value)}}),Object(h.jsx)("button",{type:"submit",className:"comment_form__button",onClick:function(e){e.preventDefault(),v.collection("posts").doc(t).collection("comments").add({username:c.email.replace("@gmail.com",""),comment:o,timestamp:d.a.firestore.FieldValue.serverTimestamp()}).then((function(){l(""),console.log("Comment added to db")})).catch((function(e){console.log(e)}))},children:"Post"})]})},I=function(e){var t=e.username,c=e.caption,s=e.uploadedImage,a=e.userPhoto,o=e.postId,l=Object(n.useContext)(u),i=Object(n.useState)([]),r=Object(m.a)(i,2),d=r[0],j=r[1];Object(n.useEffect)((function(){o&&v.collection("posts").doc(o).collection("comments").orderBy("timestamp").onSnapshot((function(e){j(e.docs.map((function(e){return{comment:e.data(),commentId:e.id}})))}))}),[o]);return Object(h.jsxs)("div",{className:"single_post",children:[Object(h.jsxs)("div",{className:"single_post__header",children:[Object(h.jsx)("img",{src:a,alt:"user",className:"single_post__thumbnail"}),Object(h.jsx)("h3",{className:"single_post__username",children:t}),Object(h.jsx)("div",{className:"single_post__delete",children:l&&l.email.replace("@gmail.com","")===t?Object(h.jsx)(_.a,{onClick:function(){v.collection("posts").doc(o).delete().then((function(){console.log("Post  deleted ")})).catch((function(e){console.log(e)}))},style:{fontSize:"23px",cursor:"pointer"}}):""})]}),Object(h.jsxs)("div",{className:"single_post__data",children:[Object(h.jsx)("img",{src:s,alt:"random",className:"single_post__image"}),Object(h.jsxs)("div",{className:"single_post__caption__container",children:[Object(h.jsx)("h3",{className:"single_post__username",children:t}),Object(h.jsx)("p",{className:"single_post__caption",children:c})]})]}),Object(h.jsx)("div",{className:"comments__container",children:d?d.map((function(e){var t=e.comment,c=e.commentId;return Object(h.jsx)(C,{username:t.username,comment:t.comment,commentId:c,postId:o},c)})):""}),l?Object(h.jsx)(y,{id:o,user:l,comments:d},o):""]})},w=(c(39),function(){var e=Object(n.useContext)(u),t=Object(n.useState)([]),c=Object(m.a)(t,2),s=c[0],a=c[1];return Object(n.useEffect)((function(){v.collection("posts").orderBy("timestamp","desc").onSnapshot((function(e){a(e.docs.map((function(e){return{postId:e.id,post:e.data()}})))}))}),[]),Object(h.jsx)("section",{className:"posts",style:{filter:e?"blur(0px)":"blur(6px)",userSelect:e?"":"none"},children:s.map((function(e){var t=e.postId,c=e.post;return Object(h.jsx)(I,{postId:t,uploadedImage:c.uploadedImage,caption:c.caption,username:c.username,userPhoto:c.userPhoto},t)}))})}),k=function(){return Object(h.jsx)("div",{className:"welcome",style:{marginBottom:"70px"},children:Object(h.jsx)("h1",{className:"Welcome__text",style:{fontWeight:"300"},children:"Please login to comment or explore posts"})})},U=(c(40),function(e){var t=e.slideUpload,c=Object(n.useContext)(u),s=Object(n.useState)(""),a=Object(m.a)(s,2),o=a[0],l=a[1],i=Object(n.useState)(null),r=Object(m.a)(i,2),j=r[0],p=r[1],f=Object(n.useState)(0),O=Object(m.a)(f,2),_=O[0],x=O[1],g=Object(n.useState)(""),S=Object(m.a)(g,2),C=S[0],y=S[1];return Object(h.jsx)("section",{className:t?"upload":"slide",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsx)("label",{htmlFor:"fileUpload",children:Object(h.jsx)(b.a,{style:{fontSize:"1.5rem",color:"#ff6c0c"}})}),Object(h.jsx)("input",{id:"fileUpload",type:"file",size:"60",onChange:function(e){e.target.files[0]&&(p(e.target.files[0]),console.log(e.target.files[0]),y("Selected image: ".concat(e.target.files[0].name)))},accept:"image/*"}),Object(h.jsx)("textarea",{value:o,onChange:function(e){l(e.target.value)},rows:"6",cols:"50",className:"upload__caption",placeholder:"What's on your mind?"}),Object(h.jsx)("button",{className:"upload__button",onClick:function(e){(e.preventDefault(),j)&&N.ref("/images/".concat(j.name)).put(j).on("state_changed",(function(e){var t=Math.floor(Math.round(e.bytesTransferred/e.totalBytes*100));x(t)}),(function(e){console.log(e.message)}),(function(){N.ref("images").child("".concat(j.name)).getDownloadURL().then((function(e){v.collection("posts").add({timestamp:d.a.firestore.FieldValue.serverTimestamp(),caption:o,username:c.email.replace("@gmail.com",""),uploadedImage:e,userPhoto:c.photoURL})})),l(""),y(""),x(0),p("null")}))},children:"Post"}),Object(h.jsx)("h1",{className:"upload__progress",children:0!==_?_:""}),Object(h.jsx)("p",{id:"file_name",children:C})]})})});var P=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(null),o=Object(m.a)(a,2),l=o[0],j=o[1];Object(n.useEffect)((function(){g.onAuthStateChanged((function(e){j(e||null)}))}),[l]);var p=function(){var e=Object(r.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.signOut();case 3:console.log("Signout successful"),j(null),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(h.jsx)(u.Provider,{value:l,children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{slideUp:function(){s(!c)},login:function(){d.a.auth().setPersistence("session").then(Object(r.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.auth().signInWithPopup(S);case 2:t=e.sent,c=t.user,j(c);case 5:case"end":return e.stop()}}),e)})))).catch((function(e){console.log(e)}))},user:l,logout:p}),l&&c?Object(h.jsx)(U,{slideUpload:c}):"",l?"":Object(h.jsx)(k,{}),Object(h.jsx)(w,{})]})})};o.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.26022079.chunk.js.map