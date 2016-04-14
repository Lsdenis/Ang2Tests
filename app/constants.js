System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Constants;
    return {
        setters:[],
        execute: function() {
            Constants = (function () {
                function Constants() {
                }
                Constants.API_URL = "http://apiarendator.azurewebsites.net/";
                Constants.TEMPLATE_URL_PATH = "app/pages/";
                return Constants;
            }());
            exports_1("Constants", Constants);
        }
    }
});
//# sourceMappingURL=constants.js.map