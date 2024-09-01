import { Component, Input, OnInit } from '@angular/core';
import { ICardData } from './card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() data?: ICardData;

  constructor() { }

  ngOnInit(): void {
  }

}
