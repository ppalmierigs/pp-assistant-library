import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxModule } from 'primeng/checkbox';
import { AssistantLabelModule } from '../assistant-label/assistant-label.module';
import { AssistantSpacerModule } from '../assistant-spacer/assistant-spacer.module';
import { AssistantCheckboxComponent } from './assistant-checkbox.component';



@NgModule({
  declarations: [AssistantCheckboxComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    CheckboxModule,
    AssistantSpacerModule,
    AssistantLabelModule,
    FormsModule,
    ReactiveFormsModule],
  exports: [AssistantCheckboxComponent]
})
export class AssistantCheckboxModule { }
