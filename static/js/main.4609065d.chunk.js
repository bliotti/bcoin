(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{181:function(e,t,a){e.exports=a.p+"static/media/react-logo.6bff29ac.jpg"},183:function(e,t,a){e.exports=a(434)},433:function(e,t,a){},434:function(e,t,a){"use strict";a.r(t);var r,l=a(1),n=a.n(l),o=a(27),c=a.n(o),s=a(33),i=a(438),d=a(437),m=a(182),u=a(435),p=a(15),g=a(16),b=a(18),E=a(17),h=a(19),f=a(44),y=a(2),v=a.n(y),C=a(3),k=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).updateColor=function(){window.innerWidth<993&&a.state.collapseOpen?a.setState({color:"bg-white"}):a.setState({color:"navbar-transparent"})},a.toggleCollapse=function(){a.state.collapseOpen?a.setState({color:"navbar-transparent"}):a.setState({color:"bg-white"}),a.setState({collapseOpen:!a.state.collapseOpen})},a.toggleModalSearch=function(){a.setState({modalSearch:!a.state.modalSearch})},a.state={collapseOpen:!1,modalSearch:!1,color:"navbar-transparent"},a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateColor)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateColor)}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.o,{className:v()("navbar-absolute",this.state.color),expand:"lg"},n.a.createElement(C.h,{fluid:!0},n.a.createElement("div",{className:"navbar-wrapper"},n.a.createElement("div",{className:v()("navbar-toggle d-inline",{toggled:this.props.sidebarOpened})},n.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:this.props.toggleSidebar},n.a.createElement("span",{className:"navbar-toggler-bar bar1"}),n.a.createElement("span",{className:"navbar-toggler-bar bar2"}),n.a.createElement("span",{className:"navbar-toggler-bar bar3"}))),n.a.createElement(C.p,{href:"#pablo",onClick:function(e){return e.preventDefault()}},this.props.brandText)),n.a.createElement("button",{"aria-expanded":!1,"aria-label":"Toggle navigation",className:"navbar-toggler","data-target":"#navigation","data-toggle":"collapse",id:"navigation",type:"button",onClick:this.toggleCollapse,style:{display:!1}},n.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),n.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"}),n.a.createElement("span",{className:"navbar-toggler-bar navbar-kebab"})),n.a.createElement(C.g,{navbar:!0,isOpen:this.state.collapseOpen},n.a.createElement(C.l,{className:"ml-auto",navbar:!0},n.a.createElement(C.j,{className:"search-bar"},n.a.createElement(C.a,{color:"link","data-target":"#searchModal","data-toggle":"modal",id:"search-button",onClick:this.toggleModalSearch,style:{display:"none"}},n.a.createElement("i",{className:"tim-icons icon-zoom-split"}),n.a.createElement("span",{className:"d-lg-none d-md-block"},"Search"))),n.a.createElement("li",{className:"separator d-lg-none"}))))),n.a.createElement(C.k,{modalClassName:"modal-search",isOpen:this.state.modalSearch,toggle:this.toggleModalSearch},n.a.createElement("div",{className:"modal-header"},n.a.createElement(C.i,{id:"inlineFormInputGroup",placeholder:"SEARCH",type:"text"}),n.a.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button",onClick:this.toggleModalSearch},n.a.createElement("i",{className:"tim-icons icon-simple-remove"})))))}}]),t}(n.a.Component),N=function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement(C.h,{fluid:!0},n.a.createElement(C.l,null,n.a.createElement(C.m,null,n.a.createElement(C.n,{href:"https://buildcoinfoundation.ideascale.com",to:"https://buildcoinfoundation.ideascale.com"},"Idea Share")),n.a.createElement(C.m,null,n.a.createElement(C.n,{href:"https://www.buildcoinfoundation.org/"},"About Build Coin")),n.a.createElement(C.m,null,n.a.createElement(C.n,{href:"https://medium.com/@buildcoin"},"Blog")),n.a.createElement(C.m,null,n.a.createElement(C.n,{href:"https://t.me/buildcoinfound"},"Telegram")))))}}]),t}(n.a.Component),O=a(57),x=a(436),T=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).linkOnClick=function(){document.documentElement.classList.remove("nav-open")},a.activeRoute.bind(Object(O.a)(Object(O.a)(a))),a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"activeRoute",value:function(e){return this.props.location.pathname.indexOf(e)>-1?"active":""}},{key:"componentDidMount",value:function(){navigator.platform.indexOf("Win")>-1&&(r=new f.a(this.refs.sidebar,{suppressScrollX:!0,suppressScrollY:!1}))}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&r.destroy()}},{key:"render",value:function(){var e,t,a=this,r=this.props,l=r.bgColor,o=r.routes,c=r.rtlActive,s=r.logo;return e=n.a.createElement("a",{href:s.outterLink,className:"simple-text logo-mini",target:"_blank",onClick:this.props.toggleSidebar},n.a.createElement("div",{className:"logo-img"},n.a.createElement("img",{src:s.imgSrc,alt:"react-logo"}))),t=n.a.createElement("a",{href:s.outterLink,className:"simple-text logo-normal",target:"_blank",onClick:this.props.toggleSidebar},s.text),n.a.createElement("div",{className:"sidebar",data:l},n.a.createElement("div",{className:"sidebar-wrapper",ref:"sidebar"},null!==e||null!==t?n.a.createElement("div",{className:"logo"},e,t):null,n.a.createElement(C.l,null,o.map(function(e,t){return e.redirect?null:n.a.createElement("li",{className:a.activeRoute(e.path)+(e.pro?" active-pro":""),key:t},n.a.createElement(x.a,{to:e.layout+e.path,className:"nav-link",activeClassName:"active",onClick:a.props.toggleSidebar},n.a.createElement("i",{className:e.icon}),n.a.createElement("p",null,c?e.rtlName:e.name)))}))))}}]),t}(n.a.Component);T.defaultProps={rtlActive:!1,bgColor:"primary",routes:[{}]};var S,w=T,j=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).handleClick=function(){"dropdown show-dropdown"===a.state.classes?a.setState({classes:"dropdown show-dropdown show"}):a.setState({classes:"dropdown show-dropdown"})},a.activateMode=function(e){switch(e){case"light":document.body.classList.add("white-content");break;default:document.body.classList.remove("white-content")}},a.state={classes:"dropdown show-dropdown"},a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){document.body.classList.add("white-content")}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"fixed-plugin"},n.a.createElement("div",{className:this.state.classes},n.a.createElement("div",{onClick:this.handleClick},n.a.createElement("i",{className:"fa fa-cog fa-2x"})),n.a.createElement("ul",{className:"dropdown-menu show"},n.a.createElement("li",{className:"header-title"},"SIDEBAR BACKGROUND"),n.a.createElement("li",{className:"adjustments-line"},n.a.createElement("div",{className:"badge-colors text-center"},n.a.createElement("span",{className:"primary"===this.props.bgColor?"badge filter badge-primary active":"badge filter badge-primary","data-color":"primary",onClick:function(){e.props.handleBgClick("primary")}})," ",n.a.createElement("span",{className:"blue"===this.props.bgColor?"badge filter badge-info active":"badge filter badge-info","data-color":"blue",onClick:function(){e.props.handleBgClick("blue")}})," ",n.a.createElement("span",{className:"green"===this.props.bgColor?"badge filter badge-success active":"badge filter badge-success","data-color":"green",onClick:function(){e.props.handleBgClick("green")}})," ")),n.a.createElement("li",{className:"adjustments-line text-center color-change"},n.a.createElement("span",{className:"color-label"},"LIGHT MODE")," ",n.a.createElement("span",{className:"badge light-badge mr-2",onClick:function(){return e.activateMode("light")}})," ",n.a.createElement("span",{className:"badge dark-badge ml-2",onClick:function(){return e.activateMode("dark")}})," ",n.a.createElement("span",{className:"color-label"},"DARK MODE")," "))))}}]),t}(l.Component),A=a(114),B=a(58),M=a(178),L=a.n(M),D=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).setBgChartData=function(e){a.setState({bigChartData:e})},a.state={bigChartData:"data1",dataT:[]},a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentWillMount",value:function(){var e=this;new Promise(function(e,t){return L()("https://0a8yvnc556.execute-api.us-east-1.amazonaws.com/dev/proxy",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({})}).then(function(e){return e.json()}).then(function(t){"proxy request success"===t.message&&e(JSON.parse(t.data))}).catch(function(e){return console.log(e)})}).then(function(t){return e.setState({dataT:t})})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(C.q,null,n.a.createElement(C.f,{lg:"6"},n.a.createElement(C.b,{className:"card-chart"},n.a.createElement(C.d,null,n.a.createElement("h5",{className:"card-category"},"% of Tokens Allocated"),n.a.createElement(C.e,{tag:"h3"},n.a.createElement("i",{className:"tim-icons icon-bell-55 text-info"})," 5000")),n.a.createElement(C.c,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement(A.b,{data:B.chartExample2.data,options:B.chartExample2.options}))))),n.a.createElement(C.f,{lg:"6"},n.a.createElement(C.b,{className:"card-chart"},n.a.createElement(C.d,null,n.a.createElement(C.q,null,n.a.createElement(C.f,{className:"text-left",sm:"6"},n.a.createElement("h5",{className:"card-category"}),n.a.createElement(C.e,{tag:"h2"},"Idea")),n.a.createElement(C.f,{sm:"6"}))),n.a.createElement(C.c,null,n.a.createElement("div",{className:"chart-area",style:{padding:"10px"}},n.a.createElement("p",null,"The range of LED color temperatures should be 3000K to 4300K, and is based on study of visibility and preference. In the Advanced Street Lighting Technologies Assessment Project for the City of San Jos\xe9 (2010), it was found that while higher color temperature LEDs are more efficient, subjectively, participants generally preferred lower color temperature LEDs. There are also concerns from the astronomy community about the presence of blue wavelengths in higher color temperature light sources."))))),n.a.createElement(C.f,{lg:"12"},n.a.createElement(C.b,{className:"card-chart"},n.a.createElement(C.d,null,n.a.createElement("h5",{className:"card-category"},"Votes and Tokens Awarded"),n.a.createElement(C.e,{tag:"h3"},n.a.createElement("i",{className:"tim-icons icon-delivery-fast text-primary"})," ")),n.a.createElement(C.c,null,n.a.createElement("div",{className:"chart-area"},n.a.createElement(A.a,{data:B.chartExample3.data,options:B.chartExample3.options})))))),n.a.createElement(C.q,null,n.a.createElement(C.f,{lg:"12",md:"12"},n.a.createElement(C.b,null,n.a.createElement(C.d,null,n.a.createElement(C.e,{tag:"h4"},"All Ideas")),n.a.createElement(C.c,null,n.a.createElement(C.r,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Idea Title"),n.a.createElement("th",null,"Author"),n.a.createElement("th",null,"Votes"),n.a.createElement("th",{className:"text-center"},"Tokens Awarded"))),n.a.createElement("tbody",null,this.state.dataT.map(function(e,t){return console.log(e),n.a.createElement("tr",{key:t},n.a.createElement("td",null,n.a.createElement("a",{href:e.url},e.title)),n.a.createElement("td",null,e.authorInfo.name),n.a.createElement("td",null,e.voteCount),n.a.createElement("td",{className:"text-center"},0))})))))))))}}]),t}(n.a.Component),F=a(59),P=Object(F.withScriptjs)(Object(F.withGoogleMap)(function(e){return n.a.createElement(F.GoogleMap,{defaultZoom:13,defaultCenter:{lat:40.748817,lng:-73.985428},defaultOptions:{scrollwheel:!1,styles:[{elementType:"geometry",stylers:[{color:"#1d2c4d"}]},{elementType:"labels.text.fill",stylers:[{color:"#8ec3b9"}]},{elementType:"labels.text.stroke",stylers:[{color:"#1a3646"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"administrative.land_parcel",elementType:"labels.text.fill",stylers:[{color:"#64779e"}]},{featureType:"administrative.province",elementType:"geometry.stroke",stylers:[{color:"#4b6878"}]},{featureType:"landscape.man_made",elementType:"geometry.stroke",stylers:[{color:"#334e87"}]},{featureType:"landscape.natural",elementType:"geometry",stylers:[{color:"#023e58"}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#283d6a"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{color:"#6f9ba5"}]},{featureType:"poi",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"poi.park",elementType:"geometry.fill",stylers:[{color:"#023e58"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#3C7680"}]},{featureType:"road",elementType:"geometry",stylers:[{color:"#304a7d"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"road",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#2c6675"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#9d2a80"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#b0d5ce"}]},{featureType:"road.highway",elementType:"labels.text.stroke",stylers:[{color:"#023e58"}]},{featureType:"transit",elementType:"labels.text.fill",stylers:[{color:"#98a5be"}]},{featureType:"transit",elementType:"labels.text.stroke",stylers:[{color:"#1d2c4d"}]},{featureType:"transit.line",elementType:"geometry.fill",stylers:[{color:"#283d6a"}]},{featureType:"transit.station",elementType:"geometry",stylers:[{color:"#3a4762"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#0e1626"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#4e6d70"}]}]}},n.a.createElement(F.Marker,{position:{lat:40.748817,lng:-73.985428}}))})),R=[{path:"/dashboard",name:"Dashboard",icon:"tim-icons icon-chart-pie-36",component:D,layout:"/admin"},{path:"/map",name:"Map",icon:"tim-icons icon-pin",component:function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(C.q,null,n.a.createElement(C.f,{md:"12"},n.a.createElement(C.b,{className:"card-plain"},n.a.createElement(C.d,null,"Google Maps"),n.a.createElement(C.c,null,n.a.createElement("div",{id:"map",className:"map",style:{position:"relative",overflow:"hidden"}},n.a.createElement(P,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE",loadingElement:n.a.createElement("div",{style:{height:"100%"}}),containerElement:n.a.createElement("div",{style:{height:"100%"}}),mapElement:n.a.createElement("div",{style:{height:"100%"}})}))))))))}}]),t}(n.a.Component),layout:"/admin"},{path:"/tables",name:"Table List",icon:"tim-icons icon-puzzle-10",component:function(e){function t(){return Object(p.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"content"},n.a.createElement(C.q,null,n.a.createElement(C.f,{md:"12"},n.a.createElement(C.b,null,n.a.createElement(C.d,null,n.a.createElement(C.e,{tag:"h4"},"Simple Table")),n.a.createElement(C.c,null,n.a.createElement(C.r,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Country"),n.a.createElement("th",null,"City"),n.a.createElement("th",{className:"text-center"},"Salary"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Dakota Rice"),n.a.createElement("td",null,"Niger"),n.a.createElement("td",null,"Oud-Turnhout"),n.a.createElement("td",{className:"text-center"},"$36,738")),n.a.createElement("tr",null,n.a.createElement("td",null,"Minerva Hooper"),n.a.createElement("td",null,"Cura\xe7ao"),n.a.createElement("td",null,"Sinaai-Waas"),n.a.createElement("td",{className:"text-center"},"$23,789")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sage Rodriguez"),n.a.createElement("td",null,"Netherlands"),n.a.createElement("td",null,"Baileux"),n.a.createElement("td",{className:"text-center"},"$56,142")),n.a.createElement("tr",null,n.a.createElement("td",null,"Philip Chaney"),n.a.createElement("td",null,"Korea, South"),n.a.createElement("td",null,"Overland Park"),n.a.createElement("td",{className:"text-center"},"$38,735")),n.a.createElement("tr",null,n.a.createElement("td",null,"Doris Greene"),n.a.createElement("td",null,"Malawi"),n.a.createElement("td",null,"Feldkirchen in K\xe4rnten"),n.a.createElement("td",{className:"text-center"},"$63,542")),n.a.createElement("tr",null,n.a.createElement("td",null,"Mason Porter"),n.a.createElement("td",null,"Chile"),n.a.createElement("td",null,"Gloucester"),n.a.createElement("td",{className:"text-center"},"$78,615")),n.a.createElement("tr",null,n.a.createElement("td",null,"Jon Porter"),n.a.createElement("td",null,"Portugal"),n.a.createElement("td",null,"Gloucester"),n.a.createElement("td",{className:"text-center"},"$98,615"))))))),n.a.createElement(C.f,{md:"12"},n.a.createElement(C.b,{className:"card-plain"},n.a.createElement(C.d,null,n.a.createElement(C.e,{tag:"h4"},"Table on Plain Background"),n.a.createElement("p",{className:"category"},"Here is a subtitle for this table")),n.a.createElement(C.c,null,n.a.createElement(C.r,{className:"tablesorter",responsive:!0},n.a.createElement("thead",{className:"text-primary"},n.a.createElement("tr",null,n.a.createElement("th",null,"Name"),n.a.createElement("th",null,"Country"),n.a.createElement("th",null,"City"),n.a.createElement("th",{className:"text-center"},"Salary"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"Dakota Rice"),n.a.createElement("td",null,"Niger"),n.a.createElement("td",null,"Oud-Turnhout"),n.a.createElement("td",{className:"text-center"},"$36,738")),n.a.createElement("tr",null,n.a.createElement("td",null,"Minerva Hooper"),n.a.createElement("td",null,"Cura\xe7ao"),n.a.createElement("td",null,"Sinaai-Waas"),n.a.createElement("td",{className:"text-center"},"$23,789")),n.a.createElement("tr",null,n.a.createElement("td",null,"Sage Rodriguez"),n.a.createElement("td",null,"Netherlands"),n.a.createElement("td",null,"Baileux"),n.a.createElement("td",{className:"text-center"},"$56,142")),n.a.createElement("tr",null,n.a.createElement("td",null,"Philip Chaney"),n.a.createElement("td",null,"Korea, South"),n.a.createElement("td",null,"Overland Park"),n.a.createElement("td",{className:"text-center"},"$38,735")),n.a.createElement("tr",null,n.a.createElement("td",null,"Doris Greene"),n.a.createElement("td",null,"Malawi"),n.a.createElement("td",null,"Feldkirchen in K\xe4rnten"),n.a.createElement("td",{className:"text-center"},"$63,542")),n.a.createElement("tr",null,n.a.createElement("td",null,"Mason Porter"),n.a.createElement("td",null,"Chile"),n.a.createElement("td",null,"Gloucester"),n.a.createElement("td",{className:"text-center"},"$78,615")),n.a.createElement("tr",null,n.a.createElement("td",null,"Jon Porter"),n.a.createElement("td",null,"Portugal"),n.a.createElement("td",null,"Gloucester"),n.a.createElement("td",{className:"text-center"},"$98,615"))))))))))}}]),t}(n.a.Component),layout:"/admin"}],W=a(181),G=a.n(W),H=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(b.a)(this,Object(E.a)(t).call(this,e))).toggleSidebar=function(){document.documentElement.classList.toggle("nav-open"),a.setState({sidebarOpened:!a.state.sidebarOpened})},a.getRoutes=function(e){return e.map(function(e,t){return"/admin"===e.layout?n.a.createElement(m.a,{path:e.layout+e.path,component:e.component,key:t}):null})},a.handleBgClick=function(e){a.setState({backgroundColor:e})},a.state={backgroundColor:"blue",sidebarOpened:-1!==document.documentElement.className.indexOf("nav-open")},a}return Object(h.a)(t,e),Object(g.a)(t,[{key:"componentDidMount",value:function(){if(console.log(navigator.platform),navigator.platform.indexOf("Win")>-1){document.documentElement.className+=" perfect-scrollbar-on",document.documentElement.classList.remove("perfect-scrollbar-off"),S=new f.a(this.refs.mainPanel,{suppressScrollX:!0});for(var e=document.querySelectorAll(".table-responsive"),t=0;t<e.length;t++)S=new f.a(e[t])}}},{key:"componentWillUnmount",value:function(){navigator.platform.indexOf("Win")>-1&&(S.destroy(),document.documentElement.className+=" perfect-scrollbar-off",document.documentElement.classList.remove("perfect-scrollbar-on"))}},{key:"componentDidUpdate",value:function(e){if("PUSH"===e.history.action){if(navigator.platform.indexOf("Win")>-1)for(var t=document.querySelectorAll(".table-responsive"),a=0;a<t.length;a++)S=new f.a(t[a]);document.documentElement.scrollTop=0,document.scrollingElement.scrollTop=0,this.refs.mainPanel.scrollTop=0}}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrapper"},n.a.createElement(w,Object.assign({},this.props,{routes:R,bgColor:this.state.backgroundColor,logo:{outterLink:"https://www.buildcoinfoundation.org/",text:"Buildcoin",imgSrc:G.a},toggleSidebar:this.toggleSidebar})),n.a.createElement("div",{className:"main-panel",ref:"mainPanel",data:this.state.backgroundColor},n.a.createElement(k,Object.assign({},this.props,{brandText:"Brand",toggleSidebar:this.toggleSidebar,sidebarOpened:this.state.sidebarOpened})),n.a.createElement(d.a,null,this.getRoutes(R)),-1!==this.props.location.pathname.indexOf("maps")?null:n.a.createElement(N,{fluid:!0}))),n.a.createElement(j,{bgColor:this.state.backgroundColor,handleBgClick:this.handleBgClick}))}}]),t}(n.a.Component),U=(a(433),Object(s.a)());c.a.render(n.a.createElement(i.a,{history:U},n.a.createElement(d.a,null,n.a.createElement(m.a,{path:"/admin",render:function(e){return n.a.createElement(H,e)}}),n.a.createElement(u.a,{from:"/",to:"/admin/dashboard"}))),document.getElementById("root"))},58:function(e,t){var a=[{IdeaTitle:"Lessons learned from the San Jose Public Street Light Project",Author:"Tony Barrile",Votes:"478",TokensAwarded:"1230",link:"http://ideas.buildcoinfoundation.org/a/dtd/350469-45889"},{IdeaTitle:"AMA encourages the use of 3000K or lower lighting",Author:"Dennis Stone",Votes:"345",TokensAwarded:"560",link:"http://ideas.buildcoinfoundation.org/a/dtd/349475-45889"},{IdeaTitle:"LED Street Lights in the Netherlands",Author:"David Stout",Votes:"236",TokensAwarded:"321",link:"http://ideas.buildcoinfoundation.org/a/dtd/349381-45889"}],r={maintainAspectRatio:!1,legend:{display:!0,position:"bottom",reverse:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0},l={data1:function(e){var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(29,140,248,0.2)"),t.addColorStop(.4,"rgba(29,140,248,0.0)"),t.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:t,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[100,70,90,70,85,60,75,60,90,80,110,100]}]}},data2:function(e){var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(29,140,248,0.2)"),t.addColorStop(.4,"rgba(29,140,248,0.0)"),t.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:t,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[80,120,105,110,95,105,90,100,80,95,70,120]}]}},data3:function(e){var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(29,140,248,0.2)"),t.addColorStop(.4,"rgba(29,140,248,0.0)"),t.addColorStop(0,"rgba(29,140,248,0)"),{labels:["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:t,borderColor:"#1f8ef1",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#1f8ef1",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#1f8ef1",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[60,80,65,130,80,105,90,130,70,115,60,130]}]}},options:r},n={data:function(e){var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(29,140,248,0.2)"),t.addColorStop(.4,"rgba(29,140,248,0.0)"),t.addColorStop(0,"rgba(29,140,248,0)"),{labels:a.map(function(e){return e.Author}),datasets:[{backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"],data:a.map(function(e){return e.Votes})}]}},options:r},o={data:function(e){var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(72,72,176,0.1)"),t.addColorStop(.4,"rgba(72,72,176,0.0)"),t.addColorStop(0,"rgba(119,52,169,0)"),{labels:a.map(function(e){return e.IdeaTitle.substring(0,16)}),datasets:[{label:"Ideas",fill:!0,backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:t,borderColor:"#d048b6",borderWidth:2,borderDash:[],borderDashOffset:0,data:a.map(function(e){return e.TokensAwarded})}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{suggestedMin:60,suggestedMax:120,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{gridLines:{drawBorder:!1,color:"rgba(225,78,202,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}};e.exports={chartExample1:l,chartExample2:n,chartExample3:o,chartExample4:{data:function(e){var t=e.getContext("2d").createLinearGradient(0,230,0,50);return t.addColorStop(1,"rgba(66,134,121,0.15)"),t.addColorStop(.4,"rgba(66,134,121,0.0)"),t.addColorStop(0,"rgba(66,134,121,0)"),{labels:["JUL","AUG","SEP","OCT","NOV"],datasets:[{label:"My First dataset",fill:!0,backgroundColor:t,borderColor:"#00d6b4",borderWidth:2,borderDash:[],borderDashOffset:0,pointBackgroundColor:"#00d6b4",pointBorderColor:"rgba(255,255,255,0)",pointHoverBackgroundColor:"#00d6b4",pointBorderWidth:20,pointHoverRadius:4,pointHoverBorderWidth:15,pointRadius:4,data:[90,27,60,12,80]}]}},options:{maintainAspectRatio:!1,legend:{display:!1},tooltips:{backgroundColor:"#f5f5f5",titleFontColor:"#333",bodyFontColor:"#666",bodySpacing:4,xPadding:12,mode:"nearest",intersect:0,position:"nearest"},responsive:!0,scales:{yAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(29,140,248,0.0)",zeroLineColor:"transparent"},ticks:{suggestedMin:50,suggestedMax:125,padding:20,fontColor:"#9e9e9e"}}],xAxes:[{barPercentage:1.6,gridLines:{drawBorder:!1,color:"rgba(0,242,195,0.1)",zeroLineColor:"transparent"},ticks:{padding:20,fontColor:"#9e9e9e"}}]}}}}}},[[183,1,2]]]);
//# sourceMappingURL=main.4609065d.chunk.js.map