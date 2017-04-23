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
var core_1 = require('@angular/core');
var SearchComponent = (function () {
    function SearchComponent() {
    }
    SearchComponent.prototype.ngOnInit = function () {
        //        $.getScript("app/dashboard/search/assets/js/jquery.js");
        //        $.getScript("app/dashboard/search/assets/js/underscore.js");
        //        $.getScript("app/dashboard/search/assets/js/backbone.js");
        $.getScript("assets/js/visualsearch.js");
        //        $.getScript("app/dashboard/search/assets/js/jquery-ui.js");
        //        $.getScript("app/dashboard/search/assets/js/application.js");
        var displayDatepicker = function (callback) {
            var input = $('.search_facet.is_editing input.search_facet_input');
            var removeDatepicker = function () {
                input.datepicker("destroy");
            };
            // Put a selected date into the VS autocomplete and trigger click
            var setVisualSearch = function (date) {
                removeDatepicker();
                callback([date]);
                $("ul.VS-interface:visible li.ui-menu-item a:first").click();
            };
            input.datepicker({
                dateFormat: 'yy-mm-dd',
                onSelect: setVisualSearch,
                onClose: removeDatepicker
            });
            input.datepicker('show');
        };
        vsInit({
            remainder: null,
            container: $('.visual_search'),
            query: '',
            unquotable: ['day', 'date'],
            callbacks: {
                facetMatches: function (callback) {
                    callback(['day', 'date']);
                },
                valueMatches: function (facet, searchTerm, callback) {
                    if (facet == 'day')
                        callback(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'], { preserveOrder: true });
                    else if (facet == 'date')
                        setTimeout(function () { displayDatepicker(callback); }, 0);
                }
            }
        });
    };
    SearchComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'search-cmp',
            template: '<div class="visual_search"></div>',
            styleUrls: ['http://code.jquery.com/ui/1.10.3/themes/flick/jquery-ui.css', "assets/css/visualsearch.css", "assets/css/application.css"]
        }), 
        __metadata('design:paramtypes', [])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map