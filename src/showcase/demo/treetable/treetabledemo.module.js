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
var forms_1 = require("@angular/forms");
var treetabledemo_1 = require("./treetabledemo");
var treetabledemo_routing_module_1 = require("./treetabledemo-routing.module");
var treetable_1 = require("../../../components/treetable/treetable");
var growl_1 = require("../../../components/growl/growl");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var TreeTableDemoModule = (function () {
    function TreeTableDemoModule() {
    }
    return TreeTableDemoModule;
}());
TreeTableDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            treetabledemo_routing_module_1.TreeTableDemoRoutingModule,
            treetable_1.TreeTableModule,
            growl_1.GrowlModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            treetabledemo_1.TreeTableDemo
        ]
    }),
    __metadata("design:paramtypes", [])
], TreeTableDemoModule);
exports.TreeTableDemoModule = TreeTableDemoModule;
//# sourceMappingURL=treetabledemo.module.js.map