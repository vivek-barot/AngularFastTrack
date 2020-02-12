import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecipeManagementService {
  
  recipeData = [];

  constructor() { }

  getRecipeData(){
    return this.recipeData;
  }

  setRecipeData(data){
    this.recipeData.push(data);
  }
}