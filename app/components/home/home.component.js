System.register(["angular2/core", "../component-selectors", "../../constants", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, component_selectors_1, constants_1, router_1;
    var HomeComponent;
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
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(_element) {
                    this._element = _element;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    $(this._element.nativeElement).find(".parallax").parallax();
                    this._slider = $(this._element.nativeElement).find(".slider");
                    this._slider.scrollspy({
                        min: this._slider.offset().top - 150,
                        onEnter: function () {
                            if (!_this._isInitialized) {
                                _this._slider.slider({ height: "100%", interval: 4000, transition: 750 });
                                _this._isInitialized = true;
                            }
                        }
                    });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: component_selectors_1.ComponentSelectors.HOME,
                        templateUrl: constants_1.Constants.TEMPLATE_URL_PATH + "home.component.html",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.component.js.map