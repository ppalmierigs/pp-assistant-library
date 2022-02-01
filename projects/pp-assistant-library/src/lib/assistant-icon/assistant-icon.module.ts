import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistantIconComponent } from './assistant-icon.component';




@NgModule({
  declarations: [AssistantIconComponent],
  imports: [
    CommonModule
  ],
  exports:[AssistantIconComponent]
})
export class AssistantIconModule { }
