// this guy is doing nothing
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slideritem',
  templateUrl: './slideritem.component.html',
  styleUrls: ['./slideritem.component.css']
})
export class SlideritemComponent {

  @Input () src : string = ''
}
