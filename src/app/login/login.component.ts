import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// // import {
// //   FormBuilder,
// //   FormControl,
// //   FormGroup,
// //   Validators,
// // } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  //   // loginForm: FormGroup | any = FormGroup;
  constructor(
    private loginService: LoginService,

    private router: Router // private formBulider: FormBuilder, //   // private FormControl: FormControl
  ) {}
  ngOnInit(): void {
    //     // this.loginForm = this.FormControl.group({
    //     //   email: [null, [Validators.required]],
    //     //   password: [null, [Validators.required]],
    //     // });
  }
  handleSubmit(item: any) {
    console.log(item, 'item -------');
    this.loginService.login(item).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        console.log('response--->', response);
        this.router.navigate(['/']);
      },
      (error) => {
        console.log('error login');
      }
    );
  }

}
