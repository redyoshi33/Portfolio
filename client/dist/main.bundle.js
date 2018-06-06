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

module.exports = ".container{\n\tbackground: #F4F4F4;\n\tmargin: 0px;\n\tpadding: 0px;\n\theight: 100%;\n \tmax-width: 100%;\n \tfont-family: 'Open Sans', sans-serif;\n}\n#header-img { \n\tbackground-image: url('/assets/ocean1.jpeg');\n\tmax-width: 100%;\n\theight: 650px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    padding-top: 180px;\n    text-align: center;\n}\n.topname {\n\tfont-size: 80px;\n\tmargin-bottom: 50px;\n\tfont-weight: bold;\n\tcolor: #00008e;\n}\n.title{\n\tcolor: #00008e;\n\tmargin-top: 50px;\n}\n#aboutme{\n\twidth: 100%;\n\tpadding: 50px 50px 20px;\n\tcolor: #00008e;\n\tfont-size: 16px;\n}\n#profile_pic{\n\tdisplay: inline-block;\n\twidth: 100%;\n\theight: 70%;\n\tborder-radius: 50%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    margin-bottom: 10px;\n}\n.aboutme-header{\n\tmargin-bottom: 25px;\n}\n.aboutme-body{\n\tline-height: 2;\n}\n#contact{\n\ttext-align: center;\n}\n.header-img2 { \n\tbackground-image: url('/assets/project2.jpg');\n\tmax-width: 100%;\n\theight: 200px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    padding: 75px;\n    color: white;\n}\n#projects{\n\tpadding: 50px;\n\tmin-height: 630px;\n}\n.card {\n\tborder: 3px solid #007bff;\n\tbackground-color: #F4F4F4;\n\tborder-radius: 10px;\n}\n#projects .card:hover {\n\t-webkit-box-shadow: 0px 0px 10px 3px rgba(0,148,247,1);\n\tbox-shadow: 0px 0px 10px 3px rgba(0,148,247,1);\n}\n.project-card {\n\tpadding: 0px 20px;\n\tcolor: #00008e;\n\ttext-align: center;\n\tmargin: 10px 0px;\n}\n.project-card img{\n\twidth: 100%;\n\theight: 225px;\n\tmargin-bottom: 10px;\n}\n.project-card p{\n\ttext-align: left;\n}\n.project-card button{\n\tbackground-color: #007bff;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n}\n.pokedex-imgs img{\n\tdisplay: inline-block;\n\twidth: 45%\n}\n.header-img3 { \n\tbackground-image: url('/assets/skill.jpg');\n\tmax-width: 100%;\n\theight: 200px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    padding: 75px;\n    color: white;\n}\n#skills{\n\tpadding: 50px;\n}\n.item-spacing{\n\tmargin: 10px 0px;\n}\n.skill-card{\n\ttext-align: center;\n\tpadding-top: 10px;\n\tborder-radius: 10px;\n\tcolor: #00008e;\n\tmargin: 10px 5px;\n}\n.skill-head{\n\tborder-bottom: 3px solid #007bff;\n}\n.skill-body{\n\tpadding: 10px;\n}\n.skill-card li{\n\ttext-align: left;\n}\n.header-img4 { \n\tbackground-image: url('/assets/fish.jpg');\n\tmax-width: 100%;\n\theight: 200px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    padding: 75px;\n    color: white;\n}\n#experience{\n\tpadding: 50px;\n\tcolor: #00008e;\n}\n.exp-title h3{\n\tfont-weight: bolder;\n\ttext-decoration: underline;\n}\n.header-img5 { \n\tbackground-image: url('/assets/numazu.jpg');\n\tmax-width: 100%;\n\theight: 200px;\n    background-attachment: fixed;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    text-align: center;\n    padding: 75px;\n    color: white;\n}\n#contact{\n\tpadding: 20px 50px;\n}\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div class='container'>\n\t<div id='header-img'>\n\t\t<h1 class='topname' ngsReveal>Ryan Young</h1>\n\t\t<h1 class='title' ngsReveal>Software Developer</h1>\n\t</div>\n\t<div class='row' id='aboutme' ngsReveal>\n\t\t<div class='col-lg-3 col-md-3 col-sm-8'>\n\t\t\t<img src=\"/assets/Profile.jpeg\" alt='profile picture' id='profile_pic'>\n\t\t</div>\n\t\t<div class='col-lg-9 col-md-9 col-sm-10'>\n\t\t\t<h1 class='aboutme-header'>About Me</h1>\n\t\t\t<p class='aboutme-body'>Hello! I'm Ryan and I'm a software developer with proficiency in Javascript, Python, and Swift. I graduated UC Davis in 2015 with a Bachelor's of Science in Animal Biology and started working in the CA Department of Fish and Wildlife, where I gained valuable experience working closely with a field crew and experience adapting to unexpected problems. After working there for 2 years, I discovered a new passion for programming and decided to expand my knowledge and experience of the field, so I can make applications that can improve society. If you would like to learn more, please get in touch with me:</p>\n\t\t\t<div class='row' id='contact'>\n\t\t\t\t<div class='col-md-3 col-sm-6'>\n\t\t\t\t\t<a href=\"mailto:rayyoung@ucdavis.edu\">\n\t\t\t\t\t\t<i class=\"fas fa-envelope fa-3x\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>Email</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class='col-md-3 col-sm-6'>\n\t\t\t\t\t<a href=\"/assets/RyanYoungresume.pdf\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fas fa-file fa-3x\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>Resume</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class='col-md-3 col-sm-6'>\n\t\t\t\t\t<a href=\"https://github.com/redyoshi33/\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fab fa-github fa-3x\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>Github</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class='col-md-3 col-sm-6'>\n\t\t\t\t\t<a href=\"https://www.linkedin.com/in/youngryan93/\" target=\"_blank\">\n\t\t\t\t\t\t<i class=\"fab fa-linkedin fa-3x\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t\t<h5>LinkedIn</h5>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class='header-img2'>\n\t<h1>PROJECTS</h1>\n</div>\n<div class=\"container\" id='projects'>\n\t<div *ngIf='game' ngsReveal><app-twentyfourgame (BackEventEmitter)='switchBack()'></app-twentyfourgame></div>\n\t<div *ngIf='poke' ngsReveal><app-pokedex (BackEventEmitter)='switchBack()'></app-pokedex></div>\n\t<div *ngIf='weeh' ngsReveal><app-weeh (BackEventEmitter)='switchBack()'></app-weeh></div>\n\n\t<div *ngIf='showcom' class='row' ngsReveal>\n\t\t<div class='col-lg-4 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='project-card'>\n\t\t\t\t\t<h3>24 Game</h3>\n\t\t\t\t\t<img src=\"/assets/24game.png\" alt='24 Game img'>\n\t\t\t\t\t<p>A multiplayer web application game that uses socket.io, in which users compete to see who can make the value 24 using all 4 displayed numbers and the four basic operations of arithmetic (add, subtract, multiply, divide).</p>\n\t\t\t\t\t<button (click)=\"clickDetail24()\">More Details</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-4 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='project-card'>\n\t\t\t\t\t<h3>Pokedex Trivia</h3>\n\t\t\t\t\t<div class='pokedex-imgs'>\n\t\t\t\t\t\t<img src=\"/assets/Pokedex1.png\" alt='Pokedex Trivia 1 img'>\n\t\t\t\t\t\t<img src=\"/assets/Pokedex2.png\" alt='Pokedex Trivia 2 img'>\n\t\t\t\t\t</div>\n\t\t\t\t\t<p>A trivia iOS application that uses the Pokemon API to pull a description about a random Pokemon and allows the user to guess which Pokemon it is. Users can score points and to place on a local score board.</p>\n\t\t\t\t\t<button (click)=\"clickDetailPoke()\">More Details</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-4 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='project-card'>\n\t\t\t\t\t<h3>Where Eat, Eat Here</h3>\n\t\t\t\t\t<img src=\"/assets/WEEH.png\" alt='WEEH img'>\n\t\t\t\t\t<p>A restaurant finding web application that allows users to create a profile and add other users as friends. Users can then create groups that use multiple user preferences to select a restaurant.</p>\n\t\t\t\t\t<button (click)=\"clickDetailWEEH()\">More Details</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class='header-img3'>\n\t<h1>SKILLS</h1>\n</div>\n<div class=\"container\">\n\t<div class='row' id='skills' ngsReveal>\n\t\t<div class='col-lg-3 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='skill-card'>\n\t\t\t\t\t<div class='skill-head'>\n\t\t\t\t\t\t<h4>Languages</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='skill card-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Javascript</li>\n\t\t\t\t\t\t\t<li>Python</li>\n\t\t\t\t\t\t\t<li>Swift</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-3 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='skill-card'>\n\t\t\t\t\t<div class='skill-head'>\n\t\t\t\t\t\t<h4>Front End</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='skill-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>HTML/CSS</li>\n\t\t\t\t\t\t\t<li>Angular</li>\n\t\t\t\t\t\t\t<li>jQuery</li>\n\t\t\t\t\t\t\t<li>AJAX</li>\n\t\t\t\t\t\t\t<li>Bootstrap</li>\n\t\t\t\t\t\t\t<li>Socket.io</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-3 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='skill-card'>\n\t\t\t\t\t<div class='skill-head'>\n\t\t\t\t\t\t<h4>Back End</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='skill-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>Node.js</li>\n\t\t\t\t\t\t\t<li>Express</li>\n\t\t\t\t\t\t\t<li>Django</li>\n\t\t\t\t\t\t\t<li>Mongoose</li>\n\t\t\t\t\t\t\t<li>MongoDB</li>\n\t\t\t\t\t\t\t<li>MySQL</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-lg-3 col-md-6 col-sm-12 item-spacing'>\n\t\t\t<div class='card h-100'>\n\t\t\t\t<div class='skill-card'>\n\t\t\t\t\t<div class='skill-head'>\n\t\t\t\t\t\t<h4>Misc</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='skill-body'>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li>AWS</li>\n\t\t\t\t\t\t\t<li>Restful API</li>\n\t\t\t\t\t\t\t<li>JSON</li>\n\t\t\t\t\t\t\t<li>Git</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class='header-img4'>\n\t<h1>EXPERIENCE</h1>\n</div>\n<div class=\"container\">\n\t<div class='row' id='experience' ngsReveal>\n\t\t<div class='col-sm-12'>\n\t\t\t<div class='exp'>\n\t\t\t\t<div class='exp-title'>\n\t\t\t\t\t<h3>Student Software Developer</h3>\n\t\t\t\t\t<h4>Coding Dojo - San Jose</h4>\n\t\t\t\t\t<p>Jan 2018 - Apr 2018</p>\n\t\t\t\t</div>\n\t\t\t\t<div class='exp-body'>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Learned three full stacks: Python, Swift, and MEAN, as well as front-end HTML/CSS. </li>\n\t\t\t\t\t\t<li>Dedicated 1000+ hours of coding within three months. </li>\n\t\t\t\t\t\t<li>Created websites and projects using various frameworks, such as Django and MEAN, and implemented databases, like MongoDB, for back-end. Gained the knowledge and skills for full stack web development, such as deploying websites from client to server to database.</li>\n\t\t\t\t\t\t<li>Collaborated with other students to create new projects.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-sm-12'>\n\t\t\t<div class='exp'>\n\t\t\t\t<div class='exp-title'>\n\t\t\t\t\t<h3>Scientific Aid</h3>\n\t\t\t\t\t<h4>California Department of Fish and Wildlife - Stockton</h4>\n\t\t\t\t\t<p>Nov 2015 - Jan 2018</p>\n\t\t\t\t</div>\n\t\t\t\t<div class='exp-body'>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Processed biological samples collected from San Francisco Estuary using a dissecting microscope. Identified species and sex for shrimp species found in the bay and recorded data onto Microsoft Access.</li>\n\t\t\t\t\t\t<li>Assisted with sample collection on a research vessel each month. Worked with the field crew to set and retrieve the midwater net and otter trawl, measure and identify fish and invertebrate species, and record environmental parameters.</li>\n\t\t\t\t\t\t<li>Trained and managed new hires, while revamping the protocol for processing biological samples.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-sm-12'>\n\t\t\t<div class='exp'>\n\t\t\t\t<div class='exp-title'>\n\t\t\t\t\t<h3>Staff Research Associate II</h3>\n\t\t\t\t\t<h4>University of California, Davis - Davis</h4>\n\t\t\t\t\t<p>Jul 2016 - Sept 2016</p>\n\t\t\t\t</div>\n\t\t\t\t<div class='exp-body'>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Supervised and managed the daily operation of the Center for Aquatic Biology and Aquaculture (CABA). Provided direct technical assistance to faculty, staff and students using the facilities, equipment, and animals for research.</li>\n\t\t\t\t\t\t<li>Provided primary emergency response to failures of power, water supply, and environmental control systems through understanding the facilities and life support systems.</li>\n\t\t\t\t\t\t<li>Provided routine facility and system mechanical maintenance and animal husbandry, which consisted of feeding, tank cleaning, and health monitoring.</li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class='col-sm-12'>\n\t\t\t<div class='exp'>\n\t\t\t\t<div class='exp-title'>\n\t\t\t\t\t<h3>Research Associate</h3>\n\t\t\t\t\t<h4>University of California, Davis - Davis</h4>\n\t\t\t\t\t<p>Jun 2015 - Dec 2015</p>\n\t\t\t\t</div>\n\t\t\t\t<div class='exp-body'>\n\t\t\t\t\t<ul>\n\t\t\t\t\t\t<li>Collaborated with lab members to perform swimming and behavioral experiments on green sturgeon, including constructing experiment protocols and recording data through Excel.</li>\n\t\t\t\t\t\t<li>Utilized critical-thinking and observation skills to analyze experimental data and write up scientific papers for publishing. </li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class='header-img5'>\n\t<h1>CONTACT</h1>\n</div>\n<div class='container'>\n\t<div class='row' id='contact' ngsReveal>\n\t\t<div class='col-md-4 col-sm-12'>\n\t\t\t<a href=\"mailto:rayyoung@ucdavis.edu\">\n\t\t\t\t<i class=\"fas fa-envelope fa-2x\"></i>\n\t\t\t</a>\n\t\t\t<p>Email: rayyoung@ucdavis.edu</p>\n\t\t</div>\n\t\t<div class='col-md-4 col-sm-12'>\n\t\t\t<a href=\"https://github.com/redyoshi33/\" target=\"_blank\">\n\t\t\t\t<i class=\"fab fa-github fa-2x\"></i>\n\t\t\t</a>\n\t\t\t<p>Github: github.com/redyoshi33/</p>\n\t\t</div>\n\t\t<div class='col-md-4 col-sm-12'>\n\t\t\t<a href=\"https://www.linkedin.com/in/youngryan93/\" target=\"_blank\">\n\t\t\t\t<i class=\"fab fa-linkedin fa-2x\"></i>\n\t\t\t</a>\n\t\t\t<p>LinkedIn: linkedin.com/in/youngryan93/</p>\n\t\t</div>\n\t</div>\n</div>\n\n\n\n\n\n\n\n\n\n\n"

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

