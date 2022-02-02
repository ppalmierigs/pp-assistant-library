import { Component } from '@angular/core';
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component';
import * as i0 from "@angular/core";
import * as i1 from "primeng/checkbox";
import * as i2 from "../assistant-spacer/assistant-spacer.component";
import * as i3 from "@angular/common";
export class AssistantCheckboxComponent extends AssistantCoreBaseComponent {
}
AssistantCheckboxComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxComponent, deps: null, target: i0.ɵɵFactoryTarget.Component });
AssistantCheckboxComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantCheckboxComponent, selector: "assistant-checkbox", usesInheritance: true, ngImport: i0, template: "<div class=\"assistant-checkbox\">\n    <div [ngClass]=\"{ 'assistant-cb-label-left': labelSide === 'left' }\">\n       <p-checkbox value=\"{{ key }}\" styleClass=\"assistant-cb-{{ type }} assistant-cb-size-{{ size }}\" ></p-checkbox>\n       <assistant-spacer size=\"m\"></assistant-spacer>\n    </div>\n </div> \n ", styles: [":host ::ng-deep .assistant-checkbox{display:flex}:host ::ng-deep .assistant-checkbox .assistant-cb-label-left{display:flex;flex-direction:row-reverse!important}:host ::ng-deep .assistant-checkbox .assistant-cb-primary .p-checkbox-box{border-radius:13px!important;border:2px solid #003b9a!important}:host ::ng-deep .assistant-checkbox .assistant-cb-primary .p-highlight{background:#003b9a!important}:host ::ng-deep .assistant-checkbox .assistant-cb-secondary .p-checkbox-box{border-radius:13px!important;border:2px solid #bacae4!important}:host ::ng-deep .assistant-checkbox .assistant-cb-secondary .p-highlight{background:#bacae4!important}:host ::ng-deep .assistant-checkbox .assistant-cb-third .p-checkbox-box{border-radius:13px!important;border:2px solid #4339f2!important}:host ::ng-deep .assistant-checkbox .assistant-cb-third .p-highlight{background:#4339f2!important}:host ::ng-deep .assistant-checkbox .assistant-cb-alert .p-checkbox-box{border-radius:13px!important;border:2px solid #ff3a29!important}:host ::ng-deep .assistant-checkbox .assistant-cb-alert .p-highlight{background:#ff3a29!important}:host ::ng-deep .assistant-checkbox .assistant-cb-confirm .p-checkbox-box{border-radius:13px!important;border:2px solid #299cff!important}:host ::ng-deep .assistant-checkbox .assistant-cb-confirm .p-highlight{background:#299cff!important}:host ::ng-deep .assistant-checkbox .assistant-cb-other .p-checkbox-box{border-radius:13px!important;border:2px solid #dad7fe!important}:host ::ng-deep .assistant-checkbox .assistant-cb-other .p-highlight{background:#dad7fe!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xxs .p-checkbox-box{padding:4px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xs .p-checkbox-box{padding:5px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-s .p-checkbox-box{padding:10px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-m .p-checkbox-box{padding:15px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-l .p-checkbox-box{padding:20px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xl .p-checkbox-box{padding:25px!important}:host ::ng-deep .assistant-checkbox .assistant-cb-size-xxl .p-checkbox-box{padding:30px!important}\n"], components: [{ type: i1.Checkbox, selector: "p-checkbox", inputs: ["value", "name", "disabled", "binary", "label", "ariaLabelledBy", "ariaLabel", "tabindex", "inputId", "style", "styleClass", "labelStyleClass", "formControl", "checkboxIcon", "readonly", "required", "trueValue", "falseValue"], outputs: ["onChange"] }, { type: i2.AssistantSpacerComponent, selector: "assistant-spacer" }], directives: [{ type: i3.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'assistant-checkbox',
                    templateUrl: './assistant-checkbox.component.html',
                    styleUrls: ['./assistant-checkbox.component.scss']
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW50LWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BwLWFzc2lzdGFudC1saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9nZW5lcmljcy9hc3Npc3RhbnQtY2hlY2tib3gvYXNzaXN0YW50LWNoZWNrYm94LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BwLWFzc2lzdGFudC1saWJyYXJ5L3NyYy9saWIvY29tcG9uZW50cy9nZW5lcmljcy9hc3Npc3RhbnQtY2hlY2tib3gvYXNzaXN0YW50LWNoZWNrYm94LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sc0RBQXNELENBQUM7Ozs7O0FBT2xHLE1BQU0sT0FBTywwQkFBMkIsU0FBUSwwQkFBMEI7O3dIQUE3RCwwQkFBMEI7NEdBQTFCLDBCQUEwQixpRkNSdkMsOFRBTUM7NEZERVksMEJBQTBCO2tCQUx0QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxvQkFBb0I7b0JBQzlCLFdBQVcsRUFBRSxxQ0FBcUM7b0JBQ2xELFNBQVMsRUFBRSxDQUFDLHFDQUFxQyxDQUFDO2lCQUNuRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXNzaXN0YW50Q29yZUJhc2VDb21wb25lbnQgfSBmcm9tICcuLi9hc3Npc3RhbnQtY29yZS1iYXNlL2Fzc2lzdGFudC1jb3JlLWJhc2UuY29tcG9uZW50JztcbiBcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Fzc2lzdGFudC1jaGVja2JveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc3Npc3RhbnQtY2hlY2tib3guY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hc3Npc3RhbnQtY2hlY2tib3guY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBc3Npc3RhbnRDaGVja2JveENvbXBvbmVudCBleHRlbmRzIEFzc2lzdGFudENvcmVCYXNlQ29tcG9uZW50IHt9XG4iLCI8ZGl2IGNsYXNzPVwiYXNzaXN0YW50LWNoZWNrYm94XCI+XG4gICAgPGRpdiBbbmdDbGFzc109XCJ7ICdhc3Npc3RhbnQtY2ItbGFiZWwtbGVmdCc6IGxhYmVsU2lkZSA9PT0gJ2xlZnQnIH1cIj5cbiAgICAgICA8cC1jaGVja2JveCB2YWx1ZT1cInt7IGtleSB9fVwiIHN0eWxlQ2xhc3M9XCJhc3Npc3RhbnQtY2Ite3sgdHlwZSB9fSBhc3Npc3RhbnQtY2Itc2l6ZS17eyBzaXplIH19XCIgPjwvcC1jaGVja2JveD5cbiAgICAgICA8YXNzaXN0YW50LXNwYWNlciBzaXplPVwibVwiPjwvYXNzaXN0YW50LXNwYWNlcj5cbiAgICA8L2Rpdj5cbiA8L2Rpdj4gXG4gIl19