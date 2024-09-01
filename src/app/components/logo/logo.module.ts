import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    LogoComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    LogoComponent
  ]
})
export class LogoModule { }