module.exports = ".row{\n\tpadding: 20px;\n}\n.projectwindow{\n\tcolor: #00008e;\n\tfont-family: 'Open Sans', sans-serif;\n}\n.align-btn{\n\ttext-align: center;\n}\nbutton{\n\tmargin: 10px 0px 30px;\n\tbackground-color: #007bff;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px 20px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/pokedex/pokedex.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='projectwindow col-md-6 col-sm-12'>\n\t\t<h2>Pokedex Trivia</h2>\n\t\t<p><strong>GitHub: </strong> <a href='https://github.com/redyoshi33/Pokedex_Trivia' target=\"_blank\">github.com/redyoshi33/Pokedex_Trivia</a></p>\n\t\t<p><strong>Technologies: </strong> Swift, Pokemon API, Core Data </p>\n\t\t<p><strong>Role: </strong>Worked independently, built the UI and the logic, fetching data through API calls.</p>\n\t\t<p><strong>Description: </strong>A trivia iOS application that uses the Pokemon API to pull a description about a random Pokemon and allows the user to guess which Pokemon it is. Users can score points and place on a local score board.</p>\n\t\t<p><strong>Awards:</strong> Placed 1st in a Swift Hackathon amongst 8 teams. </p>\n\t\t<div class='align-btn'><button (click)=\"clickBack()\">Back</button></div>\n\t</div>\n\t<div class='video col-md-6 col-sm-12'>\n\t\t<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/WWDErN6LTsM\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t</div>\n</div>"

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

