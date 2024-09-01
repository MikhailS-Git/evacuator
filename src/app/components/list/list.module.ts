import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { MatIconModule } from '@angular/material/icon';
import { CardModule } from '../card/card.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    MatIconModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
