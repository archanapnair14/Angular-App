import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule,FormGroup,Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './form.html',
  styleUrl: './form.css'
})
export class Form {
 userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(9),
    ]),
     email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)

    ]),
    phone: new FormControl('',[ Validators.required,
    Validators.maxLength(10),
    Validators.pattern(/^\d{10}$/)
    ])
  });

  get name() {
    return this.userForm.get('name');
  }
  
  get email() { 
    return this.userForm.get('email'); 
  }
  get phone() { 
    return this.userForm.get('phone');
  }

onSubmit() {
  if (this.userForm.valid) {
    console.log('Form Submitted:', this.userForm.value);
  } else {
    this.userForm.markAllAsTouched();
  }
}
}


