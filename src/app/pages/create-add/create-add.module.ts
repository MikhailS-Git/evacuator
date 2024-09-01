import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAddComponent } from './create-add.component';
import { CreateAddRoutingModule } from './create-add-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateAddRoutingModule,
    MatIconModule
  ]
})
export class CreateAddModule { }
