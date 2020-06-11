import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [
    new Recipe('testRecipe','just a test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4OtWdbDgDEdBC5bWHD65qauUQNs6FehLsbbLhqsctamcL1gM7&usqp=CAU'),
    new Recipe('testRecipe','just a test recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4OtWdbDgDEdBC5bWHD65qauUQNs6FehLsbbLhqsctamcL1gM7&usqp=CAU')
  ];

  constructor() { }

  ngOnInit() {
  }

}
