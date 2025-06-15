import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dsp',
  templateUrl: './dsp.component.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,                         
    RouterModule                               
  ],
  styleUrls: ['./dsp.component.scss']
})
export class DspComponent implements OnInit {
  showForm = false;
  applyForm!: FormGroup;

  countries = ['India'];
  driverTypes = ['Individual','Company'];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.applyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\+?[0-9]{7,15}$/)]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', Validators.required],
      driverType: ['', Validators.required],
      companyProfile: ['']
    });
  }

  onApply() {
    this.showForm = true;
    // you could also scrollIntoView or focus here
  }

  onSubmit() {
    if (this.applyForm.valid) {
      console.log(this.applyForm.value);
      // call your service…
    } else {
      this.applyForm.markAllAsTouched();
    }
  }
}
