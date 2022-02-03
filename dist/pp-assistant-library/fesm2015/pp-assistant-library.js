import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import * as i5 from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as i1$1 from 'primeng/checkbox';
import { CheckboxModule } from 'primeng/checkbox';
import * as i2 from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';
import * as i1$2 from 'primeng/button';
import { ButtonModule } from 'primeng/button';

class AssistantCoreBaseComponent {
    constructor() {
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
        this.click = new EventEmitter();
        this.change = new EventEmitter();
    }
}
AssistantCoreBaseComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCoreBaseComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AssistantCoreBaseComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantCoreBaseComponent, selector: "lib-assistant-core-base", inputs: { loading: "loading", disabled: "disabled", type: "type", size: "size", radius: "radius", padding: "padding", rotation: "rotation", icon: "icon", tooltip: "tooltip", placeholder: "placeholder", autocomplete: "autocomplete", control: "control", kind: "kind", required: "required", key: "key", label: "label", labelSize: "labelSize", inputSize: "inputSize", title: "title", titleSize: "titleSize", description: "description", descriptionSize: "descriptionSize", fontColor: "fontColor", fontSize: "fontSize", uppercase: "uppercase", bold: "bold", conceal: "conceal", i18nLabel: "i18nLabel", wrap: "wrap", contentAlign: "contentAlign", clickable: "clickable", hideBodySidePadding: "hideBodySidePadding", hideBodyVPadding: "hideBodyVPadding", leftSize: "leftSize", verticalExcess: "verticalExcess", ellipsis: "ellipsis", maxWidth: "maxWidth", minWidth: "minWidth", isLoading: "isLoading", itemDirection: "itemDirection", border: "border", groupName: "groupName", labelSide: "labelSide", canMinimize: "canMinimize", noData: "noData", noDataLabel: "noDataLabel" }, outputs: { click: "click", change: "change" }, ngImport: i0, template: "", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCoreBaseComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-assistant-core-base',
                    templateUrl: './assistant-core-base.component.html',
                    styleUrls: ['./assistant-core-base.component.scss']
                }]
        }], propDecorators: { loading: [{
                type: Input
            }], disabled: [{
                type: Input
            }], type: [{
                type: Input
            }], size: [{
                type: Input
            }], radius: [{
                type: Input
            }], padding: [{
                type: Input
            }], rotation: [{
                type: Input
            }], icon: [{
                type: Input
            }], tooltip: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], autocomplete: [{
                type: Input
            }], control: [{
                type: Input
            }], kind: [{
                type: Input
            }], required: [{
                type: Input
            }], key: [{
                type: Input
            }], label: [{
                type: Input
            }], labelSize: [{
                type: Input
            }], inputSize: [{
                type: Input
            }], title: [{
                type: Input
            }], titleSize: [{
                type: Input
            }], description: [{
                type: Input
            }], descriptionSize: [{
                type: Input
            }], fontColor: [{
                type: Input
            }], fontSize: [{
                type: Input
            }], uppercase: [{
                type: Input
            }], bold: [{
                type: Input
            }], conceal: [{
                type: Input
            }], i18nLabel: [{
                type: Input
            }], wrap: [{
                type: Input
            }], contentAlign: [{
                type: Input
            }], clickable: [{
                type: Input
            }], hideBodySidePadding: [{
                type: Input
            }], hideBodyVPadding: [{
                type: Input
            }], leftSize: [{
                type: Input
            }], verticalExcess: [{
                type: Input
            }], ellipsis: [{
                type: Input
            }], maxWidth: [{
                type: Input
            }], minWidth: [{
                type: Input
            }], isLoading: [{
                type: Input
            }], itemDirection: [{
                type: Input
            }], border: [{
                type: Input
            }], groupName: [{
                type: Input
            }], labelSide: [{
                type: Input
            }], canMinimize: [{
                type: Input
            }], noData: [{
                type: Input
            }], noDataLabel: [{
                type: Input
            }], click: [{
                type: Output
            }], change: [{
                type: Output
            }] } });

