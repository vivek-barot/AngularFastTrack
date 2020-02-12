import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecipeManagementService {

  recipeData = [
    {
      name: 'vivek',
      image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'NonVeg',
      chef: 'vivek',
      approved: 'vivek'
    }, {
      name: 'vivek',
      image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'Veg',
      chef: 'vivek',
      approved: 'vivek'
    }, {
      name: 'vivek',
      image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'Veg',
      chef: 'vivek',
      approved: 'vivek'
    }, {
      name: 'vivek',
      image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'NonVeg',
      chef: 'vivek',
      approved: 'vivek'
    }, {
      name: 'vivek',
      image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'NonVeg',
      chef: 'vivek',
      approved: 'vivek'
    }
  ];

  constructor() { }

  getRecipeData() {
    return this.recipeData;
  }

  setRecipeData(data) {
    this.recipeData.push(data);
  }
}