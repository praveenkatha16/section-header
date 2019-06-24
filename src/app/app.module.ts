import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionHeaderComponent } from './section-header/section-header.component';
import { SectionTypeDirective } from './section-type.directive';

@NgModule({
  declarations: [
    AppComponent,
    SectionHeaderComponent,
    SectionTypeDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
