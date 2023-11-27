import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextbodyComponent } from './textbody/textbody.component';
import { SlideritemComponent } from './slideritem/slideritem.component';
import { SliderComponent } from './slider/slider.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [
    AppComponent,
    TextbodyComponent,
    SlideritemComponent,
    SliderComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