class AssistantIconComponent extends AssistantCoreBaseComponent {
}
AssistantIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantIconComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AssistantIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantIconComponent, selector: "assistant-icon", usesInheritance: true, ngImport: i0, template: "<span class=\"assistant-icon\">\n    <i class=\"pi {{ icon }} assistant-i-{{ type }} assistant-i-{{ size }}\" title=\"{{ tooltip }}\"></i>\n </span>\n ", styles: [":host ::ng-deep .assistant-icon .assistant-i-primary{color:#003b9a!important}:host ::ng-deep .assistant-icon .assistant-i-secondary{color:#bacae4!important}:host ::ng-deep .assistant-icon .assistant-i-third{color:#4339f2!important}:host ::ng-deep .assistant-icon .assistant-i-alert{color:#ff3a29!important}:host ::ng-deep .assistant-icon .assistant-i-confirm{color:#299cff!important}:host ::ng-deep .assistant-icon .assistant-i-other{color:#dad7fe!important}:host ::ng-deep .assistant-icon .assistant-i-text1{color:#000!important}:host ::ng-deep .assistant-icon .assistant-i-text2{color:#cfd8ea!important}:host ::ng-deep .assistant-icon .assistant-i-text3{color:#143b9a!important}:host ::ng-deep .assistant-icon .assistant-i-text4{color:#fff!important}:host ::ng-deep .assistant-icon .assistant-i-warning{color:#ffc400!important}:host ::ng-deep .assistant-icon .assistant-i-success{color:#27fc00!important}:host ::ng-deep .assistant-icon .assistant-i-xxs{font-size:8px!important}:host ::ng-deep .assistant-icon .assistant-i-xs{font-size:9px!important}:host ::ng-deep .assistant-icon .assistant-i-s{font-size:12px!important}:host ::ng-deep .assistant-icon .assistant-i-m{font-size:14px!important}:host ::ng-deep .assistant-icon .assistant-i-l{font-size:16px!important}:host ::ng-deep .assistant-icon .assistant-i-xl{font-size:20px!important}:host ::ng-deep .assistant-icon .assistant-i-xxl{font-size:22px!important}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'assistant-icon',
                    templateUrl: './assistant-icon.component.html',
                    styleUrls: ['./assistant-icon.component.scss']
                }]
        }] });

class AssistantIconModule {
}
AssistantIconModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantIconModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AssistantIconModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantIconModule, declarations: [AssistantIconComponent], imports: [CommonModule], exports: [AssistantIconComponent] });
AssistantIconModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantIconModule, imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantIconModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AssistantIconComponent],
                    imports: [
                        CommonModule
                    ],
                    exports: [AssistantIconComponent]
                }]
        }] });

class AssistantLabelComponent extends AssistantCoreBaseComponent {
}
AssistantLabelComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantLabelComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AssistantLabelComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantLabelComponent, selector: "assistant-label", usesInheritance: true, ngImport: i0, template: "<span class=\"assistant-label\">\n    <span\n       class=\"assistant-l assistant-l-{{ size }} assistant-l-{{ type }}\"\n       [ngClass]=\"{\n          'assistant-l-uppercase': uppercase == true,\n          'assistant-l-bold': bold == true,\n          'assistant-l-ellipsis': ellipsis == true && maxWidth !== ''\n       }\"\n       [ngStyle]=\"{ 'max-width': maxWidth !== '' ? maxWidth : '' }\"\n    >\n       <span *ngIf=\"i18nLabel\">{{ i18nLabel | translate }}</span>\n       <span *ngIf=\"!i18nLabel && label\">{{ label }}</span>\n    </span>\n </span>\n \n", styles: [":host ::ng-deep .assistant-label .assistant-l{white-space:nowrap}:host ::ng-deep .assistant-label .assistant-l-ellipsis{display:inline-block;text-overflow:ellipsis;overflow:hidden}:host ::ng-deep .assistant-label .assistant-l-bold{font-weight:bold}:host ::ng-deep .assistant-label .assistant-l-uppercase{text-transform:uppercase}:host ::ng-deep .assistant-label .assistant-l-xxs{font-size:8px}:host ::ng-deep .assistant-label .assistant-l-xs{font-size:9px}:host ::ng-deep .assistant-label .assistant-l-s{font-size:12px}:host ::ng-deep .assistant-label .assistant-l-m{font-size:14px}:host ::ng-deep .assistant-label .assistant-l-l{font-size:16px}:host ::ng-deep .assistant-label .assistant-l-xl{font-size:20px}:host ::ng-deep .assistant-label .assistant-l-xxl{font-size:22px}:host ::ng-deep .assistant-label .assistant-l-primary{color:#003b9a}:host ::ng-deep .assistant-label .assistant-l-secondary{color:#bacae4}:host ::ng-deep .assistant-label .assistant-l-third{color:#4339f2}:host ::ng-deep .assistant-label .assistant-l-alert{color:#ff3a29}:host ::ng-deep .assistant-label .assistant-l-confirm{color:#299cff}:host ::ng-deep .assistant-label .assistant-l-other{color:#dad7fe}:host ::ng-deep .assistant-label .assistant-l-text1{color:#000}:host ::ng-deep .assistant-label .assistant-l-text2{color:#cfd8ea}:host ::ng-deep .assistant-label .assistant-l-text3{color:#143b9a}:host ::ng-deep .assistant-label .assistant-l-text4{color:#fff}\n"], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], pipes: { "translate": i2.TranslatePipe } });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantLabelComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'assistant-label',
                    templateUrl: './assistant-label.component.html',
                    styleUrls: ['./assistant-label.component.scss'],
                }]
        }] });

