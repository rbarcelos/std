"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NotasCadastroComponent = (function () {
    function NotasCadastroComponent() {
    }
    NotasCadastroComponent.prototype.ngOnInit = function () {
        //        $.getScript('app/dashboard/cadastro/assets/js/jquery-1.11.1.min.js');
        //        $.getScript('app/dashboard/cadastro/assets/bootstrap/js/bootstrap.min.js');
        $.getScript('app/dashboard/cadastro/assets/js/jquery.backstretch.min.js');
        $.getScript('app/dashboard/cadastro/assets/js/retina-1.1.0.min.js');
        $.getScript('app/dashboard/cadastro/assets/js/scripts.js');
    };
    return NotasCadastroComponent;
}());
NotasCadastroComponent = __decorate([
    core_1.Component({
        selector: 'notas-cadastro-cmp',
        moduleId: module.id,
        templateUrl: 'notasCadastro.component.html',
        encapsulation: core_1.ViewEncapsulation.Emulated,
        styleUrls: ['http://fonts.googleapis.com/css?family=Roboto:400,100,300,500', 'assets/bootstrap/css/bootstrap.min.css', 'assets/font-awesome/css/font-awesome.min.css', 'assets/css/form-elements.css', 'assets/css/style.css', 'assets/css/demo.css'],
    })
], NotasCadastroComponent);
exports.NotasCadastroComponent = NotasCadastroComponent;
//# sourceMappingURL=notasCadastro.component.js.map