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
var RedditAppComponent = (function () {
    function RedditAppComponent() {
    }
    RedditAppComponent = __decorate([
        core_1.Component({
            selector: 'reddit',
            template: "\n\t\t<form class=\"ui large form segment\">\n\t\t\t<h3 class=\"ui header\">Add a Link</h3>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"title\">Title:</label>\n\t\t\t\t<input name=\"title\">\n\t\t\t</div>\n\t\t\t<div class=\"field\">\n\t\t\t\t<label for=\"link\">Link:</label>\n\t\t\t\t<input name=\"link\">\n\t\t\t</div>\n\t\t\t<button class=\"ui positive right floated button\">otpravit</button>\n\t\t</form>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], RedditAppComponent);
    return RedditAppComponent;
}());
exports.RedditAppComponent = RedditAppComponent;
//# sourceMappingURL=component.js.map