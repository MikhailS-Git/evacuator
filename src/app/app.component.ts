import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CustomIconService } from 'src/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
    @ViewChild('header') headerRef?: ElementRef;

    headerHeight: number = 0;

    constructor(
        private iconService: CustomIconService
    ) {}

  ngOnInit(): void {
    this.iconService.registerIcons();
  }

  ngAfterViewInit(): void {
      setTimeout(()=>{
            if (this.headerRef) {
                this.headerHeight = this.headerRef.nativeElement.clientHeight;
            }
        }, 0)
  }
}
