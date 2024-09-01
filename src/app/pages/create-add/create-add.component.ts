import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-add',
  templateUrl: './create-add.component.html',
  styleUrls: ['./create-add.component.scss']
})
export class CreateAddComponent implements OnInit {
    @ViewChild('selectRef') selectRef?: ElementRef;

    form?: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
        contacts: this.fb.group({
            city: [''],
            name: [''],
            mobPhone: [''],
            phone: [''],
            email: [''],
            address: ['']
        }),
        info: this.fb.group({
            title: [''],
            description: ['']
        }),
        prices: this.fb.group({
            car: this.fb.group({
                price: [''],
                notExist: ['']
            }),
            moto: this.fb.group({
                price: [''],
                notExist: ['']
            }),
            outland: this.fb.group({
                price: [''],
                notExist: ['']
            }),
            microbus: this.fb.group({
                price: [''],
                notExist: ['']
            }),
            surbubTarif: this.fb.group({
                price: [''],
                notExist: ['']
            }),
        }),
        photo: [''],
        agree: [false, [Validators.requiredTrue]]
    })
  }

  openSelect() {
    if (this.selectRef) {
        this.selectRef.nativeElement.showPicker();
    }
  }

  loadFile(e: any, controlName: string) {
    const fileList = (e.target as HTMLInputElement).files;
    const files: File[] = [];
        if (fileList) {
            for (let i = 0; i < fileList?.length; i++) {
                files.push(fileList[i]);
            }
        }
    this.form?.controls[controlName].patchValue(files);
  }

  submitForm() {
    console.log(this.form?.value)
  }

}
