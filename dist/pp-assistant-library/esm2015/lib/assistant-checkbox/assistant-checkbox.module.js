import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { AssistantSpacerModule } from '../assistant-spacer/assistant-spacer.module';
import { AssistantCheckboxComponent } from './assistant-checkbox.component';
import * as i0 from "@angular/core";
export class AssistantCheckboxModule {
}
AssistantCheckboxModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
AssistantCheckboxModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxModule, declarations: [AssistantCheckboxComponent], imports: [CommonModule, CheckboxModule, AssistantSpacerModule, FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule], exports: [AssistantCheckboxComponent] });
AssistantCheckboxModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxModule, imports: [[
            CommonModule, CheckboxModule, AssistantSpacerModule, FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantCheckboxModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [AssistantCheckboxComponent],
                    imports: [
                        CommonModule, CheckboxModule, AssistantSpacerModule, FormsModule, ReactiveFormsModule, BrowserModule, BrowserAnimationsModule
                    ],
                    exports: [AssistantCheckboxComponent]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzaXN0YW50LWNoZWNrYm94Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3BwLWFzc2lzdGFudC1saWJyYXJ5L3NyYy9saWIvYXNzaXN0YW50LWNoZWNrYm94L2Fzc2lzdGFudC1jaGVja2JveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQTtBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDbEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBVTVFLE1BQU0sT0FBTyx1QkFBdUI7O3FIQUF2Qix1QkFBdUI7c0hBQXZCLHVCQUF1QixpQkFMbkIsMEJBQTBCLGFBRXZDLFlBQVksRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLGFBQWEsRUFBQyx1QkFBdUIsYUFDbkgsMEJBQTBCO3NIQUV6Qix1QkFBdUIsWUFKekI7WUFDUCxZQUFZLEVBQUUsY0FBYyxFQUFFLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxhQUFhLEVBQUMsdUJBQXVCO1NBQUM7NEZBR25ILHVCQUF1QjtrQkFObkMsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztvQkFDMUMsT0FBTyxFQUFFO3dCQUNQLFlBQVksRUFBRSxjQUFjLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLGFBQWEsRUFBQyx1QkFBdUI7cUJBQUM7b0JBQzlILE9BQU8sRUFBRSxDQUFDLDBCQUEwQixDQUFDO2lCQUN0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucydcbmltcG9ydCB7IENoZWNrYm94TW9kdWxlIH0gZnJvbSAncHJpbWVuZy9jaGVja2JveCc7XG5pbXBvcnQgeyBBc3Npc3RhbnRTcGFjZXJNb2R1bGUgfSBmcm9tICcuLi9hc3Npc3RhbnQtc3BhY2VyL2Fzc2lzdGFudC1zcGFjZXIubW9kdWxlJztcbmltcG9ydCB7IEFzc2lzdGFudENoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9hc3Npc3RhbnQtY2hlY2tib3guY29tcG9uZW50JztcbiBcblxuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBc3Npc3RhbnRDaGVja2JveENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsIENoZWNrYm94TW9kdWxlLCBBc3Npc3RhbnRTcGFjZXJNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLEJyb3dzZXJNb2R1bGUsQnJvd3NlckFuaW1hdGlvbnNNb2R1bGVdLFxuICBleHBvcnRzOiBbQXNzaXN0YW50Q2hlY2tib3hDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFzc2lzdGFudENoZWNrYm94TW9kdWxlIHsgfVxuIl19