import { Component, OnInit, Input, Pipe } from '@angular/core';
import { TimeAgoPipe } from 'angular2-moment';
import { PontoMapaContent } from '../ponto-mapa-content';

@Component({
  selector: 'info-window-content',
  templateUrl: './info-window-content.component.html',
  providers: [TimeAgoPipe],
  styleUrls: ['./info-window-content.component.css']
})
export class InfoWindowContentComponent implements OnInit {
  @Input('model') model: PontoMapaContent;
  constructor() {
  }

  ngOnInit() {
  }

}
