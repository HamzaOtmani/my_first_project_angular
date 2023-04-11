import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp2Component } from './comp2/comp2.component';
import { ComppComponent } from './compp/compp.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { ParentComponent } from './parent_child/parent/parent.component';
import { ChildComponent } from './parent_child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp2Component,
    ComppComponent,
    HeaderComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
