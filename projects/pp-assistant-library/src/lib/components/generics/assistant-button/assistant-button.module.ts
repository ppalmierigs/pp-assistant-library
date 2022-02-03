import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistantButtonComponent } from './assistant-button.component';
import { ButtonModule } from 'primeng/button'



@NgModule({
  declarations: [AssistantButtonComponent],
  imports: [CommonModule,ButtonModule],
  exports:[AssistantButtonComponent]
})
export class AssistantButtonModule { }
