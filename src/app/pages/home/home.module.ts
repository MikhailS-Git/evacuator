import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { ListModule } from 'src/app/components/list/list.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
      CommonModule,
      HomeRoutingModule,
      ListModule,
      MatIconModule
  ]
})
export class HomeModule { }
