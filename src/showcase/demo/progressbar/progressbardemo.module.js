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
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var progressbardemo_1 = require("./progressbardemo");
var progressbardemo_routing_module_1 = require("./progressbardemo-routing.module");
var progressbar_1 = require("../../../components/progressbar/progressbar");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var ProgressBarDemoModule = (function () {
    function ProgressBarDemoModule() {
    }
    return ProgressBarDemoModule;
}());
ProgressBarDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            progressbardemo_routing_module_1.ProgressBarDemoRoutingModule,
            progressbar_1.ProgressBarModule,
            growl_1.GrowlModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            progressbardemo_1.ProgressBarDemo
        ]
    }),
    __metadata("design:paramtypes", [])
], ProgressBarDemoModule);
exports.ProgressBarDemoModule = ProgressBarDemoModule;
//# sourceMappingURL=progressbardemo.module.js.map