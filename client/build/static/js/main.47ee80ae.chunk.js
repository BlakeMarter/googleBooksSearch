(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(52)},48:function(e,t,a){},52:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(21),r=a.n(o),c=a(55),s=a(56),i=a(57),m=a(22),u=a(6),h=a(7),E=a(11),g=a(8),b=a(12);var d=function(e){var t=e.style,a=e.children;return l.a.createElement("div",{style:{height:"".concat(t),clear:"both",paddingTop:20,textAlign:"center"},className:"jumbotron"},a)},f=a(5),v=a.n(f),p={getBooks:function(){return v.a.get("/api/books")},getBook:function(e){return v.a.get("/api/books/"+e)},searchBooks:function(e){return v.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},deleteBook:function(e){return v.a.delete("/api/books/"+e)},saveBook:function(e){return v.a.post("/api/books",e)}},k=a(54);function N(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function y(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function S(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(48);function j(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function B(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}function O(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function w(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var I=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={books:[],googlebooks:[],image:"",title:"",author:"",synopsis:"",link:"",clicked:!1},a.handleInputChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(m.a)({},n,l))},a.handleSearchFormSubmit=function(e){e.preventDefault();var t=e.target.value;a.state.title&&p.searchBooks(t).then(function(e){var t=e.data.items;t.forEach(function(e){a.setState({googlebooks:t})})}).catch(function(e){return console.log(e)})},a.handleSaveFormSubmit=function(e){var t=[];a.state.googlebooks.map(function(a){return e.target.value===a.id&&(t=a),t}),console.log(t);var n=t.volumeInfo.imageLinks.thumbnail,l=t.volumeInfo.title,o=t.volumeInfo.authors[0],r=t.volumeInfo.description,c=t.volumeInfo.canonicalVolumeLink;e.preventDefault(),p.saveBook({image:n,title:l,author:o,synopsis:r,link:c,clicked:!0}).then(function(e){console.log("this happened")}).catch(function(e){return console.log(e)})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(N,{fluid:!0},l.a.createElement(y,null,l.a.createElement(S,{size:"md-12"},l.a.createElement(d,{style:{height:150}},l.a.createElement("h1",null,"Search Google Books by Title"),l.a.createElement("form",null,l.a.createElement(O,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),l.a.createElement(w,{disabled:!this.state.title,value:this.state.title,name:"searchGoogs",onClick:this.handleSearchFormSubmit},"Search")))),l.a.createElement(S,{size:"md-12 sm-12"},l.a.createElement(d,{style:{height:20}},l.a.createElement("h1",null,"Search Results")),this.state.googlebooks.length?l.a.createElement(j,null,this.state.googlebooks.map(function(t){return l.a.createElement(B,{key:t.id},l.a.createElement(N,{className:"mt-2 mb-2"},l.a.createElement(y,null,l.a.createElement(S,{size:"md-3"},l.a.createElement("img",{className:"mr-2 mt-3",src:t.volumeInfo.imageLinks.thumbnail,alt:""})),l.a.createElement(S,{size:"md-8"},l.a.createElement("p",{className:"mt-4"},l.a.createElement("strong",null,"Title:")," ",t.volumeInfo.title),l.a.createElement("p",null,l.a.createElement("strong",null,"Author(s):")," ",t.volumeInfo.authors[0]),l.a.createElement("p",{className:"mt-3"},l.a.createElement("strong",null,"Description:")," ",t.volumeInfo.description.substr(0,200)," ..."))),l.a.createElement(k.a,{to:"/books/"+t.id},l.a.createElement("button",{className:"btn btn-success float-right mb-4",value:t.id,name:"searchGoogs",onClick:e.handleSaveFormSubmit},"Save Book"))))})):l.a.createElement("h3",null,"No Results to Display"))),l.a.createElement("div",{className:"mb-5"}))}}]),t}(n.Component),z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={books:{}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.books),p.getBooks().then(function(t){console.log(t.data),e.setState({books:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return console.log(this.state),console.log(this.state.books.length),l.a.createElement(N,{fluid:!0},l.a.createElement(y,null,l.a.createElement(S,{size:"md-12 sm-12"},l.a.createElement(d,{style:{height:20}},l.a.createElement("h1",null,"Books On My List")),this.state.books.length?l.a.createElement(j,null,this.state.books.map(function(e){return l.a.createElement(B,{key:e.id},l.a.createElement(N,{className:"mt-2 mb-2"},l.a.createElement(y,null,l.a.createElement(S,{size:"md-3"},l.a.createElement("img",{className:"mr-2 mt-3 mb-3",src:e.image,alt:""})),l.a.createElement(S,{size:"md-8"},l.a.createElement("p",{className:"mt-4"},l.a.createElement("strong",null,"Title:")," ",e.title),l.a.createElement("p",null,l.a.createElement("strong",null,"Author(s):")," ",e.author),l.a.createElement("p",{className:"mt-3"},l.a.createElement("strong",null,"Description:")," ",e.synopsis),l.a.createElement("a",{href:e.link,target:"blank"},l.a.createElement("button",{className:"btn btn-primary float-right mb-2"},"More Info"))))))})):l.a.createElement("h3",null,"No Results to Display"))))}}]),t}(n.Component);var C=function(){return l.a.createElement(N,{fluid:!0},l.a.createElement(y,null,l.a.createElement(S,{size:"md-12"},l.a.createElement(d,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))};var D=function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Search Google Books"),l.a.createElement(k.a,{to:"/savedbooks"},l.a.createElement("button",{className:"btn btn-success"},"SavedBooks")))};var x=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(D,null),l.a.createElement(s.a,null,l.a.createElement(i.a,{exact:!0,path:"/",component:I}),l.a.createElement(i.a,{exact:!0,path:"/books",component:I}),l.a.createElement(i.a,{exact:!0,path:"/savedbooks",component:z}),l.a.createElement(i.a,{component:C}))))};r.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.47ee80ae.chunk.js.map