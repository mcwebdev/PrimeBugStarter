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
var selectbuttondemo_1 = require("./selectbuttondemo");
var selectbuttondemo_routing_module_1 = require("./selectbuttondemo-routing.module");
var selectbutton_1 = require("../../../components/selectbutton/selectbutton");
var button_1 = require("../../../components/button/button");
var tabview_1 = require("../../../components/tabview/tabview");
var codehighlighter_1 = require("../../../components/codehighlighter/codehighlighter");
var SelectButtonDemoModule = (function () {
    function SelectButtonDemoModule() {
    }
    return SelectButtonDemoModule;
}());
SelectButtonDemoModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            selectbuttondemo_routing_module_1.SelectButtonDemoRoutingModule,
            forms_1.FormsModule,
            selectbutton_1.SelectButtonModule,
            button_1.ButtonModule,
            tabview_1.TabViewModule,
            codehighlighter_1.CodeHighlighterModule
        ],
        declarations: [
            selectbuttondemo_1.SelectButtonDemo
        ]
    }),
    __metadata("design:paramtypes", [])
], SelectButtonDemoModule);
exports.SelectButtonDemoModule = SelectButtonDemoModule;
//# sourceMappingURL=selectbuttondemo.module.js.map