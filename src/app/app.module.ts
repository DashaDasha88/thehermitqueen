import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TextframeComponent } from './components/textframe/textframe.component';
import { TextbodyComponent } from './components/textbody/textbody.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TextframeComponent,
    TextbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
