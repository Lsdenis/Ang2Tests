System.register(["angular2/core", "../../services/appartments.service", "../appartment-detail/appartment-detail.component"], function(exports_1, context_1) {
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
    var core_1, appartments_service_1, appartment_detail_component_1;
    var AppartmentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (appartments_service_1_1) {
                appartments_service_1 = appartments_service_1_1;
            },
            function (appartment_detail_component_1_1) {
                appartment_detail_component_1 = appartment_detail_component_1_1;
            }],
        execute: function() {
            AppartmentsComponent = (function () {
                function AppartmentsComponent(_appService) {
                    var _this = this;
                    this._appService = _appService;
                    _appService.getAppartments().subscribe(function (data) { _this.appartments = data.Data.Items; }, function (err) { _this.error = err; });
                }
                AppartmentsComponent.prototype.onSelect = function (app) {
                    this.selectedApp = app;
                };
                AppartmentsComponent = __decorate([
                    core_1.Component({
                        selector: "appartments",
                        templateUrl: "app/components/appartments/appartments.component.html",
                        providers: [appartments_service_1.AppartmentsService],
                        directives: [appartment_detail_component_1.AppDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [appartments_service_1.AppartmentsService])
                ], AppartmentsComponent);
                return AppartmentsComponent;
            }());
            exports_1("AppartmentsComponent", AppartmentsComponent);
        }
    }
});
//# sourceMappingURL=appartments.component.js.map