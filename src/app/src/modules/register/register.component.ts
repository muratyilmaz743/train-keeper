import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'tracker-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm: new FormControl('', [
      Validators.required,
      this.confirmPasswordValidator('password'),
    ]),
  });

  onSubmit() {
    console.log(2);
    console.log(this.registerForm.valid);
  }

  confirmPasswordValidator(controlName: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const forbidden =
        control.parent?.get(controlName)?.value !== control.value;
      return forbidden
        ? { passwordMatchError: { value: control.value } }
        : null;
    };
  }
}
