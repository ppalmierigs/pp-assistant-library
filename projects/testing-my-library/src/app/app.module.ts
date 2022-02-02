import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AssistantIconModule } from 'pp-assistant-library';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AssistantIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
