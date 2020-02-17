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

  constructor(private router: Router, private recipeManagementService: RecipeManagementService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    let formData = { ...this.loginForm.value };
    console.log(formData);
    this.loginForm.reset({ username: '', password: ''});
    this.router.navigate(['create']);
  }

  revert() {
    this.loginForm.reset({ username: '', password: ''});
  }
}
