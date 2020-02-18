import { LoggerService } from './../../services/logger.service';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private auth: AuthService, private loggerService: LoggerService) { }

  ngOnInit() {
    this.loggerService.showInfo("Username: vivek & Password: vivek");
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.value.username === 'vivek') {
      if (this.loginForm.value.password === 'vivek') {
        this.loggerService.showSuccess('Successfully logged in.');
        this.auth.sendToken(this.loginForm.value.username);
        this.loginForm.reset({ username: '', password: '' });
        this.router.navigate(['create']);
      } else {
        this.loggerService.showError('Password is wrong. It must be \'vivek\'');
      }
    } else {
      this.loggerService.showError('Username is wrong. It must be \'vivek\'');
    }
  }

  revert() {
    this.loginForm.reset({ username: '', password: '' });
  }
}
