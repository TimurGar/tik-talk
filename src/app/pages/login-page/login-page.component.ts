import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { from, map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  isPasswordVisible = signal<boolean>(false);
  

  form: FormGroup = new FormGroup({
    password: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
  });

 
  onSubmit() {

    if (this.form.valid) {
      // @ts-ignore
      this.authService.login(this.form.value)
        .subscribe(res => {
          this.router.navigate(['/']);
        console.log(res)
      }) 
    }

  }
  
}
