import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { RattingFilterComponent } from './feedback/ratting-filter/ratting-filter.component';



@NgModule({
  declarations: [
    AppComponent,
   CardComponent,
   NavbarComponent,
   FeedbackComponent,
   RattingFilterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
