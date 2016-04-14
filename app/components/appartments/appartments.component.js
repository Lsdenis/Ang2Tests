System.register(["angular2/core", "../../services/appartments.service", 'angular2/router', "../component-selectors", "../../constants"], function(exports_1, context_1) {
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
    var core_1, appartments_service_1, router_1, component_selectors_1, constants_1;
    var AppartmentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appartments_service_1_1) {
                appartments_service_1 = appartments_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component_selectors_1_1) {
                component_selectors_1 = component_selectors_1_1;
            },
            function (constants_1_1) {
                constants_1 = constants_1_1;
            }],
        execute: function() {
            AppartmentsComponent = (function () {
                function AppartmentsComponent(_router, _appService) {
                    var _this = this;
                    this._router = _router;
                    this._appService = _appService;
                    _appService.getAppartments().subscribe(function (data) { _this.appartments = data.Data.Items; }, function (err) { _this.error = err; });
                }
                AppartmentsComponent.prototype.onSelect = function (app) {
                    this.selectedApp = app;
                };
                AppartmentsComponent = __decorate([
                    core_1.Component({
                        selector: component_selectors_1.ComponentSelectors.APPARTMENTS,
                        templateUrl: constants_1.Constants.TEMPLATE_URL_PATH + "appartments.component.html",
                        providers: [appartments_service_1.AppartmentsService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, appartments_service_1.AppartmentsService])
                ], AppartmentsComponent);
                return AppartmentsComponent;
            }());
            exports_1("AppartmentsComponent", AppartmentsComponent);
        }
    }
});
//# sourceMappingURL=appartments.component.js.map