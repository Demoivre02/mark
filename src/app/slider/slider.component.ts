import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @ViewChild('slider') slider!: ElementRef;
  currentIndex = 0;

  ngOnInit(): void {
    this.showItem(this.currentIndex);
  }

  showItem(index: number): void {
    this.currentIndex = index;
    const translateX = -index * 100; // Assuming each item takes 100% width
    this.slider.nativeElement.style.transform = `translateX(${translateX}%)`;
  }
}
