(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('@angular/platform-browser'), require('@angular/platform-browser/animations'), require('primeng/checkbox')) :
  typeof define === 'function' && define.amd ? define('pp-assistant-library', ['exports', '@angular/core', '@angular/common', '@angular/forms', '@angular/platform-browser', '@angular/platform-browser/animations', 'primeng/checkbox'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["pp-assistant-library"] = {}, global.ng.core, global.ng.common, global.ng.forms, global.ng.platformBrowser, global.ng.platformBrowser.animations, global["primeng/checkbox"]));
})(this, (function (exports, i0, i3, forms, platformBrowser, animations, i1) { 'use strict';

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
  var i3__namespace = /*#__PURE__*/_interopNamespace(i3);
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

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
                          PpAssistantLibraryComponent
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
  AssistantIconModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconModule, declarations: [AssistantIconComponent], imports: [i3.CommonModule], exports: [AssistantIconComponent] });
  AssistantIconModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconModule, imports: [[
              i3.CommonModule
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantIconModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [AssistantIconComponent],
                      imports: [
                          i3.CommonModule
                      ],
                      exports: [AssistantIconComponent]
                  }]
          }] });

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise */
  var extendStatics = function (d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b)
              if (Object.prototype.hasOwnProperty.call(b, p))
                  d[p] = b[p]; };
      return extendStatics(d, b);
  };
  function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign = function () {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p))
                      t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };
  function __rest(s, e) {
      var t = {};
      for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                  t[p[i]] = s[p[i]];
          }
      return t;
  }
  function __decorate(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target, key, desc);
      else
          for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                  r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
  }
  function __param(paramIndex, decorator) {
      return function (target, key) { decorator(target, key, paramIndex); };
  }
  function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
  }
  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try {
              step(generator.next(value));
          }
          catch (e) {
              reject(e);
          } }
          function rejected(value) { try {
              step(generator["throw"](value));
          }
          catch (e) {
              reject(e);
          } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }
  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function () { if (t[0] & 1)
              throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f)
              throw new TypeError("Generator is already executing.");
          while (_)
              try {
                  if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                      return t;
                  if (y = 0, t)
                      op = [op[0] & 2, t.value];
                  switch (op[0]) {
                      case 0:
                      case 1:
                          t = op;
                          break;
                      case 4:
                          _.label++;
                          return { value: op[1], done: false };
                      case 5:
                          _.label++;
                          y = op[1];
                          op = [0];
                          continue;
                      case 7:
                          op = _.ops.pop();
                          _.trys.pop();
                          continue;
                      default:
                          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                              _ = 0;
                              continue;
                          }
                          if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                              _.label = op[1];
                              break;
                          }
                          if (op[0] === 6 && _.label < t[1]) {
                              _.label = t[1];
                              t = op;
                              break;
                          }
                          if (t && _.label < t[2]) {
                              _.label = t[2];
                              _.ops.push(op);
                              break;
                          }
                          if (t[2])
                              _.ops.pop();
                          _.trys.pop();
                          continue;
                  }
                  op = body.call(thisArg, _);
              }
              catch (e) {
                  op = [6, e];
                  y = 0;
              }
              finally {
                  f = t = 0;
              }
          if (op[0] & 5)
              throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
      }
  }
  var __createBinding = Object.create ? (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
  }) : (function (o, m, k, k2) {
      if (k2 === undefined)
          k2 = k;
      o[k2] = m[k];
  });
  function __exportStar(m, o) {
      for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding(o, m, p);
  }
  function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
          return m.call(o);
      if (o && typeof o.length === "number")
          return {
              next: function () {
                  if (o && i >= o.length)
                      o = void 0;
                  return { value: o && o[i++], done: !o };
              }
          };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
          return o;
      var i = m.call(o), r, ar = [], e;
      try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
      }
      catch (error) {
          e = { error: error };
      }
      finally {
          try {
              if (r && !r.done && (m = i["return"]))
                  m.call(i);
          }
          finally {
              if (e)
                  throw e.error;
          }
      }
      return ar;
  }
  /** @deprecated */
  function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read(arguments[i]));
      return ar;
  }
  /** @deprecated */
  function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
      return r;
  }
  function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                  if (!ar)
                      ar = Array.prototype.slice.call(from, 0, i);
                  ar[i] = from[i];
              }
          }
      return to.concat(ar || Array.prototype.slice.call(from));
  }
  function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
  }
  function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
      function verb(n) { if (g[n])
          i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
      function resume(n, v) { try {
          step(g[n](v));
      }
      catch (e) {
          settle(q[0][3], e);
      } }
      function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
      function fulfill(value) { resume("next", value); }
      function reject(value) { resume("throw", value); }
      function settle(f, v) { if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]); }
  }
  function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
      function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
  }
  function __asyncValues(o) {
      if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
      function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
      function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
  }
  function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
      }
      else {
          cooked.raw = raw;
      }
      return cooked;
  }
  ;
  var __setModuleDefault = Object.create ? (function (o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
  }) : function (o, v) {
      o["default"] = v;
  };
  function __importStar(mod) {
      if (mod && mod.__esModule)
          return mod;
      var result = {};
      if (mod != null)
          for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                  __createBinding(result, mod, k);
      __setModuleDefault(result, mod);
      return result;
  }
  function __importDefault(mod) {
      return (mod && mod.__esModule) ? mod : { default: mod };
  }
  function __classPrivateFieldGet(receiver, state, kind, f) {
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a getter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot read private member from an object whose class did not declare it");
      return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
  }
  function __classPrivateFieldSet(receiver, state, value, kind, f) {
      if (kind === "m")
          throw new TypeError("Private method is not writable");
      if (kind === "a" && !f)
          throw new TypeError("Private accessor was defined without a setter");
      if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
          throw new TypeError("Cannot write private member to an object whose class did not declare it");
      return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
  }

  var AssistantCoreBaseComponent = /** @class */ (function () {
      function AssistantCoreBaseComponent() {
          // loading: accepted values like 'true | false';
          this.loading = false;
          // disabled: accepted values like 'true | false';
          this.disabled = false;
          // type: accepted values like 'primary | primary2 | primary3 | secondary | secondary2 | secondary3 | third | third2 | third3 | alert | alert2 | alert3 | confirm | confirm2 | confirm3 | other | other2 | other3';
          this.type = 'primary';
          // size: accepted values like 'xxs | xs | s | m | l | xl';
          this.size = 'm';
          // border-radius: accepted values like 'xxs | xs | s | m | l | xl';
          this.radius = 'm';
          // padding: accepted values like 'xxs | xs | s | m | l | xl';
          this.padding = 'm';
          // rotation: accepted values like '0 | 90 | 180 | 270';
          this.rotation = 0;
          // icon: accepted values like 'pi-cog';
          this.icon = '';
          // tooltip: accepted values like 'my tooltip string';
          this.tooltip = '';
          // placeholder: accepted values like 'my placeholder string';
          this.placeholder = '';
          // autocomplete: accepted values like 'my autocomplete string';
          this.autocomplete = '';
          // kind: accepted values like 'text | password';
          this.kind = 'text';
          // required: accepted values like 'true | false';
          this.required = false;
          // key: accepted values like 'my key string';
          this.key = '';
          // label: accepted values like 'my label string';
          this.label = '';
          // labelSize: accepted values like 'xxs | xs | s | m | l | xl';
          this.labelSize = 'm';
          // inputSize: accepted values like 'xxs | xs | s | m | l | xl';
          this.inputSize = 'm';
          // title: accepted values like 'my title string';
          this.title = '';
          // title size: accepted values like 'xxs | xs | s | m | l | xl';
          this.titleSize = 'm';
          // description: accepted values like 'my description string';
          this.description = '';
          // description size: accepted values like 'xxs | xs | s | m | l | xl';
          this.descriptionSize = 'm';
          // font color: accepted values like 'primary | secondary | third | alert | confirm | other | text1 | text2 | text3 | text4';
          this.fontColor = '';
          // font size: accepted values like 'xxs | xs | s | m | l | xl';
          this.fontSize = '';
          // uppercase: accepted values like 'true | false';
          this.uppercase = false;
          // bold: accepted values like 'true | false';
          this.bold = false;
          // conceal: accepted values like 'true | false';
          this.conceal = false;
          // i18nLabel: accepted values like 'assistant.ng.common.login';
          this.i18nLabel = '';
          // wrap: accepted values like 'true | false';
          this.wrap = false;
          // contentAlign: accepted values like 'true | false';
          this.contentAlign = 'left';
          // conceal: accepted values like 'true | false';
          this.clickable = false;
          // wrap: accepted values like 'true | false';
          this.hideBodySidePadding = false;
          // wrap: accepted values like 'true | false';
          this.hideBodyVPadding = false;
          // font size: accepted values like 'xxs | xs | s | m | l | xl | xxl';
          this.leftSize = 'm';
          // verticalExcess: accepted values like '100px';
          this.verticalExcess = '';
          // ellipsis: accepted like 'true | false';
          this.ellipsis = false;
          // maxWidth: accepted values like '370px';
          this.maxWidth = '';
          // minWidth: accepted values like '130px';
          this.minWidth = '';
          // isLoading: accepted values like 'true | false';
          this.isLoading = true;
          // direction: accepted values like 'row | column';
          this.itemDirection = '';
          // border: accepted values like 'true | false';
          this.border = false;
          // groupName: accepted values like 'myRadioButtonGroup';
          this.groupName = 'assistantInputGroup';
          // labelSide: accepted values like 'left | right' to invert label order;
          this.labelSide = 'right';
          // canMinimize: accepted values like 'true | false';
          this.canMinimize = false;
          // noData: accepted values like 'true | false';
          this.noData = false;
          // noDataLabel: accepted values like 'my no data label';
          this.noDataLabel = '';
          this.click = new i0.EventEmitter();
          this.change = new i0.EventEmitter();
      }
      return AssistantCoreBaseComponent;
  }());
  AssistantCoreBaseComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantCoreBaseComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  AssistantCoreBaseComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantCoreBaseComponent, selector: "lib-assistant-core-base", inputs: { loading: "loading", disabled: "disabled", type: "type", size: "size", radius: "radius", padding: "padding", rotation: "rotation", icon: "icon", tooltip: "tooltip", placeholder: "placeholder", autocomplete: "autocomplete", control: "control", kind: "kind", required: "required", key: "key", label: "label", labelSize: "labelSize", inputSize: "inputSize", title: "title", titleSize: "titleSize", description: "description", descriptionSize: "descriptionSize", fontColor: "fontColor", fontSize: "fontSize", uppercase: "uppercase", bold: "bold", conceal: "conceal", i18nLabel: "i18nLabel", wrap: "wrap", contentAlign: "contentAlign", clickable: "clickable", hideBodySidePadding: "hideBodySidePadding", hideBodyVPadding: "hideBodyVPadding", leftSize: "leftSize", verticalExcess: "verticalExcess", ellipsis: "ellipsis", maxWidth: "maxWidth", minWidth: "minWidth", isLoading: "isLoading", itemDirection: "itemDirection", border: "border", groupName: "groupName", labelSide: "labelSide", canMinimize: "canMinimize", noData: "noData", noDataLabel: "noDataLabel" }, outputs: { click: "click", change: "change" }, ngImport: i0__namespace, template: "<p>assistant-core-base works!</p>\n", styles: [""] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantCoreBaseComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-assistant-core-base',
                      templateUrl: './assistant-core-base.component.html',
                      styleUrls: ['./assistant-core-base.component.scss']
                  }]
          }], propDecorators: { loading: [{
                  type: i0.Input
              }], disabled: [{
                  type: i0.Input
              }], type: [{
                  type: i0.Input
              }], size: [{
                  type: i0.Input
              }], radius: [{
                  type: i0.Input
              }], padding: [{
                  type: i0.Input
              }], rotation: [{
                  type: i0.Input
              }], icon: [{
                  type: i0.Input
              }], tooltip: [{
                  type: i0.Input
              }], placeholder: [{
                  type: i0.Input
              }], autocomplete: [{
                  type: i0.Input
              }], control: [{
                  type: i0.Input
              }], kind: [{
                  type: i0.Input
              }], required: [{
                  type: i0.Input
              }], key: [{
                  type: i0.Input
              }], label: [{
                  type: i0.Input
              }], labelSize: [{
                  type: i0.Input
              }], inputSize: [{
                  type: i0.Input
              }], title: [{
                  type: i0.Input
              }], titleSize: [{
                  type: i0.Input
              }], description: [{
                  type: i0.Input
              }], descriptionSize: [{
                  type: i0.Input
              }], fontColor: [{
                  type: i0.Input
              }], fontSize: [{
                  type: i0.Input
              }], uppercase: [{
                  type: i0.Input
              }], bold: [{
                  type: i0.Input
              }], conceal: [{
                  type: i0.Input
              }], i18nLabel: [{
                  type: i0.Input
              }], wrap: [{
                  type: i0.Input
              }], contentAlign: [{
                  type: i0.Input
              }], clickable: [{
                  type: i0.Input
              }], hideBodySidePadding: [{
                  type: i0.Input
              }], hideBodyVPadding: [{
                  type: i0.Input
              }], leftSize: [{
                  type: i0.Input
              }], verticalExcess: [{
                  type: i0.Input
              }], ellipsis: [{
                  type: i0.Input
              }], maxWidth: [{
                  type: i0.Input
              }], minWidth: [{
                  type: i0.Input
              }], isLoading: [{
                  type: i0.Input
              }], itemDirection: [{
                  type: i0.Input
              }], border: [{
                  type: i0.Input
              }], groupName: [{
                  type: i0.Input
              }], labelSide: [{
                  type: i0.Input
              }], canMinimize: [{
                  type: i0.Input
              }], noData: [{
                  type: i0.Input
              }], noDataLabel: [{
                  type: i0.Input
              }], click: [{
                  type: i0.Output
              }], change: [{
                  type: i0.Output
              }] } });

  var AssistantSpacerComponent = /** @class */ (function (_super) {
      __extends(AssistantSpacerComponent, _super);
      function AssistantSpacerComponent() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return AssistantSpacerComponent;
  }(AssistantCoreBaseComponent));
  AssistantSpacerComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantSpacerComponent, deps: null, target: i0__namespace.ɵɵFactoryTarget.Component });
  AssistantSpacerComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantSpacerComponent, selector: "lib-assistant-spacer", usesInheritance: true, ngImport: i0__namespace, template: "<span class=\"assistant-spacer\">\n    <span class=\"assistant-s-{{ size }}\"></span>\n </span>\n ", styles: [":host ::ng-deep .assistant-spacer .assistant-s-xxs,:host ::ng-deep .assistant-spacer .assistant-s-xs,:host ::ng-deep .assistant-spacer .assistant-s-s,:host ::ng-deep .assistant-spacer .assistant-s-m,:host ::ng-deep .assistant-spacer .assistant-s-l,:host ::ng-deep .assistant-spacer .assistant-s-xl,:host ::ng-deep .assistant-spacer .assistant-s-xxl{display:inline-flex}:host ::ng-deep .assistant-spacer .assistant-s-xxs{min-width:3px;min-height:3px;width:3px;height:3px;max-width:3px;max-height:3px}:host ::ng-deep .assistant-spacer .assistant-s-xs{min-width:5px;min-height:5px;width:5px;height:5px;max-width:5px;max-height:5px}:host ::ng-deep .assistant-spacer .assistant-s-s{min-width:10px;min-height:10px;width:10px;height:10px;max-width:10px;max-height:10px}:host ::ng-deep .assistant-spacer .assistant-s-m{min-width:15px;min-height:15px;width:15px;height:15px;max-width:15px;max-height:15px}:host ::ng-deep .assistant-spacer .assistant-s-l{min-width:20px;min-height:20px;width:20px;height:20px;max-width:20px;max-height:20px}:host ::ng-deep .assistant-spacer .assistant-s-xl{min-width:25px;min-height:25px;width:25px;height:25px;max-width:25px;max-height:25px}:host ::ng-deep .assistant-spacer .assistant-s-xxl{min-width:30px;min-height:30px;width:30px;height:30px;max-width:30px;max-height:30px}\n"] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantSpacerComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-assistant-spacer',
                      templateUrl: './assistant-spacer.component.html',
                      styleUrls: ['./assistant-spacer.component.scss']
                  }]
          }] });

  var AssistantSpacerModule = /** @class */ (function () {
      function AssistantSpacerModule() {
      }
      return AssistantSpacerModule;
  }());
  AssistantSpacerModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantSpacerModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  AssistantSpacerModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantSpacerModule, declarations: [AssistantSpacerComponent], imports: [i3.CommonModule], exports: [AssistantSpacerComponent] });
  AssistantSpacerModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantSpacerModule, imports: [[i3.CommonModule]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantSpacerModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [AssistantSpacerComponent],
                      imports: [i3.CommonModule],
                      exports: [AssistantSpacerComponent],
                  }]
          }] });

  var AssistantCheckboxComponent = /** @class */ (function (_super) {
      __extends(AssistantCheckboxComponent, _super);
      function AssistantCheckboxComponent() {
          return _super !== null && _super.apply(this, arguments) || this;
      }
      return AssistantCheckboxComponent;
  }(AssistantCoreBaseComponent));
  AssistantCheckboxComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantCheckboxComponent, deps: null, target: i0__namespace.ɵɵFactoryTarget.Component });
  AssistantCheckboxComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantCheckboxComponent, selector: "lib-assistant-checkbox", usesInheritance: true, ngImport: i0__namespace, template: "<div class=\"assistant-checkbox\">\n    <div [ngClass]=\"{ 'assistant-cb-label-left': labelSide === 'left' }\">\n       <p-checkbox value=\"{{ key }}\" styleClass=\"assistant-cb-{{ type }} assistant-cb-size-{{ size }}\" ></p-checkbox>\n       <lib-assistant-spacer size=\"m\"></lib-assistant-spacer>\n    </div>\n </div>\n ", styles: [":host ::ng-deep .assistant-checkbox{display:flex}:host ::ng-deep .assistant-checkbox .assistant-cb-label-left{display:flex;flex-direction:row-reverse!important}:host ::ng-deep .assistant-checkbox .assistant-cb-primary .p-checkbox-box{border-radius:13px!important;border:2px solid #003b9a!important}:host ::ng-deep .assistant-checkbox .assistant-cb-primary .p-highlight{background:#003b9a!important}:host ::ng-deep .assistant-checkbox .assistant-cb-secondary .p-checkbox-box{border-radius:13px!important;border:2px solid #bacae4!important}:host ::ng-deep .assistant-checkbox .assistant-cb-secondary .p-highlight{background:#bacae4!important}:host ::ng-deep .assistant-checkbox .assistant-cb-third .p-checkbox-box{border-radius:13px!important;border:2px solid #4339f2!important}:host ::ng-deep .assistant-checkbox .assistant-cb-third .p-highlight{background:#4339f2!important}:host ::ng-deep .assistant-checkbox .assistant-cb-alert .p-checkbox-box{border-radius:13px!important;border:2px solid #ff3a29!important}:host ::ng-deep .assistant-checkbox .assistant-cb-alert .p-highlight{background:#ff3a29!important}:host ::ng-deep .assistant-checkbox .assistant-cb-confirm .p-checkbox-box{border-radius:13px!important;border:2px solid #299cff!important}:host ::ng-deep .assistant-checkbox .assistant-cb-confirm .p-highlight{background:#299cff!important}:host ::ng-deep .assistant-checkbox .assistant-cb-other .p-checkbox-box{border-radius:13px!important;border:2px solid #dad7fe!important}:host ::ng-deep .assistant-checkbox .assistant-cb-other .p-highlight{background:#dad7fe!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xxs .p-checkbox-box{padding:4px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xs .p-checkbox-box{padding:5px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-s .p-checkbox-box{padding:10px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-m .p-checkbox-box{padding:15px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-l .p-checkbox-box{padding:20px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xl .p-checkbox-box{padding:25px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xxl .p-checkbox-box{padding:30px!important}\n"], components: [{ type: i1__namespace.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: AssistantSpacerComponent, selector: "lib-assistant-spacer" }], directives: [{ type: i3__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantCheckboxComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'lib-assistant-checkbox',
                      templateUrl: './assistant-checkbox.component.html',
                      styleUrls: ['./assistant-checkbox.component.scss']
                  }]
          }] });

  var AssistantCheckboxModule = /** @class */ (function () {
      function AssistantCheckboxModule() {
      }
      return AssistantCheckboxModule;
  }());
  AssistantCheckboxModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantCheckboxModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  AssistantCheckboxModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantCheckboxModule, declarations: [AssistantCheckboxComponent], imports: [i3.CommonModule, i1.CheckboxModule, AssistantSpacerModule, forms.FormsModule, forms.ReactiveFormsModule, platformBrowser.BrowserModule, animations.BrowserAnimationsModule], exports: [AssistantCheckboxComponent] });
  AssistantCheckboxModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantCheckboxModule, imports: [[
              i3.CommonModule, i1.CheckboxModule, AssistantSpacerModule, forms.FormsModule, forms.ReactiveFormsModule, platformBrowser.BrowserModule, animations.BrowserAnimationsModule
          ]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: AssistantCheckboxModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [AssistantCheckboxComponent],
                      imports: [
                          i3.CommonModule, i1.CheckboxModule, AssistantSpacerModule, forms.FormsModule, forms.ReactiveFormsModule, platformBrowser.BrowserModule, animations.BrowserAnimationsModule
                      ],
                      exports: [AssistantCheckboxComponent]
                  }]
          }] });

  /*
   * Public API Surface of pp-assistant-library
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.AssistantCheckboxComponent = AssistantCheckboxComponent;
  exports.AssistantCheckboxModule = AssistantCheckboxModule;
  exports.AssistantIconComponent = AssistantIconComponent;
  exports.AssistantIconModule = AssistantIconModule;
  exports.AssistantSpacerComponent = AssistantSpacerComponent;
  exports.AssistantSpacerModule = AssistantSpacerModule;
  exports.PpAssistantLibraryComponent = PpAssistantLibraryComponent;
  exports.PpAssistantLibraryModule = PpAssistantLibraryModule;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=pp-assistant-library.umd.js.map
