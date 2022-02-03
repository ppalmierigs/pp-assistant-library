import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AssistantIconModule, AssistantLabelModule } from 'projects/pp-assistant-library/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AssistantIconModule,
    AssistantLabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
