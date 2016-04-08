System.register(["angular2/core", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var AppartmentsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppartmentsService = (function () {
                function AppartmentsService(http) {
                    this.http = http;
                }
                AppartmentsService.prototype.getAppartments = function () {
                    var _this = this;
                    // return this.http.get("http://apiarendator.azurewebsites.net/api/Apartment/GetApartments?direction=1&startId=")
                    return this.http.get("http://flimsapi-denisp.rhcloud.com/api/films")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (data) { _this.data = data; }, function (err) { return console.error(err); }, function () { return console.log(_this.data); });
                };
                AppartmentsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppartmentsService);
                return AppartmentsService;
            }());
            exports_1("AppartmentsService", AppartmentsService);
        }
    }
});
//# sourceMappingURL=appartments.service.js.map