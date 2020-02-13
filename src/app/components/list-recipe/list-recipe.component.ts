import { Router } from '@angular/router';
import { RecipeManagementService } from '../../services/recipe-management.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})

export class ListRecipeComponent implements OnInit {

  @Input() showRecipe: boolean = true;
  recipeData;

  constructor(private router: Router, private rm: RecipeManagementService) {
  }

  ngOnInit() {
    this.recipeData = this.rm.getRecipeData();
  }

  goToCreateRecipe() {
    this.router.navigate(['create']);
  }
}