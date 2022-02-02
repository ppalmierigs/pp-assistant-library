import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CheckboxModule } from 'primeng/checkbox';
import { AssistantSpacerModule } from '../assistant-spacer/assistant-spacer.module';
import { AssistantCheckboxComponent } from './assistant-checkbox.component';
 


@NgModule({
  declarations: [AssistantCheckboxComponent],
  imports: [
    CommonModule, CheckboxModule, AssistantSpacerModule, FormsModule, ReactiveFormsModule,BrowserModule,BrowserAnimationsModule],
  exports: [AssistantCheckboxComponent]
})
export class AssistantCheckboxModule { }
