System.register(["angular2/core", "../../classes/appartment", "../component-selectors", "../../constants"], function(exports_1, context_1) {
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
    var core_1, appartment_1, component_selectors_1, constants_1;
    var AppDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appartment_1_1) {
                appartment_1 = appartment_1_1;
            },
            function (component_selectors_1_1) {
                component_selectors_1 = component_selectors_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            AppDetailComponent = (function () {
                function AppDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', appartment_1.Appartment)
                ], AppDetailComponent.prototype, "appartment", void 0);
                AppDetailComponent = __decorate([
                    core_1.Component({
                        selector: component_selectors_1.ComponentSelectors.APPARTMENT_DETAIL,
                        templateUrl: constants_1.Constants.TEMPLATE_URL_PATH + "appartment-detail.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppDetailComponent);
                return AppDetailComponent;
            }());
            exports_1("AppDetailComponent", AppDetailComponent);
        }
    }
});
//# sourceMappingURL=appartment-detail.component.js.map