class AssistantLabelModule {
}
AssistantLabelModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantLabelModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AssistantLabelModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantLabelModule, declarations: [AssistantLabelComponent], imports: [CommonModule, i2.TranslateModule], exports: [AssistantLabelComponent] });
AssistantLabelModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantLabelModule, imports: [[
            CommonModule,
            TranslateModule.forRoot()
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantLabelModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AssistantLabelComponent],
                    imports: [
                        CommonModule,
                        TranslateModule.forRoot()
                    ],
                    exports: [AssistantLabelComponent]
                }]
        }] });

class AssistantSpacerComponent extends AssistantCoreBaseComponent {
}
AssistantSpacerComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantSpacerComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AssistantSpacerComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantSpacerComponent, selector: "assistant-spacer", usesInheritance: true, ngImport: i0, template: "<span class=\"assistant-spacer\">\n    <span class=\"assistant-s-{{ size }}\"></span> \n </span>\n ", styles: [":host ::ng-deep .assistant-spacer .assistant-s-xxs,:host ::ng-deep .assistant-spacer .assistant-s-xs,:host ::ng-deep .assistant-spacer .assistant-s-s,:host ::ng-deep .assistant-spacer .assistant-s-m,:host ::ng-deep .assistant-spacer .assistant-s-l,:host ::ng-deep .assistant-spacer .assistant-s-xl,:host ::ng-deep .assistant-spacer .assistant-s-xxl{display:inline-flex}:host ::ng-deep .assistant-spacer .assistant-s-xxs{min-width:3px;min-height:3px;width:3px;height:3px;max-width:3px;max-height:3px}:host ::ng-deep .assistant-spacer .assistant-s-xs{min-width:5px;min-height:5px;width:5px;height:5px;max-width:5px;max-height:5px}:host ::ng-deep .assistant-spacer .assistant-s-s{min-width:10px;min-height:10px;width:10px;height:10px;max-width:10px;max-height:10px}:host ::ng-deep .assistant-spacer .assistant-s-m{min-width:15px;min-height:15px;width:15px;height:15px;max-width:15px;max-height:15px}:host ::ng-deep .assistant-spacer .assistant-s-l{min-width:20px;min-height:20px;width:20px;height:20px;max-width:20px;max-height:20px}:host ::ng-deep .assistant-spacer .assistant-s-xl{min-width:25px;min-height:25px;width:25px;height:25px;max-width:25px;max-height:25px}:host ::ng-deep .assistant-spacer .assistant-s-xxl{min-width:30px;min-height:30px;width:30px;height:30px;max-width:30px;max-height:30px}\n"] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantSpacerComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'assistant-spacer',
                    templateUrl: './assistant-spacer.component.html',
                    styleUrls: ['./assistant-spacer.component.scss']
                }]
        }] });

class AssistantSpacerModule {
}
AssistantSpacerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantSpacerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AssistantSpacerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantSpacerModule, declarations: [AssistantSpacerComponent], imports: [CommonModule], exports: [AssistantSpacerComponent] });
AssistantSpacerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantSpacerModule, imports: [[CommonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantSpacerModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AssistantSpacerComponent],
                    imports: [CommonModule],
                    exports: [AssistantSpacerComponent],
                }]
        }] });

