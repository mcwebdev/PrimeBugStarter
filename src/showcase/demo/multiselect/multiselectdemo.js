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
var MultiSelectDemo = (function () {
    function MultiSelectDemo() {
        this.selectedCars = [];
        this.cars = [];
        this.cars.push({ label: 'Audi', value: 'Audi' });
        this.cars.push({ label: 'BMW', value: 'BMW' });
        this.cars.push({ label: 'Fiat', value: 'Fiat' });
        this.cars.push({ label: 'Ford', value: 'Ford' });
        this.cars.push({ label: 'Honda', value: 'Honda' });
        this.cars.push({ label: 'Jaguar', value: 'Jaguar' });
        this.cars.push({ label: 'Mercedes', value: 'Mercedes' });
        this.cars.push({ label: 'Renault', value: 'Renault' });
        this.cars.push({ label: 'VW', value: 'VW' });
        this.cars.push({ label: 'Volvo', value: 'Volvo' });
    }
    return MultiSelectDemo;
}());
MultiSelectDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/multiselect/multiselectdemo.html'
    }),
    __metadata("design:paramtypes", [])
], MultiSelectDemo);
exports.MultiSelectDemo = MultiSelectDemo;
//# sourceMappingURL=multiselectdemo.js.map