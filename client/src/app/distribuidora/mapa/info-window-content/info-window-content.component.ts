import { Component, OnInit, Input, Pipe } from '@angular/core';
import { TimeAgoPipe } from 'angular2-moment';
import { PontoMapaContent } from '../ponto-mapa-content';
import { SwiperConfigInterface } from "ngx-swiper-wrapper/dist";

@Component({
  selector: 'info-window-content',
  templateUrl: './info-window-content.component.html',
  providers: [TimeAgoPipe],
  styleUrls: ['./info-window-content.component.css']
})
export class InfoWindowContentComponent implements OnInit {

  public swiperConfig: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 2,
    keyboardControl: true,
    mousewheelControl: true,
    scrollbarDraggable: true,
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev'
  };

  @Input('model') model: PontoMapaContent;

  constructor() {
  }

  ngOnInit() {
  }

}