module.exports = ".row{\n\tpadding: 20px;\n}\n.projectwindow{\n\tcolor: #00008e;\n\tfont-family: 'Open Sans', sans-serif;\n}\n.align-btn{\n\ttext-align: center;\n}\nbutton{\n\tmargin: 10px 0px 30px;\n\tbackground-color: #007bff;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px 20px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/twentyfourgame/twentyfourgame.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='projectwindow col-md-6 col-sm-12'>\n\t\t<h2>24 Game</h2>\n\t\t<p><strong>GitHub: </strong> <a href='https://github.com/redyoshi33/24cardgame' target=\"_blank\">github.com/redyoshi33/24cardgame</a></p>\n\t\t<p><strong>Technologies: </strong> Express.js, Node.js, Angular, Socket.io, Bootstrap </p>\n\t\t<p><strong>Role: </strong>Worked independently, built the UI, game logic, and server to user connections.</p>\n\t\t<p><strong>Description: </strong>A multiplayer web application game that uses socket.io, in which users compete to see who can make the value 24 using all 4 displayed numbers and the four basic operations of arithmetic (add, subtract, multiply, divide).</p>\n\t\t<div class='align-btn'><button (click)=\"clickBack()\">Back</button></div>\n\t</div>\n\t<div class='video col-md-6 col-sm-12'>\n\t\t<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/WC1hlFO55Y8\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t</div>\n</div>\n\n"

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

