import { RecipeManagementService } from './../../../services/recipe-management.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetails;

  constructor(private recipeManagementService: RecipeManagementService) { }

  ngOnInit() {
    this.recipeDetails = this.recipeManagementService.getRecipeData()[0];
    this.recipeManagementService.getRecipeInfo().subscribe(
      data => {
        this.recipeDetails = data;
      }
    );
  }

}