class AssistantCheckboxComponent extends AssistantCoreBaseComponent {
}
AssistantCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AssistantCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantCheckboxComponent, selector: "assistant-checkbox", usesInheritance: true, ngImport: i0, template: "<div class=\"assistant-checkbox\">\n   <div [ngClass]=\"{ 'assistant-cb-label-left': labelSide === 'left' }\">\n      <p-checkbox value=\"{{ key }}\" styleClass=\"assistant-cb-{{ type }} assistant-cb-size-{{ size }}\" [formControl]=\"control\"></p-checkbox>\n      <assistant-spacer size=\"m\"></assistant-spacer>\n      <assistant-label size=\"{{ size }}\" label=\"{{ label }}\" type=\"{{ fontColor }}\" [uppercase]=\"uppercase\" [bold]=\"bold\"></assistant-label>\n   </div>\n</div>\n", styles: [":host ::ng-deep .assistant-checkbox{display:flex}:host ::ng-deep .assistant-checkbox .assistant-cb-label-left{display:flex;flex-direction:row-reverse!important}:host ::ng-deep .assistant-checkbox .assistant-cb-primary .p-checkbox-box{border-radius:13px!important;border:2px solid #003b9a!important}:host ::ng-deep .assistant-checkbox .assistant-cb-primary .p-highlight{background:#003b9a!important}:host ::ng-deep .assistant-checkbox .assistant-cb-secondary .p-checkbox-box{border-radius:13px!important;border:2px solid #bacae4!important}:host ::ng-deep .assistant-checkbox .assistant-cb-secondary .p-highlight{background:#bacae4!important}:host ::ng-deep .assistant-checkbox .assistant-cb-third .p-checkbox-box{border-radius:13px!important;border:2px solid #4339f2!important}:host ::ng-deep .assistant-checkbox .assistant-cb-third .p-highlight{background:#4339f2!important}:host ::ng-deep .assistant-checkbox .assistant-cb-alert .p-checkbox-box{border-radius:13px!important;border:2px solid #ff3a29!important}:host ::ng-deep .assistant-checkbox .assistant-cb-alert .p-highlight{background:#ff3a29!important}:host ::ng-deep .assistant-checkbox .assistant-cb-confirm .p-checkbox-box{border-radius:13px!important;border:2px solid #299cff!important}:host ::ng-deep .assistant-checkbox .assistant-cb-confirm .p-highlight{background:#299cff!important}:host ::ng-deep .assistant-checkbox .assistant-cb-other .p-checkbox-box{border-radius:13px!important;border:2px solid #dad7fe!important}:host ::ng-deep .assistant-checkbox .assistant-cb-other .p-highlight{background:#dad7fe!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xxs .p-checkbox-box{padding:4px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xs .p-checkbox-box{padding:5px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-s .p-checkbox-box{padding:10px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-m .p-checkbox-box{padding:15px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-l .p-checkbox-box{padding:20px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xl .p-checkbox-box{padding:25px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xxl .p-checkbox-box{padding:30px!important}\n"], components: [{ type: i1$1.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: AssistantSpacerComponent, selector: "assistant-spacer" }, { type: AssistantLabelComponent, selector: "assistant-label" }], directives: [{ type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.FormControlDirective, selector: "[formControl]", inputs: ["disabled", "formControl", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'assistant-checkbox',
                    templateUrl: './assistant-checkbox.component.html',
                    styleUrls: ['./assistant-checkbox.component.scss']
                }]
        }] });

class AssistantCheckboxModule {
}
AssistantCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AssistantCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxModule, declarations: [AssistantCheckboxComponent], imports: [CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        CheckboxModule,
        AssistantSpacerModule,
        AssistantLabelModule,
        FormsModule,
        ReactiveFormsModule], exports: [AssistantCheckboxComponent] });
AssistantCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxModule, imports: [[
            CommonModule,
            BrowserModule,
            BrowserAnimationsModule,
            CheckboxModule,
            AssistantSpacerModule,
            AssistantLabelModule,
            FormsModule,
            ReactiveFormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AssistantCheckboxComponent],
                    imports: [
                        CommonModule,
                        BrowserModule,
                        BrowserAnimationsModule,
                        CheckboxModule,
                        AssistantSpacerModule,
                        AssistantLabelModule,
                        FormsModule,
                        ReactiveFormsModule
                    ],
                    exports: [AssistantCheckboxComponent]
                }]
        }] });