module.exports = ".row{\n\tpadding: 20px;\n}\n.projectwindow{\n\tcolor: #00008e;\n\tfont-family: 'Open Sans', sans-serif;\n}\n.align-btn{\n\ttext-align: center;\n}\nbutton{\n\tmargin: 10px 0px 30px;\n\tbackground-color: #007bff;\n\tborder-radius: 10px;\n\tcolor: white;\n\tpadding: 10px 20px;\n\t-webkit-box-shadow: 2px 2px 2px #888888;\n\t        box-shadow: 2px 2px 2px #888888;\n}\n"

/***/ }),

/***/ "./src/app/weeh/weeh.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='row'>\n\t<div class='projectwindow col-md-6 col-sm-12'>\n\t\t<h2>Where Eat, Eat Here</h2>\n\t\t<p><strong>GitHub: </strong> <a href='https://github.com/redyoshi33/Restaurant_app' target=\"_blank\">github.com/redyoshi33/Restaurant_app</a></p>\n\t\t<p><strong>Technologies: </strong> Python, Django, Google Maps API, Yelp API, Bootstrap </p>\n\t\t<p><strong>Role: </strong>Built on a team of 2 developers, contributed with building the UI, front-end, and back-end.</p>\n\t\t<p><strong>Description: </strong>A restaurant finding web application that allows users to create a profile and add other users as friends. Users can then create groups that use multiple user preferences to select a restaurant.</p>\n\t\t<p><strong>Awards:</strong> Placed 1st in a Python Hackathon amongst 4 teams. </p>\n\t\t<div class='align-btn'><button (click)=\"clickBack()\">Back</button></div>\n\t</div>\n\t<div class='video col-md-6 col-sm-12'>\n\t\t<iframe width=\"100%\" height=\"315\" src=\"https://www.youtube.com/embed/ZukKZSmecIc\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n\t</div>\n</div>\n"

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