webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var routes = [
    { path: "", component: home_component_1.HomeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<script src=\"https://code.jquery.com/jquery-3.2.1.slim.min.js\" integrity=\"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN\" crossorigin=\"anonymous\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js\" integrity=\"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q\" crossorigin=\"anonymous\"></script>\n<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\" integrity=\"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl\" crossorigin=\"anonymous\"></script>\n<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" integrity=\"sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm\" crossorigin=\"anonymous\">\n<link href=\"https://fonts.googleapis.com/css?family=Open+Sans\" rel=\"stylesheet\">\n<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.0.13/css/all.css\" integrity=\"sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp\" crossorigin=\"anonymous\">\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var navbar_component_1 = __webpack_require__("./src/app/navbar/navbar.component.ts");
var ngx_scroll_to_1 = __webpack_require__("./node_modules/@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var ng_scrollreveal_1 = __webpack_require__("./node_modules/ng-scrollreveal/index.js");
var twentyfourgame_component_1 = __webpack_require__("./src/app/twentyfourgame/twentyfourgame.component.ts");
var pokedex_component_1 = __webpack_require__("./src/app/pokedex/pokedex.component.ts");
var weeh_component_1 = __webpack_require__("./src/app/weeh/weeh.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent,
                navbar_component_1.NavbarComponent,
                twentyfourgame_component_1.TwentyfourgameComponent,
                pokedex_component_1.PokedexComponent,
                weeh_component_1.WeehComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ng_bootstrap_1.NgbModule.forRoot(),
                ngx_scroll_to_1.ScrollToModule.forRoot(),
                ng_scrollreveal_1.NgsRevealModule.forRoot(),
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\n\tbackground: #F4F4F4;\n\tmargin: 0px;\n\tpadding: 0px;\n\theight: 100%;\n \tmax-width: 100%;\n \tfont-family: 'Open Sans', sans-serif;\n}\n#header-img { \n\tbackground-image: url('/assets/ocean1.jpeg');\n\tmax-width: 100%;\n\theight: 650px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-top: 180px;\n    text-align: center;\n}\n.topname {\n\tfont-size: 80px;\n\tmargin-bottom: 50px;\n\tfont-weight: bold;\n\tcolor: #00008e;\n}\n.title{\n\tcolor: #00008e;\n\tmargin-top: 50px;\n}\n#aboutme{\n\twidth: 100%;\n\tpadding: 50px 50px 20px;\n\tcolor: #00008e;\n\tfont-size: 16px;\n}\n#profile_pic{\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: 70%;\n\tborder-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin-bottom: 10px;\n}\n.aboutme-header{\n\tmargin-bottom: 25px;\n}\n.aboutme-body{\n\tline-height: 2;\n}\n#contact{\n\ttext-align: center;\n}\n.header-img2 { \n\tbackground-image: url('/assets/project2.jpg');\n\tmax-width: 100%;\n\theight: 200px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    padding: 75px;\n    color: white;\n}\n#projects{\n\tpadding: 50px;\n\tmin-height: 630px;\n}\n.card {\n\tborder: 3px solid #007bff;\n\tbackground-color: #F4F4F4;\n\tborder-radius: 10px;\n\tmargin-bottom: 30px;\n}\n#projects .card:hover {\n\t-webkit-box-shadow: 0px 0px 10px 3px rgba(0,148,247,1);\n\tbox-shadow: 0px 0px 10px 3px rgba(0,148,247,1);\n}\n.project-card {\n\tpadding: 0px 20px 15px;\n\tcolor: #00008e;\n\ttext-align: center;\n\tmargin: 10px 0px;\n}\n.project-card img{\n\twidth: 100%;\n\tmargin-bottom: 30px;\n}\n.project-card p{\n\ttext-align: left;\n}\n.project-card button{\n\tbackground-color: #007bff;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n\tposition: absolute;\n\tbottom: 0px;\n\t-webkit-transform: translate(-50%);\n\t        transform: translate(-50%);\n\tmargin-bottom: 10px;\n}\n#PokedexGIF{\n\twidth:60%;\n}\n.header-img3 { \n\tbackground-image: url('/assets/skill.jpg');\n\tmax-width: 100%;\n\theight: 200px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    padding: 75px;\n    color: white;\n}\n#skills{\n\tpadding: 50px;\n}\n.item-spacing{\n\tmargin: 10px 0px;\n}\n.skill-card{\n\ttext-align: center;\n\tpadding-top: 10px;\n\tborder-radius: 10px;\n\tcolor: #00008e;\n\tmargin: 10px 5px;\n}\n.skill-head{\n\tborder-bottom: 3px solid #007bff;\n}\n.skill-body{\n\tpadding: 10px;\n}\n.skill-card li{\n\ttext-align: left;\n}\n.header-img4 { \n\tbackground-image: url('/assets/fish.jpg');\n\tmax-width: 100%;\n\theight: 200px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    padding: 75px;\n    color: white;\n}\n#experience{\n\tpadding: 50px;\n\tcolor: #00008e;\n}\n.exp-title h3{\n\tfont-weight: bolder;\n\ttext-decoration: underline;\n}\n.header-img5 { \n\tbackground-image: url('/assets/numazu.jpg');\n\tmax-width: 100%;\n\theight: 200px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    padding: 75px;\n    color: white;\n}\n#contact{\n\tpadding: 20px 50px;\n}\n.exp-card{\n\tpadding-top: 10px;\n\tborder-radius: 10px;\n\tcolor: #00008e;\n\tmargin: 10px 5px;\n}\n.exp-head{\n\tborder-bottom: 3px solid #007bff;\n\ttext-align: center;\n}\n.exp-body{\n\tpadding: 10px;\n}\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class='container'>\n\t<div id='header-img'>\n\t\t<h1 class='topname' ngsReveal>Ryan Young</h1>\n\t\t<h1 class='title' ngsReveal>Software Developer</h1>\n\t</div>\n\t<div class='row' id='aboutme' ngsReveal>\n\t\t<div class='col-lg-3 col-md-3 col-sm-8'>\n\t\t\t<img src=\"/assets/Profile.jpg\" alt='profile picture' id='profile_pic'>\n\t\t</div>\n\t\t<div class='col-lg-9 col-md-9 col-sm-10'>\n\t\t\t<h1 class='aboutme-header'>About Me</h1>\n\t\t\t<p class='aboutme-body'>Hello! I'm Ryan and I'm a software developer with proficiency in Javascript, Python, and Swift. I've always had an interest in coding and started learning on my own with small tasks like printing \"Hello world!\" After a bit of practice, I decided to take the next step expanding my knowledge and experience of the field, so I enrolled in Coding Dojo, where I learned to build various projects with front-end and back-end. Along with coding, I have a passion for research and data as I originally came from a scientific background, graduating UC Davis in 2015 with a Bachelor's of Science in Animal Biology and working in the CA Department of Fish and Wildlife. I want to combine both of my passions of data and programming and mack an impact on society. If you would like to learn more, please get in touch with me:</p>\n\t\t\t<div class='row' id='contact'>\n\t\t\t\t<div class='col-md-3 col-sm-6'>\n\t\t\t\t\t<a href=\"mailto:rayyoung@ucdavis.edu\">\n\t\t\t\t\t\t<i class=\"fas fa-envelope fa-3x\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>Email</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class='col-md-3 col-sm-6'>\n\t\t\t\t\t<a href=\"/assets/RyanYoungResume.pdf\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fas fa-file fa-3x\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>Resume</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class='col-md-3 col-sm-6'>\n\t\t\t\t\t<a href=\"https://github.com/redyoshi33/\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fab fa-github fa-3x\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>Github</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class='col-md-3 col-sm-6'>\n\t\t\t\t\t<a href=\"https://www.linkedin.com/in/youngryan93/\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fab fa-linkedin fa-3x\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>LinkedIn</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class='header-img2'>\n\t<h1>PROJECTS</h1>\n</div>\n<div class=\"container\" id='projects'>\n\t<div *ngIf='game' ngsReveal><app-twentyfourgame (BackEventEmitter)='switchBack()'></app-twentyfourgame></div>\n\t<div *ngIf='poke' ngsReveal><app-pokedex (BackEventEmitter)='switchBack()'></app-pokedex></div>\n\t<div *ngIf='weeh' ngsReveal><app-weeh (BackEventEmitter)='switchBack()'></app-weeh></div>\n\n\t<div *ngIf='showcom' class='row' ngsReveal>\n\t\t<div class='col-lg-4 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='project-card' (click)=\"clickDetailWEEH()\">\n\t\t\t\t\t<h3>Where Eat, Eat Here</h3>\n\t\t\t\t\t<img src=\"/assets/WEEH GIF.gif\" alt='WEEH gif'>\n\t\t\t\t\t<p>A restaurant finding web application that allows users to create a profile and add other users as friends. Users can then create groups that use multiple user preferences to select a restaurant.</p>\n\t\t\t\t\t<button>More Details</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-4 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='project-card' (click)=\"clickDetailPoke()\">\n\t\t\t\t\t<h3>Pokedex Trivia</h3>\n\t\t\t\t\t<div class='pokedex-imgs'>\n\t\t\t\t\t\t<img id=\"PokedexGIF\"src=\"/assets/Pokedex GIF.gif\" alt='Pokedex Trivia gif'>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>A trivia iOS application that uses the Pokemon API to pull a description about a random Pokemon and allows the user to guess which Pokemon it is. Users can score points and place on a local score board.</p>\n\t\t\t\t\t<button>More Details</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-4 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='project-card' (click)=\"clickDetail24()\">\n\t\t\t\t\t<h3>24 Game</h3>\n\t\t\t\t\t<img src=\"/assets/24Game GIF.gif\" alt='24 Game gif'>\n\t\t\t\t\t<p>A multiplayer web application game that utilizes socket.io, in which users can compete to see who can make the value 24 using all 4 displayed numbers and the four basic operations of arithmetic (add, subtract, multiply, divide).</p>\n\t\t\t\t\t<button>More Details</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class='header-img3'>\n\t<h1>SKILLS</h1>\n</div>\n<div class=\"container\">\n\t<div class='row' id='skills' ngsReveal>\n\t\t<div class='col-lg-3 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='skill-card'>\n\t\t\t\t\t<div class='skill-head'>\n\t\t\t\t\t\t<h4>Languages</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='skill card-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Javascript</li>\n\t\t\t\t\t\t\t<li>Typescript</li>\n\t\t\t\t\t\t\t<li>Python</li>\n\t\t\t\t\t\t\t<li>Swift</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-3 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='skill-card'>\n\t\t\t\t\t<div class='skill-head'>\n\t\t\t\t\t\t<h4>Front End</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='skill-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>HTML/CSS</li>\n\t\t\t\t\t\t\t<li>Angular</li>\n\t\t\t\t\t\t\t<li>jQuery</li>\n\t\t\t\t\t\t\t<li>AJAX</li>\n\t\t\t\t\t\t\t<li>Bootstrap</li>\n\t\t\t\t\t\t\t<li>Socket.io</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-3 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='skill-card'>\n\t\t\t\t\t<div class='skill-head'>\n\t\t\t\t\t\t<h4>Back End</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='skill-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Node.js</li>\n\t\t\t\t\t\t\t<li>Express</li>\n\t\t\t\t\t\t\t<li>Django</li>\n\t\t\t\t\t\t\t<li>Mongoose</li>\n\t\t\t\t\t\t\t<li>MongoDB</li>\n\t\t\t\t\t\t\t<li>MySQL</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-3 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='skill-card'>\n\t\t\t\t\t<div class='skill-head'>\n\t\t\t\t\t\t<h4>Misc</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='skill-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>AWS</li>\n\t\t\t\t\t\t\t<li>Restful API</li>\n\t\t\t\t\t\t\t<li>JSON</li>\n\t\t\t\t\t\t\t<li>Git/Github</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class='header-img4'>\n\t<h1>EXPERIENCE</h1>\n</div>\n<div class=\"container\">\n\t<div class='row' id='experience' ngsReveal>\n\t\t<div class='col-sm-12'>\n\t\t\t<div class='card'>\n\t\t\t\t<div class='exp-card'>\n\t\t\t\t\t<div class='exp-head'>\n\t\t\t\t\t\t<h3>Student Software Developer</h3>\n\t\t\t\t\t\t<h4>Coding Dojo - San Jose</h4>\n\t\t\t\t\t\t<p>Jan 2018 - Apr 2018</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='exp-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Dedicated over 1000+ hours of coding learning Javascript, Python, and Swift, as well as utilizing different frameworks, such as Django and Node.js, and implementing databases, like MongoDB, for back-end. Gained experience deploying projects using AWS. </li>\n\t\t\t\t\t\t\t<li>Placed first in two 24 hour hackathons and received full marks on industry level exams and awarded triple black belts (highest accolade). </li>\n\t\t\t\t\t\t\t<li>Helped multiple classmates with learning the fundamentals of front-end and back-end development and building multiple web applications and projects using various wireframes.</li>\n\t\t\t\t\t\t\t<li>Collaborated with other students to create new projects.</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-sm-12'>\n\t\t\t<div class='card'>\n\t\t\t\t<div class='exp-card'>\n\t\t\t\t\t<div class='exp-head'>\n\t\t\t\t\t\t<h3>Scientific Aid</h3>\n\t\t\t\t\t\t<h4>California Department of Fish and Wildlife - Stockton</h4>\n\t\t\t\t\t\t<p>Nov 2015 - Jan 2018</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='exp-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Processed biological samples collected from San Francisco Estuary using a dissecting microscope. Identified species and sex for shrimp species found in the bay and recorded data onto Microsoft Access.</li>\n\t\t\t\t\t\t\t<li>Assisted with sample collection on a research vessel each month. Worked with the field crew to set and retrieve the midwater net and otter trawl, measure and identify fish and invertebrate species, and record environmental parameters.</li>\n\t\t\t\t\t\t\t<li>Trained and managed new hires, while revamping the protocol for processing biological samples.</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-sm-12'>\n\t\t\t<div class='card'>\n\t\t\t\t<div class='exp-card'>\n\t\t\t\t\t<div class='exp-head'>\n\t\t\t\t\t\t<h3>Staff Research Associate II</h3>\n\t\t\t\t\t\t<h4>University of California, Davis - Davis</h4>\n\t\t\t\t\t\t<p>Jul 2016 - Sept 2016</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='exp-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Supervised and managed the daily operation of the Center for Aquatic Biology and Aquaculture (CABA). Provided direct technical assistance to faculty, staff and students using the facilities, equipment, and animals for research.</li>\n\t\t\t\t\t\t\t<li>Provided primary emergency response to failures of power, water supply, and environmental control systems through understanding the facilities and life support systems.</li>\n\t\t\t\t\t\t\t<li>Provided routine facility and system mechanical maintenance and animal husbandry, which consisted of feeding, tank cleaning, and health monitoring.</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-sm-12'>\n\t\t\t<div class='card'>\n\t\t\t\t<div class='exp-card'>\n\t\t\t\t\t<div class='exp-head'>\n\t\t\t\t\t\t<h3>Research Associate</h3>\n\t\t\t\t\t\t<h4>University of California, Davis - Davis</h4>\n\t\t\t\t\t\t<p>Jun 2015 - Dec 2015</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='exp-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Collaborated with lab members to perform swimming and behavioral experiments on green sturgeon, including constructing experiment protocols and recording data through Excel.</li>\n\t\t\t\t\t\t\t<li>Utilized critical-thinking and observation skills to analyze experimental data and write up scientific papers for publishing. </li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class='header-img5'>\n\t<h1>CONTACT</h1>\n</div>\n<div class='container'>\n\t<div class='row' id='contact' ngsReveal>\n\t\t<div class='col-md-4 col-sm-12'>\n\t\t\t<a href=\"mailto:rayyoung@ucdavis.edu\">\n\t\t\t\t<i class=\"fas fa-envelope fa-2x\"></i>\n\t\t\t</a>\n\t\t\t<p>Email: rayyoung@ucdavis.edu</p>\n\t\t</div>\n\t\t<div class='col-md-4 col-sm-12'>\n\t\t\t<a href=\"https://github.com/redyoshi33/\" target=\"_blank\">\n\t\t\t\t<i class=\"fab fa-github fa-2x\"></i>\n\t\t\t</a>\n\t\t\t<p>Github: github.com/redyoshi33/</p>\n\t\t</div>\n\t\t<div class='col-md-4 col-sm-12'>\n\t\t\t<a href=\"https://www.linkedin.com/in/youngryan93/\" target=\"_blank\">\n\t\t\t\t<i class=\"fab fa-linkedin fa-2x\"></i>\n\t\t\t</a>\n\t\t\t<p>LinkedIn: linkedin.com/in/youngryan93/</p>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.showcom = true;
        this.game = false;
        this.poke = false;
        this.weeh = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.clickDetail24 = function () {
        this.showcom = false;
        this.game = true;
    };
    HomeComponent.prototype.clickDetailPoke = function () {
        this.showcom = false;
        this.poke = true;
    };
    HomeComponent.prototype.clickDetailWEEH = function () {
        this.showcom = false;
        this.weeh = true;
    };
    HomeComponent.prototype.switchBack = function () {
        this.showcom = true;
        this.game = false;
        this.poke = false;
        this.weeh = false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = "#navbar{\n\tbackground: #F4F4F4;\n\toverflow: hidden;\n    top: 0;\n    width: 100%;\n    font-family: 'Open Sans', sans-serif;\n    color: #00008e;\n    font-weight: bold;\n}\n#navbar li:hover {\n\tborder-bottom: 2px solid #00008e;\n}\nnav{\n\t-webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n\tbox-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);\n}\n#name{\n\tfont-weight: bolder;\n\tfont-size: 30px;\n\tcolor: #00008e\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id='navbar' >\n\t<a class=\"navbar-brand\" [ngx-scroll-to]=\"'#header-img'\" id='name'>RY</a>\n  \t<button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed = !isCollapsed\" data-toggle=\"collapse\" data-target=\"#navbarlist\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  \t</button>\n  \t<div class=\"collapse navbar-collapse\" id=\"navbarlist\" [ngbCollapse]=\"!isCollapsed\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#aboutme'\" [ngx-scroll-to-offset]=\"-72\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#projects'\" [ngx-scroll-to-offset]=\"-272\">Projects</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#skills'\" [ngx-scroll-to-offset]=\"-272\">Skills</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [ngx-scroll-to]=\"'#experience'\" [ngx-scroll-to-offset]=\"-272\">Experience</a>\n      </li>\n    </ul>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/app/pokedex/pokedex.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\n\tpadding: 20px;\n\tborder: 3px solid #007bff;\n\tborder-radius: 10px;\n}\n.projectwindow{\n\tcolor: #00008e;\n\tfont-family: 'Open Sans', sans-serif;\n}\n.align-btn{\n\ttext-align: center;\n}\nbutton{\n\tmargin: 10px 0px 30px;\n\tbackground-color: #007bff;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px 20px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/pokedex/pokedex.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='projectwindow col-md-6 col-sm-12' (click)=\"clickBack()\">\n\t\t<h2>Pokedex Trivia</h2>\n\t\t<p><u>GitHub</u>: <a href='https://github.com/redyoshi33/Pokedex_Trivia' target=\"_blank\">github.com/redyoshi33/Pokedex_Trivia</a></p>\n\t\t<p><u>Technologies</u>: Swift, Pokemon API, Core Data, AV Foundation </p>\n\t\t<p><u>Role</u>: Worked independently, built the UI and the logic, fetching data through API calls.</p>\n\t\t<p><u>Description</u>: The goal of the Pokedex Trivia iOS application is to guess the Pokemon based on a random description. This project was built using Swift and uses the Pokemon API, Core Data, and AV Foundation. The Pokemon API contains the name and description of each Pokemon along with an image of the Pokemon, Core Data allows for a local high score board, and AV Foundation adds sounds for correct and wrong answers. A random number is generated and is used to pull JSON data from the Pokemon API.</p>\n\t\t<p><u>Challenges</u>: The toughest challenge was making two API calls and signaling when the API calls were successful. The first call grabs data on the name and description of the Pokemon, but also contains another url, which contains the hints and the image of the Pokemon. Since the hints are part of the second API call, if the user submitted a wrong answer before the call is finished, the hints wouldn’t be displayed properly. In order to solve this, the initial call is made to collect the first part of the information. Once the second url is stored, another function is called to make another API call for the hint and Pokemon image. To signal that the calls are successful, a loading spinner will appear initially if the first API call isn’t finished and disappear once it is, and the submit button is disabled until the second API call is finished.\n\t\t<p><u>Awards</u>: Placed 1st in a 24 hour Swift Hackathon amongst 8 teams. </p>\n\t\t<div class='align-btn'><button>Back</button></div>\n\t</div>\n\t<div class='video col-md-6 col-sm-12'>\n\t\t<iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/WWDErN6LTsM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/pokedex/pokedex.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var PokedexComponent = /** @class */ (function () {
    function PokedexComponent() {
        this.BackEventEmitter = new core_1.EventEmitter();
    }
    PokedexComponent.prototype.ngOnInit = function () {
    };
    PokedexComponent.prototype.clickBack = function () {
        this.BackEventEmitter.emit();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], PokedexComponent.prototype, "BackEventEmitter", void 0);
    PokedexComponent = __decorate([
        core_1.Component({
            selector: 'app-pokedex',
            template: __webpack_require__("./src/app/pokedex/pokedex.component.html"),
            styles: [__webpack_require__("./src/app/pokedex/pokedex.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PokedexComponent);
    return PokedexComponent;
}());
exports.PokedexComponent = PokedexComponent;


/***/ }),

/***/ "./src/app/twentyfourgame/twentyfourgame.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\n\tpadding: 20px;\n\tborder: 3px solid #007bff;\n\tborder-radius: 10px;\n}\n.projectwindow{\n\tcolor: #00008e;\n\tfont-family: 'Open Sans', sans-serif;\n}\n.align-btn{\n\ttext-align: center;\n}\nbutton{\n\tmargin: 10px 0px 30px;\n\tbackground-color: #007bff;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px 20px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/twentyfourgame/twentyfourgame.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='projectwindow col-md-6 col-sm-12' (click)=\"clickBack()\">\n\t\t<h2>24 Game</h2>\n\t\t<p>Try it out: <a href=\"http://54.183.223.25/\" target=\"_blank\">http://54.183.223.25/</a></p>\n\t\t<p><u>GitHub</u>: <a href='https://github.com/redyoshi33/24cardgame' target=\"_blank\">github.com/redyoshi33/24cardgame</a></p>\n\t\t<p><u>Technologies</u>:  Express.js, Node.js, Angular, Socket.io, Bootstrap </p>\n\t\t<p><u>Role</u>: Worked independently, built the UI, game logic, and server to user connections.</p>\n\t\t<p><u>Description</u>: This project was built in Javascript and uses Express.js, Node.js, Angular, Socket.io, and Bootstrap. The User Interface was built using Bootstrap and Angular, for displaying information and utilizing submit/click events. The back end uses a Node.js server component with an Express.js framework. Socket.io is used to update and transfer data in real-time between the server and multiple clients. The deck and user data are stored as objects that are transmitted using socket.io events. </p>\n\t\t<p><u>Challenges</u>: \n\t     One challenge was how to compile the answer on the user side. I used the eval() function to compile the user’s equation, but if the given input doesn’t follow the specific guidelines of the eval() function, it’ll throw an error. For this reason, the inputs are restricted to clicking the cards and arithmetic buttons. If a card is clicked, other cards are disabled from being clicked until an arithmetic button is clicked and vice versa. This prevents users from submitting unexpected equations, while making the game more interactive by clicking the cards.</p>\n\t\t<div class='align-btn'><button>Back</button></div>\n\t</div>\n\t<div class='video col-md-6 col-sm-12'>\n\t\t<iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/WC1hlFO55Y8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/twentyfourgame/twentyfourgame.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TwentyfourgameComponent = /** @class */ (function () {
    function TwentyfourgameComponent() {
        this.BackEventEmitter = new core_1.EventEmitter();
    }
    TwentyfourgameComponent.prototype.ngOnInit = function () {
    };
    TwentyfourgameComponent.prototype.clickBack = function () {
        this.BackEventEmitter.emit();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], TwentyfourgameComponent.prototype, "BackEventEmitter", void 0);
    TwentyfourgameComponent = __decorate([
        core_1.Component({
            selector: 'app-twentyfourgame',
            template: __webpack_require__("./src/app/twentyfourgame/twentyfourgame.component.html"),
            styles: [__webpack_require__("./src/app/twentyfourgame/twentyfourgame.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwentyfourgameComponent);
    return TwentyfourgameComponent;
}());
exports.TwentyfourgameComponent = TwentyfourgameComponent;


/***/ }),

/***/ "./src/app/weeh/weeh.component.css":
/***/ (function(module, exports) {

module.exports = ".row{\n\tpadding: 20px;\n\tborder: 3px solid #007bff;\n\tborder-radius: 10px;\n}\n.projectwindow{\n\tcolor: #00008e;\n\tfont-family: 'Open Sans', sans-serif;\n}\n.align-btn{\n\ttext-align: center;\n}\nbutton{\n\tmargin: 10px 0px 30px;\n\tbackground-color: #007bff;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px 20px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/weeh/weeh.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='projectwindow col-md-6 col-sm-12' (click)=\"clickBack()\">\n\t\t<h2>Where Eat, Eat Here</h2>\n\t\t<p><u>GitHub</u>: <a href='https://github.com/redyoshi33/Restaurant_app' target=\"_blank\">github.com/redyoshi33/Restaurant_app</a></p>\n\t\t<p><u>Technologies</u>: Python, Django, Google Maps API, Yelp API, Bootstrap </p>\n\t\t<p><u>Role</u>: Built on a team of 2 developers, contributed with building the UI, front-end, and back-end.</p>\n\t\t<p><u>Description</u>: The Where Eat, Eat Here (WEEH) web application is a collaborated project between two developers, in which the application allows users to select restaurants based on multiple user preferences in a group. This project was built in Python and uses a Django framework and the Google Maps API, Yelp API, bcrypt and Bootstrap. The Google Maps API allows the application to display the location of the group’s address and the Yelp API is used to determine restaurants around the group’s address. Bcrypt is used to encrypt passwords for the login and registration page and Bootstrap is used to improve the overall design and UI.</p>\n\t\t<p><u>Challenges</u>: The most challenging aspect for WEEH was figuring out the selection algorithm based on the group’s preferences. We wanted to make it so the application didn’t only select restaurants from the most popular cuisine type in the group. So we decided to make each cuisine type have a probability based on the group’s preferences. Cuisines were separated into three categories: likes (plus one point), dislikes (minus one point), and hate (removed from selection). A probability is generated for each cuisine type, and then we generate a number between 0 and 1 and iterate through all the probabilities. A sum is created that starts at 0 and the random number is compared with the sum plus the cuisine probability. If the random number was less than the probability plus sum, that cuisine type was selected. If not, the cuisine probability would be added to the temporary sum and the random number would be compared with the sum and another cuisine probability. The process repeats once three cuisine types are selected. This makes it so a favored cuisine type will have a higher chance of being selected multiple times, while having other options for cuisine choices based on the group.</p>\n\t\t<p><u>Awards</u>: Placed 1st in a 24 hour Python Hackathon amongst 4 teams.</p>\n\t\t<div class='align-btn'><button>Back</button></div>\n\t</div>\n\t<div class='video col-md-6 col-sm-12'>\n\t\t<iframe width=\"100%\" height=\"400\" src=\"https://www.youtube.com/embed/ZukKZSmecIc\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/weeh/weeh.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var WeehComponent = /** @class */ (function () {
    function WeehComponent() {
        this.BackEventEmitter = new core_1.EventEmitter();
    }
    WeehComponent.prototype.ngOnInit = function () {
    };
    WeehComponent.prototype.clickBack = function () {
        this.BackEventEmitter.emit();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], WeehComponent.prototype, "BackEventEmitter", void 0);
    WeehComponent = __decorate([
        core_1.Component({
            selector: 'app-weeh',
            template: __webpack_require__("./src/app/weeh/weeh.component.html"),
            styles: [__webpack_require__("./src/app/weeh/weeh.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WeehComponent);
    return WeehComponent;
}());
exports.WeehComponent = WeehComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map