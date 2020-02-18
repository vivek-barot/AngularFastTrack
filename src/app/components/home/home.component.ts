import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { RecipeManagementService } from './../../services/recipe-management.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.value.username === 'vivek') {
      if (this.loginForm.value.password === 'vivek') {
        this.auth.sendToken(this.loginForm.value.username)
        let formData = { ...this.loginForm.value };
        this.loginForm.reset({ username: '', password: '' });
        this.router.navigate(['create']);
      } else {
        console.log("password is wrong.");
      }
    } else {
      console.log("username is wrong.");
    }
  }

  revert() {
    this.loginForm.reset({ username: '', password: '' });
  }
}
