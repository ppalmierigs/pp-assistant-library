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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW50LWNvcmUtYmFzZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wcC1hc3Npc3RhbnQtbGlicmFyeS9zcmMvbGliL2NvbXBvbmVudHMvZ2VuZXJpY3MvYXNzaXN0YW50LWNvcmUtYmFzZS9hc3Npc3RhbnQtY29yZS1iYXNlLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BwLWFzc2lzdGFudC1saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9nZW5lcmljcy9hc3Npc3RhbnQtY29yZS1iYXNlL2Fzc2lzdGFudC1jb3JlLWJhc2UuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFPL0UsTUFBTSxPQUFPLDBCQUEwQjtJQUx2QztRQU1FLGdEQUFnRDtRQUN2QyxZQUFPLEdBQVksS0FBSyxDQUFBO1FBRWpDLGlEQUFpRDtRQUN4QyxhQUFRLEdBQVksS0FBSyxDQUFBO1FBRWxDLGtOQUFrTjtRQUN6TSxTQUFJLEdBQVcsU0FBUyxDQUFBO1FBRWpDLDBEQUEwRDtRQUNqRCxTQUFJLEdBQVcsR0FBRyxDQUFBO1FBRTNCLG1FQUFtRTtRQUMxRCxXQUFNLEdBQVcsR0FBRyxDQUFBO1FBRTdCLDZEQUE2RDtRQUNwRCxZQUFPLEdBQVcsR0FBRyxDQUFBO1FBRTlCLHVEQUF1RDtRQUM5QyxhQUFRLEdBQVcsQ0FBQyxDQUFBO1FBRTdCLHVDQUF1QztRQUM5QixTQUFJLEdBQVcsRUFBRSxDQUFBO1FBRTFCLHFEQUFxRDtRQUM1QyxZQUFPLEdBQVcsRUFBRSxDQUFBO1FBRTdCLDZEQUE2RDtRQUNwRCxnQkFBVyxHQUFXLEVBQUUsQ0FBQTtRQUVqQywrREFBK0Q7UUFDdEQsaUJBQVksR0FBVyxFQUFF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IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuIFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWFzc2lzdGFudC1jb3JlLWJhc2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vYXNzaXN0YW50LWNvcmUtYmFzZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Fzc2lzdGFudC1jb3JlLWJhc2UuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBc3Npc3RhbnRDb3JlQmFzZUNvbXBvbmVudCAge1xuICAvLyBsb2FkaW5nOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gZGlzYWJsZWQ6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gdHlwZTogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3ByaW1hcnkgfCBwcmltYXJ5MiB8IHByaW1hcnkzIHwgc2Vjb25kYXJ5IHwgc2Vjb25kYXJ5MiB8IHNlY29uZGFyeTMgfCB0aGlyZCB8IHRoaXJkMiB8IHRoaXJkMyB8IGFsZXJ0IHwgYWxlcnQyIHwgYWxlcnQzIHwgY29uZmlybSB8IGNvbmZpcm0yIHwgY29uZmlybTMgfCBvdGhlciB8IG90aGVyMiB8IG90aGVyMyc7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyA9ICdwcmltYXJ5J1xuXG4gIC8vIHNpemU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd4eHMgfCB4cyB8IHMgfCBtIHwgbCB8IHhsJztcbiAgQElucHV0KCkgc2l6ZTogc3RyaW5nID0gJ20nXG5cbiAgLy8gYm9yZGVyLXJhZGl1czogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3h4cyB8IHhzIHwgcyB8IG0gfCBsIHwgeGwnO1xuICBASW5wdXQoKSByYWRpdXM6IHN0cmluZyA9ICdtJ1xuXG4gIC8vIHBhZGRpbmc6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd4eHMgfCB4cyB8IHMgfCBtIHwgbCB8IHhsJztcbiAgQElucHV0KCkgcGFkZGluZzogc3RyaW5nID0gJ20nXG5cbiAgLy8gcm90YXRpb246IGFjY2VwdGVkIHZhbHVlcyBsaWtlICcwIHwgOTAgfCAxODAgfCAyNzAnO1xuICBASW5wdXQoKSByb3RhdGlvbjogbnVtYmVyID0gMFxuXG4gIC8vIGljb246IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdwaS1jb2cnO1xuICBASW5wdXQoKSBpY29uOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIHRvb2x0aXA6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdteSB0b29sdGlwIHN0cmluZyc7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IHN0cmluZyA9ICcnXG5cbiAgLy8gcGxhY2Vob2xkZXI6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdteSBwbGFjZWhvbGRlciBzdHJpbmcnO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJydcblxuICAvLyBhdXRvY29tcGxldGU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdteSBhdXRvY29tcGxldGUgc3RyaW5nJztcbiAgQElucHV0KCkgYXV0b2NvbXBsZXRlOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIGNvbnRyb2w6IGFjY2VwdGVkIGZvcm0tY29udHJvbDtcbiAgQElucHV0KCkgY29udHJvbCE6IGFueVxuXG4gIC8vIGtpbmQ6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0ZXh0IHwgcGFzc3dvcmQnO1xuICBASW5wdXQoKSBraW5kOiBzdHJpbmcgPSAndGV4dCdcblxuICAvLyByZXF1aXJlZDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIHJlcXVpcmVkOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBrZXk6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdteSBrZXkgc3RyaW5nJztcbiAgQElucHV0KCkga2V5OiBzdHJpbmcgPSAnJ1xuXG4gIC8vIGxhYmVsOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAnbXkgbGFiZWwgc3RyaW5nJztcbiAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9ICcnXG5cbiAgLy8gbGFiZWxTaXplOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAneHhzIHwgeHMgfCBzIHwgbSB8IGwgfCB4bCc7XG4gIEBJbnB1dCgpIGxhYmVsU2l6ZTogc3RyaW5nID0gJ20nXG5cbiAgLy8gaW5wdXRTaXplOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAneHhzIHwgeHMgfCBzIHwgbSB8IGwgfCB4bCc7XG4gIEBJbnB1dCgpIGlucHV0U2l6ZTogc3RyaW5nID0gJ20nXG5cbiAgLy8gdGl0bGU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdteSB0aXRsZSBzdHJpbmcnO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gJydcblxuICAvLyB0aXRsZSBzaXplOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAneHhzIHwgeHMgfCBzIHwgbSB8IGwgfCB4bCc7XG4gIEBJbnB1dCgpIHRpdGxlU2l6ZTogc3RyaW5nID0gJ20nXG5cbiAgLy8gZGVzY3JpcHRpb246IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdteSBkZXNjcmlwdGlvbiBzdHJpbmcnO1xuICBASW5wdXQoKSBkZXNjcmlwdGlvbjogc3RyaW5nID0gJydcblxuICAvLyBkZXNjcmlwdGlvbiBzaXplOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAneHhzIHwgeHMgfCBzIHwgbSB8IGwgfCB4bCc7XG4gIEBJbnB1dCgpIGRlc2NyaXB0aW9uU2l6ZTogc3RyaW5nID0gJ20nXG5cbiAgLy8gZm9udCBjb2xvcjogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3ByaW1hcnkgfCBzZWNvbmRhcnkgfCB0aGlyZCB8IGFsZXJ0IHwgY29uZmlybSB8IG90aGVyIHwgdGV4dDEgfCB0ZXh0MiB8IHRleHQzIHwgdGV4dDQnO1xuICBASW5wdXQoKSBmb250Q29sb3I6IHN0cmluZyA9ICcnXG5cbiAgLy8gZm9udCBzaXplOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAneHhzIHwgeHMgfCBzIHwgbSB8IGwgfCB4bCc7XG4gIEBJbnB1dCgpIGZvbnRTaXplOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIHVwcGVyY2FzZTogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIHVwcGVyY2FzZTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gYm9sZDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGJvbGQ6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIGNvbmNlYWw6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBjb25jZWFsOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBpMThuTGFiZWw6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdhc3Npc3RhbnQubmcuY29tbW9uLmxvZ2luJztcbiAgQElucHV0KCkgaTE4bkxhYmVsOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIHdyYXA6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSB3cmFwOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBjb250ZW50QWxpZ246IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBjb250ZW50QWxpZ246IHN0cmluZyA9ICdsZWZ0J1xuXG4gIC8vIGNvbmNlYWw6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBjbGlja2FibGU6IGJvb2xlYW4gPSBmYWxzZVxuXG4gIC8vIHdyYXA6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBoaWRlQm9keVNpZGVQYWRkaW5nOiBib29sZWFuID0gZmFsc2VcblxuICAvLyB3cmFwOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgaGlkZUJvZHlWUGFkZGluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gZm9udCBzaXplOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAneHhzIHwgeHMgfCBzIHwgbSB8IGwgfCB4bCB8IHh4bCc7XG4gIEBJbnB1dCgpIGxlZnRTaXplOiBzdHJpbmcgPSAnbSdcblxuICAvLyB2ZXJ0aWNhbEV4Y2VzczogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJzEwMHB4JztcbiAgQElucHV0KCkgdmVydGljYWxFeGNlc3M6IHN0cmluZyA9ICcnXG5cbiAgLy8gZWxsaXBzaXM6IGFjY2VwdGVkIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGVsbGlwc2lzOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBtYXhXaWR0aDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJzM3MHB4JztcbiAgQElucHV0KCkgbWF4V2lkdGg6IHN0cmluZyA9ICcnXG5cbiAgLy8gbWluV2lkdGg6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICcxMzBweCc7XG4gIEBJbnB1dCgpIG1pbldpZHRoOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIGlzTG9hZGluZzogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IHRydWVcblxuICAvLyBkaXJlY3Rpb246IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdyb3cgfCBjb2x1bW4nO1xuICBASW5wdXQoKSBpdGVtRGlyZWN0aW9uOiBzdHJpbmcgPSAnJ1xuXG4gIC8vIGJvcmRlcjogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ3RydWUgfCBmYWxzZSc7XG4gIEBJbnB1dCgpIGJvcmRlcjogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gZ3JvdXBOYW1lOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAnbXlSYWRpb0J1dHRvbkdyb3VwJztcbiAgQElucHV0KCkgZ3JvdXBOYW1lOiBzdHJpbmcgPSAnYXNzaXN0YW50SW5wdXRHcm91cCdcblxuICAvLyBsYWJlbFNpZGU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICdsZWZ0IHwgcmlnaHQnIHRvIGludmVydCBsYWJlbCBvcmRlcjtcbiAgQElucHV0KCkgbGFiZWxTaWRlOiBzdHJpbmcgPSAncmlnaHQnXG5cbiAgLy8gY2FuTWluaW1pemU6IGFjY2VwdGVkIHZhbHVlcyBsaWtlICd0cnVlIHwgZmFsc2UnO1xuICBASW5wdXQoKSBjYW5NaW5pbWl6ZTogYm9vbGVhbiA9IGZhbHNlXG5cbiAgLy8gbm9EYXRhOiBhY2NlcHRlZCB2YWx1ZXMgbGlrZSAndHJ1ZSB8IGZhbHNlJztcbiAgQElucHV0KCkgbm9EYXRhOiBib29sZWFuID0gZmFsc2VcblxuICAvLyBub0RhdGFMYWJlbDogYWNjZXB0ZWQgdmFsdWVzIGxpa2UgJ215IG5vIGRhdGEgbGFiZWwnO1xuICBASW5wdXQoKSBub0RhdGFMYWJlbDogc3RyaW5nID0gJydcblxuICBAT3V0cHV0KCkgY2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBAT3V0cHV0KCkgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXI+KClcblxufVxuIiwiIl19