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
var forms_1 = require("@angular/forms");
var ValidationDemo = (function () {
    function ValidationDemo(fb) {
        this.fb = fb;
        this.msgs = [];
    }
    ValidationDemo.prototype.ngOnInit = function () {
        this.userform = this.fb.group({
            'firstname': new forms_1.FormControl('', forms_1.Validators.required),
            'lastname': new forms_1.FormControl('', forms_1.Validators.required),
            'password': new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.minLength(6)]),
            'description': new forms_1.FormControl(''),
            'gender': new forms_1.FormControl('', forms_1.Validators.required)
        });
        this.genders = [];
        this.genders.push({ label: 'Select Gender', value: '' });
        this.genders.push({ label: 'Male', value: 'Male' });
        this.genders.push({ label: 'Female', value: 'Female' });
    };
    ValidationDemo.prototype.onSubmit = function (value) {
        this.submitted = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Form Submitted' });
    };
    Object.defineProperty(ValidationDemo.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.userform.value); },
        enumerable: true,
        configurable: true
    });
    return ValidationDemo;
}());
ValidationDemo = __decorate([
    core_1.Component({
        templateUrl: 'showcase/demo/validation/validationdemo.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ValidationDemo);
exports.ValidationDemo = ValidationDemo;
//# sourceMappingURL=validationdemo.js.map