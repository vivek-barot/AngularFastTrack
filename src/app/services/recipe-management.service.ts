import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RecipeManagementService {

  recipeData = [
    {
      name: 'Burger',
      image: 'http://salemdigest.com/wp-content/uploads/2016/08/TITS_food1.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'NonVeg',
      chef: 'Ranveer Brar',
      approved: '1'
    }, {
      name: 'Italian Pasta',
      image: 'https://mariettasquaremarket.com/msm/wp-content/uploads/2018/12/Pita-Mediterranean-5.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'Veg',
      chef: 'JM',
      approved: '1'
    }, {
      name: 'Chicken Maggie',
      image: 'http://eatbook.sg/wp-content/uploads/2018/06/Century-Square-Food-Two-Hana.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'NonVeg',
      chef: 'Nisha Madhulika',
      approved: '2'
    }, {
      name: 'Veg. Pulav',
      image: 'https://media-cdn.tripadvisor.com/media/photo-p/0e/75/7b/5d/photo3jpg.jpg',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
      type: 'Veg',
      chef: 'Tarla Dalal',
      approved: '1'
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