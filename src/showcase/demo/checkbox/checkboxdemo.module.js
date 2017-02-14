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
var checkboxdemo_1 = require("./checkboxdemo");
var checkboxdemo_routing_module_1 = require("./checkboxdemo-routing.module");
var checkbox_1 = require("../../../components/checkbox/checkbox");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var CheckboxDemoModule = (function () {
    function CheckboxDemoModule() {
    }
    return CheckboxDemoModule;
}());
CheckboxDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            checkboxdemo_routing_module_1.CheckboxDemoRoutingModule,
            checkbox_1.CheckboxModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            checkboxdemo_1.CheckboxDemo
        ]
    }),
    __metadata("design:paramtypes", [])
], CheckboxDemoModule);
exports.CheckboxDemoModule = CheckboxDemoModule;
//# sourceMappingURL=checkboxdemo.module.js.map