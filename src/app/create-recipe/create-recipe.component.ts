import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})
export class CreateRecipeComponent implements OnInit {

  createRecipeForm: FormGroup;
  type = ['Veg', 'Nonveg'];

  constructor(private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.createRecipeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      chef: new FormControl('1')
    });
  }

  onSubmit() {
    // Make sure to create a deep copy of the form-model
    const result = { ...this.createRecipeForm.value };
    // const result = { 'result': {...this.createRecipeForm.value} };
    this.createRecipeForm.reset({ name: '', image: '', description: '', type: '', chef: '1' });

    // Do useful stuff with the gathered data
    console.log(result.name);
    // console.log(result.result.name);

    this.router.navigate(['list']);
  }

  revert() {
    // Resets to blank object
    this.createRecipeForm.reset();

    // Resets to provided model
    this.createRecipeForm.reset({ name: '', image: '', description: '', type: '', chef: '' });
  }
}
