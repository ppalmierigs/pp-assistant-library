import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class PpAssistantLibraryComponent {
    constructor() { }
    ngOnInit() {
    }
}
PpAssistantLibraryComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PpAssistantLibraryComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
PpAssistantLibraryComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: PpAssistantLibraryComponent, selector: "lib-pp-assistant-library", ngImport: i0, template: `
    <p>
      pp-assistant-library works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PpAssistantLibraryComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-pp-assistant-library',
                    template: `
    <p>
      pp-assistant-library works!
    </p>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class PpAssistantLibraryModule {
}
PpAssistantLibraryModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PpAssistantLibraryModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
PpAssistantLibraryModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PpAssistantLibraryModule, declarations: [PpAssistantLibraryComponent], exports: [PpAssistantLibraryComponent] });
PpAssistantLibraryModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PpAssistantLibraryModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: PpAssistantLibraryModule, decorators: [{
            type: NgModule,
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

class AssistantIconComponent {
    constructor() { }
    ngOnInit() {
    }
}
AssistantIconComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantIconComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
AssistantIconComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: AssistantIconComponent, selector: "lib-assistant-icon", ngImport: i0, template: "<span>\n    <i class=\"pi pi-circle\" style=\"color: red;\"></i>\n</span>", styles: [""] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: AssistantIconComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-assistant-icon',
                    templateUrl: './assistant-icon.component.html',
                    styleUrls: ['./assistant-icon.component.css']
                }]
        }], ctorParameters: function () { return []; } });

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

/*
 * Public API Surface of pp-assistant-library
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AssistantIconComponent, AssistantIconModule, PpAssistantLibraryComponent, PpAssistantLibraryModule };
//# sourceMappingURL=pp-assistant-library.js.map
