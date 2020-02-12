import { RecipeManagementService } from './../helpers/recipe-management.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})

export class ListRecipeComponent implements OnInit {

  recipeData;

  constructor(private rm: RecipeManagementService) {
  }

  ngOnInit() {
    this.recipeData = this.rm.getRecipeData();
  }

  clickMe() {
    console.log('Clicked', this.recipeData);
  }
}