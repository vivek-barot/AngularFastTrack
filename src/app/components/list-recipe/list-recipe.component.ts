import { RecipeManagementService } from './../../services/recipe-management.service';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})

export class ListRecipeComponent implements OnInit {

  @Input() home: boolean = false;

  searchText;
  recipeData = [];

  constructor(private router: Router, private recipeManagementService: RecipeManagementService) {
  }

  ngOnInit() {
    this.recipeData = this.recipeManagementService.getRecipeData();
  }

  goToCreateRecipe() {
    this.router.navigate(['create']);
  }

  addFavourite(data) {
    data.isFavorite = !data.isFavorite;
  }

  getFilterByFavourite() {
    return this.recipeData.filter(e => e.isFavorite === true);
  }
}