class AssistantButtonComponent extends AssistantCoreBaseComponent {
}
AssistantButtonComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantButtonComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AssistantButtonComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantButtonComponent, selector: "assistant-button", usesInheritance: true, ngImport: i0, template: "<div class=\"assistant-button\">\n    <button\n       pButton\n       type=\"button\"\n       [loading]=\"loading\"\n       label=\"{{ label }}\"\n       [disabled]=\"disabled\"\n       loadingIcon=\"pi-spinner pi-spin\"\n       class=\"assistant-b-{{ type }}-btn assistant-b-{{ size }}-btn assistant-b-{{ labelSize }}-label\"\n       [ngClass]=\"{ 'assistant-b-conceal': conceal == true, 'assistant-b-bold': bold == true, 'assistant-b-uppercase': uppercase == true }\"\n       [ngStyle]=\"{ 'min-width': minWidth != '' ? minWidth : 'inherits' }\"\n    ></button>\n </div>\n ", styles: [":host ::ng-deep .assistant-button{display:inline-flex}:host ::ng-deep .assistant-button .assistant-b-conceal{opacity:.2}:host ::ng-deep .assistant-button .assistant-b-bold{font-weight:bold}:host ::ng-deep .assistant-button .assistant-b-uppercase{text-transform:uppercase}:host ::ng-deep .assistant-button .assistant-b-primary-btn{background-color:#003b9a;border-color:#003b9a}:host ::ng-deep .assistant-button .assistant-b-primary2-btn{background-color:#fff;border:2px solid #003b9a;color:#000}:host ::ng-deep .assistant-button .assistant-b-secondary-btn{background-color:#bacae4;border-color:#bacae4;color:#000}:host ::ng-deep .assistant-button .assistant-b-secondary2-btn{background-color:#fff;border:2px solid #bacae4;color:#000}:host ::ng-deep .assistant-button .assistant-b-third-btn{background-color:#4339f2;border-color:#4339f2}:host ::ng-deep .assistant-button .assistant-b-third2-btn{background-color:#fff;border:2px solid #4339f2;color:#000}:host ::ng-deep .assistant-button .assistant-b-alert-btn{background-color:#ff3a29;border-color:#ff3a29}:host ::ng-deep .assistant-button .assistant-b-alert2-btn{background-color:#fff;border:2px solid #ff3a29;color:#000}:host ::ng-deep .assistant-button .assistant-b-confirm-btn{background-color:#299cff;border-color:#299cff}:host ::ng-deep .assistant-button .assistant-b-confirm2-btn{background-color:#fff;border:2px solid #299cff;color:#000}:host ::ng-deep .assistant-button .assistant-b-other-btn{background-color:#dad7fe;border-color:#dad7fe;color:#000}:host ::ng-deep .assistant-button .assistant-b-other2-btn{background-color:#fff;border:2px solid #dad7fe;color:#000}:host ::ng-deep .assistant-button .assistant-b-xxs-label{font-size:8px!important}:host ::ng-deep .assistant-button .assistant-b-xs-label{font-size:9px!important}:host ::ng-deep .assistant-button .assistant-b-s-label{font-size:12px!important}:host ::ng-deep .assistant-button .assistant-b-m-label{font-size:14px!important}:host ::ng-deep .assistant-button .assistant-b-l-label{font-size:16px!important}:host ::ng-deep .assistant-button .assistant-b-xl-label{font-size:20px!important}\n", ":host ::ng-deep .assistant-button .assistant-b-xxs-btn{height:calc(2 * 4px + 12px);padding:4px;border-radius:9px}:host ::ng-deep .assistant-button .assistant-b-xs-btn{height:calc(2 * 5px + 15px);padding:5px;font-size:9px;border-radius:11px}:host ::ng-deep .assistant-button .assistant-b-s-btn{height:calc(2 * 10px + 18px);padding:10px;font-size:12px;border-radius:13px}:host ::ng-deep .assistant-button .assistant-b-m-btn{height:calc(2 * 15px + 20px);padding:15px;font-size:14px;border-radius:15px}:host ::ng-deep .assistant-button .assistant-b-l-btn{height:calc(2 * 20px + 20px);padding:20px;font-size:16px;border-radius:17px}:host ::ng-deep .assistant-button .assistant-b-xl-btn{height:calc(2 * 25px + 20px);padding:25px;font-size:20px;border-radius:19px}:host ::ng-deep .assistant-button .assistant-b-xxl-btn{height:calc(2 * 30px + 20px);padding:30px;font-size:22px;border-radius:17px}\n"], directives: [{ type: i1$2.ButtonDirective, selector: "[pButton]", inputs: ["iconPos", "loadingIcon", "label", "icon", "loading"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantButtonComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'assistant-button',
                    templateUrl: './assistant-button.component.html',
                    styleUrls: ['./assistant-button.component.scss', './assistant-button-size.component.scss'],
                }]
        }] });

class AssistantButtonModule {
}
AssistantButtonModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantButtonModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AssistantButtonModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantButtonModule, declarations: [AssistantButtonComponent], imports: [CommonModule, ButtonModule], exports: [AssistantButtonComponent] });
AssistantButtonModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantButtonModule, imports: [[CommonModule, ButtonModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantButtonModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AssistantButtonComponent],
                    imports: [CommonModule, ButtonModule],
                    exports: [AssistantButtonComponent]
                }]
        }] });

/*
 * Public API Surface of pp-assistant-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AssistantButtonComponent, AssistantButtonModule, AssistantCheckboxComponent, AssistantCheckboxModule, AssistantIconComponent, AssistantIconModule, AssistantLabelComponent, AssistantLabelModule, AssistantSpacerComponent, AssistantSpacerModule };
//# sourceMappingURL=pp-assistant-library.js.map
