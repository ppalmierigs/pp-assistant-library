import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class AssistantCoreBaseComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW50LWNvcmUtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcC1hc3Npc3RhbnQtbGlicmFyeS9zcmMvbGliL2Fzc2lzdGFudC1jb3JlLWJhc2UvYXNzaXN0YW50LWNvcmUtYmFzZS5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcC1hc3Npc3RhbnQtbGlicmFyeS9zcmMvbGliL2Fzc2lzdGFudC1jb3JlLWJhc2UvYXNzaXN0YW50LWNvcmUtYmFzZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU8vRSxNQUFNLE9BQU8sMEJBQTBCO0lBTHZDO1FBTUUsZ0RBQWdEO1FBQ3ZDLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFFakMsaURBQWlEO1FBQ3hDLGFBQVEsR0FBWSxLQUFLLENBQUE7UUFFbEMsa05BQWtOO1FBQ3pNLFNBQUksR0FBVyxTQUFTLENBQUE7UUFFakMsMERBQTBEO1FBQ2pELFNBQUksR0FBVyxHQUFHLENBQUE7UUFFM0IsbUVBQW1FO1FBQzFELFdBQU0sR0FBVyxHQUFHLENBQUE7UUFFN0IsNkRBQTZEO1FBQ3BELFlBQU8sR0FBVyxHQUFHLENBQUE7UUFFOUIsdURBQXVEO1FBQzlDLGFBQVEsR0FBVyxDQUFDLENBQUE7UUFFN0IsdUNBQXVDO1FBQzlCLFNBQUksR0FBVyxFQUFFLENBQUE7UUFFMUIscURBQXFEO1FBQzVDLFlBQU8sR0FBVyxFQUFFLENBQUE7UUFFN0IsNkRBQTZEO1FBQ3BELGdCQUFXLEdBQVcsRUFBRSxDQUFBO1FBRWpDLCtEQUErRDtRQUN0RCxpQkFBWSxHQUFXLEVBQUUsQ0FBQTtRQUtsQyxnREFBZ0Q7UUFDdkMsU0FBSSxHQUFXLE1BQU0sQ0FBQTtRQUU5Qixp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O2dCQUdHLElBQUk7c0JBQVosS0FBSztnQkFHRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdHLEdBQUc7c0JBQVgsS0FBSztnQkFHRyxLQUFLO3NCQUFiLEtBQUs7Z0JBR0csU0FBUztzQkFBakIsS0FBSztnQkFHRyxTQUFTO3NCQUFqQixLQUFLO2dCQUdHLEtBQUs7c0JBQWIsS0FBSztnQkFHRyxTQUFTO3NCQUFqQixLQUFLO2dCQUdHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBR0csZUFBZTtzQkFBdkIsS0FBSztnQkFHRyxTQUFTO3NCQUFqQixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0csU0FBUztzQkFBakIsS0FBSztnQkFHRyxJQUFJO3NCQUFaLEtBQUs7Z0JBR0csT0FBTztzQkFBZixLQUFLO2dCQUdHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBR0csSUFBSTtzQkFBWixLQUFLO2dCQUdHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBR0csU0FBUztzQkFBakIsS0FBSztnQkFHRyxtQkFBbUI7c0JBQTNCLEtBQUs7Z0JBR0csZ0JBQWdCO3NCQUF4QixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0csY0FBYztzQkFBdEIsS0FBSztnQkFHRyxRQUFRO3NCQUFoQixLQUFLO2dCQUdHLFFBQVE7c0JBQWhCLEtBQUs7Z0JBR0csUUFBUTtzQkFBaEIsS0FBSztnQkFHRyxTQUFTO3NCQUFqQixLQUFLO2dCQUdHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBR0csTUFBTTtzQkFBZCxLQUFLO2dCQUdHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBR0csU0FBUztzQkFBakIsS0FBSztnQkFHRyxXQUFXO3NCQUFuQixLQUFLO2dCQUdHLE1BQU07c0JBQWQsS0FBSztnQkFHRyxXQUFXO3NCQUFuQixLQUFLO2dCQUVJLEtBQUs7c0JBQWQsTUFBTTtnQkFFRyxNQUFNO3NCQUFmLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItYXNzaXN0YW50LWNvcmUtYmFzZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc3Npc3RhbnQtY29yZS1iYXNlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYXNzaXN0YW50LWNvcmUtYmFzZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFzc2lzdGFudENvcmVCYXNlQ29tcG9uZW50ICB7XG4gIC8vIGxvYWRpbmc6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBsb2FkaW5nOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBkaXNhYmxlZDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2VcblxuICAvLyB0eXBlOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAncHJpbWFyeSB8IHByaW1hcnkyIHwgcHJpbWFyeTMgfCBzZWNvbmRhcnkgfCBzZWNvbmRhcnkyIHwgc2Vjb25kYXJ5MyB8IHRoaXJkIHwgdGhpcmQyIHwgdGhpcmQzIHwgYWxlcnQgfCBhbGVydDIgfCBhbGVydDMgfCBjb25maXJtIHwgY29uZmlybTIgfCBjb25maXJtMyB8IG90aGVyIHwgb3RoZXIyIHwgb3RoZXIzJztcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nID0gJ3ByaW1hcnknXG5cbiAgLy8gc2l6ZTogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3h4cyB8IHhzIHwgcyB8IG0gfCBsIHwgeGwnO1xuICBASW5wdXQoKSBzaXplOiBzdHJpbmcgPSAnbSdcblxuICAvLyBib3JkZXItcmFkaXVzOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAneHhzIHwgeHMgfCBzIHwgbSB8IGwgfCB4bCc7XG4gIEBJbnB1dCgpIHJhZGl1czogc3RyaW5nID0gJ20nXG5cbiAgLy8gcGFkZGluZzogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3h4cyB8IHhzIHwgcyB8IG0gfCBsIHwgeGwnO1xuICBASW5wdXQoKSBwYWRkaW5nOiBzdHJpbmcgPSAnbSdcblxuICAvLyByb3RhdGlvbjogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJzAgfCA5MCB8IDE4MCB8IDI3MCc7XG4gIEBJbnB1dCgpIHJvdGF0aW9uOiBudW1iZXIgPSAwXG5cbiAgLy8gaWNvbjogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3BpLWNvZyc7XG4gIEBJbnB1dCgpIGljb246IHN0cmluZyA9ICcnXG5cbiAgLy8gdG9vbHRpcDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ215IHRvb2x0aXAgc3RyaW5nJztcbiAgQElucHV0KCkgdG9vbHRpcDogc3RyaW5nID0gJydcblxuICAvLyBwbGFjZWhvbGRlcjogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ215IHBsYWNlaG9sZGVyIHN0cmluZyc7XG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIGF1dG9jb21wbGV0ZTogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ215IGF1dG9jb21wbGV0ZSBzdHJpbmcnO1xuICBASW5wdXQoKSBhdXRvY29tcGxldGU6IHN0cmluZyA9ICcnXG5cbiAgLy8gY29udHJvbDogYWNjZXB0ZWQgZm9ybS1jb250cm9sO1xuICBASW5wdXQoKSBjb250cm9sITogYW55XG5cbiAgLy8ga2luZDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RleHQgfCBwYXNzd29yZCc7XG4gIEBJbnB1dCgpIGtpbmQ6IHN0cmluZyA9ICd0ZXh0J1xuXG4gIC8vIHJlcXVpcmVkOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgcmVxdWlyZWQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIGtleTogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ215IGtleSBzdHJpbmcnO1xuICBASW5wdXQoKSBrZXk6IHN0cmluZyA9ICcnXG5cbiAgLy8gbGFiZWw6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdteSBsYWJlbCBzdHJpbmcnO1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJydcblxuICAvLyBsYWJlbFNpemU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd4eHMgfCB4cyB8IHMgfCBtIHwgbCB8IHhsJztcbiAgQElucHV0KCkgbGFiZWxTaXplOiBzdHJpbmcgPSAnbSdcblxuICAvLyBpbnB1dFNpemU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd4eHMgfCB4cyB8IHMgfCBtIHwgbCB8IHhsJztcbiAgQElucHV0KCkgaW5wdXRTaXplOiBzdHJpbmcgPSAnbSdcblxuICAvLyB0aXRsZTogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ215IHRpdGxlIHN0cmluZyc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIHRpdGxlIHNpemU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd4eHMgfCB4cyB8IHMgfCBtIHwgbCB8IHhsJztcbiAgQElucHV0KCkgdGl0bGVTaXplOiBzdHJpbmcgPSAnbSdcblxuICAvLyBkZXNjcmlwdGlvbjogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ215IGRlc2NyaXB0aW9uIHN0cmluZyc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIGRlc2NyaXB0aW9uIHNpemU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd4eHMgfCB4cyB8IHMgfCBtIHwgbCB8IHhsJztcbiAgQElucHV0KCkgZGVzY3JpcHRpb25TaXplOiBzdHJpbmcgPSAnbSdcblxuICAvLyBmb250IGNvbG9yOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAncHJpbWFyeSB8IHNlY29uZGFyeSB8IHRoaXJkIHwgYWxlcnQgfCBjb25maXJtIHwgb3RoZXIgfCB0ZXh0MSB8IHRleHQyIHwgdGV4dDMgfCB0ZXh0NCc7XG4gIEBJbnB1dCgpIGZvbnRDb2xvcjogc3RyaW5nID0gJydcblxuICAvLyBmb250IHNpemU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd4eHMgfCB4cyB8IHMgfCBtIHwgbCB8IHhsJztcbiAgQElucHV0KCkgZm9udFNpemU6IHN0cmluZyA9ICcnXG5cbiAgLy8gdXBwZXJjYXNlOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgdXBwZXJjYXNlOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBib2xkOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgYm9sZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gY29uY2VhbDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGNvbmNlYWw6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIGkxOG5MYWJlbDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ2Fzc2lzdGFudC5uZy5jb21tb24ubG9naW4nO1xuICBASW5wdXQoKSBpMThuTGFiZWw6IHN0cmluZyA9ICcnXG5cbiAgLy8gd3JhcDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIHdyYXA6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIGNvbnRlbnRBbGlnbjogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGNvbnRlbnRBbGlnbjogc3RyaW5nID0gJ2xlZnQnXG5cbiAgLy8gY29uY2VhbDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGNsaWNrYWJsZTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gd3JhcDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGhpZGVCb2R5U2lkZVBhZGRpbmc6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIHdyYXA6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBoaWRlQm9keVZQYWRkaW5nOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBmb250IHNpemU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd4eHMgfCB4cyB8IHMgfCBtIHwgbCB8IHhsIHwgeHhsJztcbiAgQElucHV0KCkgbGVmdFNpemU6IHN0cmluZyA9ICdtJ1xuXG4gIC8vIHZlcnRpY2FsRXhjZXNzOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAnMTAwcHgnO1xuICBASW5wdXQoKSB2ZXJ0aWNhbEV4Y2Vzczogc3RyaW5nID0gJydcblxuICAvLyBlbGxpcHNpczogYWNjZXB0ZWQgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgZWxsaXBzaXM6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIG1heFdpZHRoOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAnMzcwcHgnO1xuICBASW5wdXQoKSBtYXhXaWR0aDogc3RyaW5nID0gJydcblxuICAvLyBtaW5XaWR0aDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJzEzMHB4JztcbiAgQElucHV0KCkgbWluV2lkdGg6IHN0cmluZyA9ICcnXG5cbiAgLy8gaXNMb2FkaW5nOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZVxuXG4gIC8vIGRpcmVjdGlvbjogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3JvdyB8IGNvbHVtbic7XG4gIEBJbnB1dCgpIGl0ZW1EaXJlY3Rpb246IHN0cmluZyA9ICcnXG5cbiAgLy8gYm9yZGVyOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgYm9yZGVyOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBncm91cE5hbWU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdteVJhZGlvQnV0dG9uR3JvdXAnO1xuICBASW5wdXQoKSBncm91cE5hbWU6IHN0cmluZyA9ICdhc3Npc3RhbnRJbnB1dEdyb3VwJ1xuXG4gIC8vIGxhYmVsU2lkZTogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ2xlZnQgfCByaWdodCcgdG8gaW52ZXJ0IGxhYmVsIG9yZGVyO1xuICBASW5wdXQoKSBsYWJlbFNpZGU6IHN0cmluZyA9ICdyaWdodCdcblxuICAvLyBjYW5NaW5pbWl6ZTogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGNhbk1pbmltaXplOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBub0RhdGE6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBub0RhdGE6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIG5vRGF0YUxhYmVsOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAnbXkgbm8gZGF0YSBsYWJlbCc7XG4gIEBJbnB1dCgpIG5vRGF0YUxhYmVsOiBzdHJpbmcgPSAnJ1xuXG4gIEBPdXRwdXQoKSBjbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBPdXRwdXQoKSBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlcj4oKVxuXG59XG4iLCIiXX0=