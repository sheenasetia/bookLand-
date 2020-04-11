(this["webpackJsonplibrary-portal"]=this["webpackJsonplibrary-portal"]||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),c=a.n(r),l=(a(31),a(13)),s=a.n(l),i=a(17),u=a(3),m=a(4),d=a(6),h=a(5),f=a(8),b=a(7),p=a(2),E=(a(15),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchBooksList()}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid",id:"bookList"},o.a.createElement("h1",null,"Welcome to Library Portal"),o.a.createElement("table",{className:"table table-bordered table-hover mr-auto ml-auto col-sm-6"},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Book Name"),o.a.createElement("th",null,"Book Author"),o.a.createElement("th",null,"Book Version"),o.a.createElement("th",null,"Operations"))),o.a.createElement("tbody",null,this.props.books.map((function(t){return o.a.createElement("tr",{key:t._id},o.a.createElement("td",null,t.name),o.a.createElement("td",null,t.author),o.a.createElement("td",null,t.version),o.a.createElement("td",null,o.a.createElement("button",{onClick:function(){return e.props.selectBook(t)}},o.a.createElement(p.b,{to:"/editBook"},"EDIT")),"/",o.a.createElement("button",{onClick:function(){return e.props.deleteBook(t)}},"DELETE")))})))))}}]),t}(o.a.Component)),k=a(12),v=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).addBook=e.addBook.bind(Object(f.a)(e)),e.state={redirectToHome:!1},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"addBook",value:function(e){var t=this;e.preventDefault();var a={name:e.target.name.value,author:e.target.author.value,version:e.target.version.value};setTimeout((function(){fetch("/books/addBook",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert("New book: ".concat(JSON.stringify(e)," added successfully")),t.setState({redirectToHome:!0})}))}))}},{key:"render",value:function(){return!0===this.state.redirectToHome?o.a.createElement(k.a,{to:"/home"}):o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.addBook},o.a.createElement("h2",null,"Add a Book"),o.a.createElement("br",null),"Book name : ",o.a.createElement("input",{type:"text",name:"name"}),o.a.createElement("br",null),o.a.createElement("br",null),"Book author : ",o.a.createElement("input",{type:"text",name:"author"}),o.a.createElement("br",null),o.a.createElement("br",null),"Book version : ",o.a.createElement("input",{type:"text",name:"version"}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(o.a.Component),g=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).state={showLogout:!1},e.handleLogout=e.handleLogout.bind(Object(f.a)(e)),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleLogout",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.dealLogout();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillReceiveProps",value:function(e){console.log(this.props.auth),!0===this.props.auth?this.setState({showLogout:!0}):this.setState({showLogout:!1})}},{key:"render",value:function(){return console.log("navbar rendered with ",this.props.auth),o.a.createElement("div",{className:"Navbar"},o.a.createElement("nav",{className:"navbar navbar-expand-lg"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement(p.b,{to:"/"},"BOOKLAND")),o.a.createElement("div",{className:this.state.showLogout?"navbar-item m-4":"navbar-item d-none"},o.a.createElement(p.b,{to:"/home"},"Show Books List")),o.a.createElement("div",{className:this.state.showLogout?"navbar-item m-4":"navbar-item d-none"},o.a.createElement(p.b,{to:"/addBook"},"Add Book")),o.a.createElement("div",{className:this.state.showLogout?"navbar-item d-none":"navbar-item m-4"},o.a.createElement(p.b,{to:"/signup"},"Signup")),o.a.createElement("div",{className:this.state.showLogout?"navbar-item d-none":"navbar-item m-4"},o.a.createElement(p.b,{to:"/login"},"Login")),o.a.createElement("div",{className:this.state.showLogout?"navbar-item m-4":"navbar-item d-none"},o.a.createElement("a",{onClick:this.handleLogout},"Logout"))))}}]),t}(n.Component),y=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).editBook=e.editBook.bind(Object(f.a)(e)),e.state={redirectToHome:!1},e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"editBook",value:function(e){var t=this;e.preventDefault();var a={_id:this.props.book._id,name:this.refs.name.value,author:this.refs.author.value,version:this.refs.version.value};console.log("Updating book"),fetch("/books/updateBook",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert("Book ".concat(e," updated successfully ")),console.error("Book updated successully"),t.setState({redirectToHome:!0})})).catch((function(e){console.error("Error updating book: ".concat(e))}))}},{key:"render",value:function(){return!0===this.state.redirectToHome?o.a.createElement(k.a,{to:"/home"}):o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this.editBook},o.a.createElement("h2",null,"Book ready to Edit"),o.a.createElement("br",null),"Book name : ",o.a.createElement("input",{type:"text",ref:"name",defaultValue:this.props.book.name}),o.a.createElement("br",null),o.a.createElement("br",null),"Book author : ",o.a.createElement("input",{type:"text",ref:"author",defaultValue:this.props.book.author}),o.a.createElement("br",null),o.a.createElement("br",null),"Book version : ",o.a.createElement("input",{type:"text",ref:"version",defaultValue:this.props.book.version}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(o.a.Component),O=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("h1",null,"Sorry,Page Not Found")}}]),t}(o.a.Component),j=(a(38),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e)))._addUser=function(e){e.preventDefault();var t={name:a.refs.name.value,age:a.refs.age.value,userName:a.refs.userName.value,password:a.refs.password.value};fetch("/users/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json()})).then((function(e){alert("User created successfully"),a.setState({redirectToHome:!0})})).catch((function(e){console.log(e),alert("Error creating user")}))},a.state={redirectToHome:!1},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.redirectToHome?o.a.createElement(k.a,{to:"/"}):o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this._addUser},o.a.createElement("div",{className:"form"},o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",null,"Name"),o.a.createElement("input",{type:"text",ref:"name",className:"form-control",required:!0})),o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",null,"Age"),o.a.createElement("input",{type:"number",ref:"age",className:"form-control"})),o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",null,"UserName"),o.a.createElement("input",{type:"text",ref:"userName",className:"form-control",required:!0})),o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",null,"Password"),o.a.createElement("input",{type:"password",ref:"password",className:"form-control",required:!0})),o.a.createElement("button",{type:"submit"},"Sign Up"))))}}]),t}(n.Component)),B=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e)))._addUser=function(e){e.preventDefault();var t={userName:a.refs.userName.value,password:a.refs.password.value};fetch("/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(e.ok)return e.json();throw new Error})).then((function(e){console.log("User added successfully: ".concat(e)),a.props.makeAuthentication(),a.setState({redirectToHome:!0})})).catch((function(e){console.log(e),alert("Bad Login Credentials")}))},a.state={redirectToHome:!1},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.redirectToHome?o.a.createElement(k.a,{to:"/"}):o.a.createElement("div",null,o.a.createElement("form",{onSubmit:this._addUser},o.a.createElement("div",{className:"form"},o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",null,"UserName"),o.a.createElement("input",{type:"text",ref:"userName",className:"form-control",required:!0})),o.a.createElement("div",{className:"form-group col-md-12"},o.a.createElement("label",null,"Password"),o.a.createElement("input",{type:"password",ref:"password",className:"form-control",required:!0})),o.a.createElement("button",{type:"submit"},"Login"))))}}]),t}(n.Component),N=function(){return o.a.createElement("div",{className:"welcome"},o.a.createElement("div",{className:"content"},o.a.createElement("h1",null,"Welcome to Library Portal"),o.a.createElement("h3",null,"Login/Signup to above given Links to Continue")))},L=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(d.a)(this,Object(h.a)(t).call(this))).fetchBooksList=function(){fetch("/books").then((function(e){if(e.ok)return e.json()})).then((function(t){console.log(t),e.setState({books:t}),console.log(e.state.books)})).catch((function(e){console.log("The error is : ".concat(JSON.stringify(e)))}))},e.deleteBook=function(t){console.log("Book to be delete is: ".concat(JSON.stringify(t))),console.log(Object(f.a)(e)),fetch("/books/deleteBook?id=".concat(t._id),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(a){a.ok&&(console.log("".concat(t," is deleted")),e.fetchBooksList())})).catch((function(e){console.log("The error is: ".concat(e))}))},e.state={books:[],selectedBook:"",isAuth:!1},e.selectBookFun=e.selectBookFun.bind(Object(f.a)(e)),e.dealLogout=e.dealLogout.bind(Object(f.a)(e)),e.makeAuthentication=e.makeAuthentication.bind(Object(f.a)(e)),e}return Object(b.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){console.log("Component is mounted")}},{key:"dealLogout",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({isAuth:!1});case 2:return e.prev=2,e.next=5,fetch("/users/logout",{method:"GET",headers:{"Content-Type":"application/json"}});case 5:if(!e.sent.ok){e.next=9;break}return e.next=9,this.setState({isAuth:!1});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),alert(e.t0);case 14:case"end":return e.stop()}}),e,this,[[2,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"selectBookFun",value:function(e){this.setState({selectedBook:e})}},{key:"makeAuthentication",value:function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({isAuth:!0});case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return console.log("main rendered",this.state.isAuth),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{id:"main",className:"row"},o.a.createElement("div",{className:"col"},"  ",o.a.createElement(g,{dealLogout:this.dealLogout,auth:this.state.isAuth}))),o.a.createElement("div",{className:"row"},o.a.createElement(k.d,null,o.a.createElement(k.b,{exact:!0,path:"/",render:!0!==this.state.isAuth?function(){return o.a.createElement(N,null)}:function(){return o.a.createElement(E,{books:e.state.books,selectBook:function(t){e.selectBookFun(t)},deleteBook:function(t){e.deleteBook(t)},fetchBooksList:e.fetchBooksList})}}),o.a.createElement(k.b,{exact:!0,path:"/home",render:!0!==this.state.isAuth?function(){return o.a.createElement(N,null)}:function(){return o.a.createElement(E,{books:e.state.books,selectBook:function(t){e.selectBookFun(t)},deleteBook:function(t){e.deleteBook(t)},fetchBooksList:e.fetchBooksList})}}),o.a.createElement(k.b,{exact:!0,path:"/editBook",render:!0!==this.state.isAuth?function(){return o.a.createElement(N,null)}:function(){return o.a.createElement(y,{book:e.state.selectedBook})}}),o.a.createElement(k.b,{exact:!0,path:"/addBook",render:!0!==this.state.isAuth?function(){return o.a.createElement(N,null)}:function(){return o.a.createElement(v,null)}}),o.a.createElement(k.b,{path:"/signup",render:function(e){return o.a.createElement(j,null)}}),o.a.createElement(k.b,{path:"/login",render:function(t){return o.a.createElement(B,{makeAuthentication:e.makeAuthentication})}}),o.a.createElement(k.b,{render:function(){return o.a.createElement(O,null)}}))))}}]),t}(o.a.Component);c.a.render(o.a.createElement(p.a,null,o.a.createElement(L,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.24d663c1.chunk.js.map