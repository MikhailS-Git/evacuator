import { Component, OnInit } from '@angular/core';
import { footerNavItems, IFooterNavItem } from './footer';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    items: IFooterNavItem[] = footerNavItems;

  constructor() { }

  ngOnInit(): void {
  }

}
