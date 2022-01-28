(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
  typeof define === 'function' && define.amd ? define('pp-assistant-library', ['exports', '@angular/core', '@angular/common'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["pp-assistant-library"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, common) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    }
    n["default"] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

  var PpAssistantLibraryComponent = /** @class */ (function () {
      function PpAssistantLibraryComponent() {
      }
      PpAssistantLibraryComponent.prototype.ngOnInit = function () {
      };
      return PpAssistantLibraryComponent;
  }());
  PpAssistantLibraryComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PpAssistantLibraryComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  PpAssistantLibraryComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PpAssistantLibraryComponent, selector: "lib-pp-assistant-library", ngImport: i0__namespace, template: "\n    <p>\n      pp-assistant-library works!\n    </p>\n  ", isInline: true });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PpAssistantLibraryComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-pp-assistant-library',
                      template: "\n    <p>\n      pp-assistant-library works!\n    </p>\n  ",
                      styles: []
                  }]
          }], ctorParameters: function () { return []; } });

  var PpAssistantLibraryModule = /** @class */ (function () {
      function PpAssistantLibraryModule() {
      }
      return PpAssistantLibraryModule;
  }());
  PpAssistantLibraryModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PpAssistantLibraryModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  PpAssistantLibraryModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PpAssistantLibraryModule, declarations: [PpAssistantLibraryComponent], exports: [PpAssistantLibraryComponent] });
  PpAssistantLibraryModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PpAssistantLibraryModule, imports: [[]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: PpAssistantLibraryModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [
                          PpAssistantLibraryComponent,
                      ],
                      imports: [],
                      exports: [
                          PpAssistantLibraryComponent
                      ]
                  }]
          }] });

  var AssistantIconComponent = /** @class */ (function () {
      function AssistantIconComponent() {
      }
      AssistantIconComponent.prototype.ngOnInit = function () {
      };
      return AssistantIconComponent;
  }());
  AssistantIconComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  AssistantIconComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantIconComponent, selector: "lib-assistant-icon", ngImport: i0__namespace, template: "<span>\n    <i class=\"pi pi-circle\" style=\"color: red;\"></i>\n</span>", styles: [""] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-assistant-icon',
                      templateUrl: './assistant-icon.component.html',
                      styleUrls: ['./assistant-icon.component.css']
                  }]
          }], ctorParameters: function () { return []; } });

  var AssistantIconModule = /** @class */ (function () {
      function AssistantIconModule() {
      }
      return AssistantIconModule;
  }());
  AssistantIconModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  AssistantIconModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconModule, declarations: [AssistantIconComponent], imports: [common.CommonModule], exports: [AssistantIconComponent] });
  AssistantIconModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconModule, imports: [[
              common.CommonModule
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [AssistantIconComponent],
                      imports: [
                          common.CommonModule
                      ],
                      exports: [AssistantIconComponent]
                  }]
          }] });

  /*
   * Public API Surface of pp-assistant-library
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.AssistantIconComponent = AssistantIconComponent;
  exports.AssistantIconModule = AssistantIconModule;
  exports.PpAssistantLibraryComponent = PpAssistantLibraryComponent;
  exports.PpAssistantLibraryModule = PpAssistantLibraryModule;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pp-assistant-library.umd.js.map
