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
var codehighlighterdemo_1 = require("./codehighlighterdemo");
var codehighlighterdemo_routing_module_1 = require("./codehighlighterdemo-routing.module");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var tabview_1 = require("../../../components/tabview/tabview");
var CodeHighlighterDemoModule = (function () {
    function CodeHighlighterDemoModule() {
    }
    return CodeHighlighterDemoModule;
}());
CodeHighlighterDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            codehighlighterdemo_routing_module_1.CodeHighlighterDemoRoutingModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            codehighlighterdemo_1.CodeHighlighterDemo
        ]
    }),
    __metadata("design:paramtypes", [])
], CodeHighlighterDemoModule);
exports.CodeHighlighterDemoModule = CodeHighlighterDemoModule;
//# sourceMappingURL=codehighlighterdemo.module.js.map