System.register(["angular2/core", "../appartments/appartments.component", "angular2/router", "../component-selectors", "../home/home.component", "../../constants", "../google-verification/google.verification.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, appartments_component_1, router_1, component_selectors_1, home_component_1, constants_1, google_verification_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appartments_component_1_1) {
                appartments_component_1 = appartments_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component_selectors_1_1) {
                component_selectors_1 = component_selectors_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            },
            function (google_verification_component_1_1) {
                google_verification_component_1 = google_verification_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = "Арендатор.бай";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: component_selectors_1.ComponentSelectors.ARENDATOR,
                        templateUrl: constants_1.Constants.TEMPLATE_URL_PATH + "app.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS]
                    }),
                    router_1.RouteConfig([
                        { path: "/Home", name: "Home", component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: "/Appartments", name: "Appartments", component: appartments_component_1.AppartmentsComponent },
                        { path: "/google2e04601e52ed19c3", name: "Google", component: google_verification_component_1.GoogleComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map