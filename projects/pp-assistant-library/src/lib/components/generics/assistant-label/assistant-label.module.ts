import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { AssistantLabelComponent } from './assistant-label.component';



@NgModule({
  declarations: [AssistantLabelComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot()
  ],
  exports: [AssistantLabelComponent]
})
export class AssistantLabelModule { } 
