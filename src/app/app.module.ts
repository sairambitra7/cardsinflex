import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


import { FlexLayoutModule } from '@angular/flex-layout';
import { CardComponent } from './card/card.component';
import { CardcoComponent } from './cardco/cardco.component';
import { CardhoverComponent } from './cardhover/cardhover.component';
import { FridayComponent } from './friday/friday.component';
import { EvencardsComponent } from './evencards/evencards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardcoComponent,
    CardhoverComponent,
    FridayComponent,
    EvencardsComponent,
    
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
