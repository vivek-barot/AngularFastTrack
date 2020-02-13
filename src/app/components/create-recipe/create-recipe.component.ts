import { RecipeManagementService } from '../../services/recipe-management.service';
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

  constructor(private formBuilder: FormBuilder, private router: Router, private rm: RecipeManagementService) {
  }

  ngOnInit() {
    this.createRecipeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      chef: new FormControl('', Validators.required),
      approved: new FormControl('1')
    });
  }

  onSubmit() {
    let result = { ...this.createRecipeForm.value };
    this.createRecipeForm.reset({ name: '', image: '', description: '', type: '', chef: '', approved: '1' });
    console.log(result);
    this.rm.setRecipeData(result);
    this.router.navigate(['list']);
  }

  revert() {
    this.createRecipeForm.reset({ name: '', image: '', description: '', type: '', chef: '', approved: '1' });
  }
}