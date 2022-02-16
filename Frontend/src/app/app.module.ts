import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilModule } from './util/util.module';
import { RenderFormComponent } from './render-form/render-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RenderFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SohoComponentsModule,
    FormsModule,
    HttpClientModule,
    UtilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
