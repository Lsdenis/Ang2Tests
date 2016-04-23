System.register(["angular2/core", "../component-selectors", "../../constants"], function(exports_1, context_1) {
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
    var core_1, component_selectors_1, constants_1;
    var GoogleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component_selectors_1_1) {
                component_selectors_1 = component_selectors_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            GoogleComponent = (function () {
                function GoogleComponent() {
                }
                GoogleComponent = __decorate([
                    core_1.Component({
                        selector: component_selectors_1.ComponentSelectors.GOOGLE,
                        templateUrl: constants_1.Constants.TEMPLATE_URL_PATH + "google2e04601e52ed19c3.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], GoogleComponent);
                return GoogleComponent;
            }());
            exports_1("GoogleComponent", GoogleComponent);
        }
    }
});
//# sourceMappingURL=google.verification.component.js.map