import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

export enum ETabValue {
        PRICE = 'price',
        ORDER = 'order'
    }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    numberOfEvacuators: number = 60;

    activeTab: ETabValue = ETabValue.PRICE;
    eTavValue = ETabValue;

  constructor(
    public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.initListItems(this.numberOfEvacuators);
  }

  setTabValue(name: ETabValue) {
    this.activeTab = name;
  }

}
