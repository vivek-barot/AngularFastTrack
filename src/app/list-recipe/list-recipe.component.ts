import { Router } from '@angular/router';
import { RecipeManagementService } from './../helpers/recipe-management.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-recipe',
  templateUrl: './list-recipe.component.html',
  styleUrls: ['./list-recipe.component.css']
})

export class ListRecipeComponent implements OnInit {

  recipeData;

  constructor(private router: Router, private rm: RecipeManagementService) {
  }

  ngOnInit() {
    this.recipeData = [
      {
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },
      {
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      }, {
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      },{
        name: 'vivek',
        image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        type: 'Nonveg',
        chef: 'sachin',
        approved: 'sachin'
      }
    ]
    // this.recipeData = this.rm.getRecipeData();
  }

  clickMe() {
    console.log('Clicked', this.recipeData);
  }

  goToCreateRecipe() {
    this.router.navigate(['create']);
  }
}