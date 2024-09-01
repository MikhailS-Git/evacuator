import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {
    @ViewChild('headerRef') headerRef?: ElementRef;

    headerHeight: number = 0;

    isMenuActive: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      if (this.headerRef) {
        this.headerHeight = this.headerRef.nativeElement.clientHeight;
      }
  }

  redirectToCreateAddPage() {
    this.router.navigate(['/create-add']);
    this.isMenuActive = false;
  }

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

}
