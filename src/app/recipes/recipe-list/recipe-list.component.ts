import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output('recp') recp=new EventEmitter<Recipe>();
  recipes:Recipe[] = [
    new Recipe('Pizza','just a Pizza recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4OtWdbDgDEdBC5bWHD65qauUQNs6FehLsbbLhqsctamcL1gM7&usqp=CAU'),
    new Recipe('Burger','just a Burger recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4OtWdbDgDEdBC5bWHD65qauUQNs6FehLsbbLhqsctamcL1gM7&usqp=CAU'),
    new Recipe('Sandwich','just a Sandwich recipe','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4OtWdbDgDEdBC5bWHD65qauUQNs6FehLsbbLhqsctamcL1gM7&usqp=CAU')
  ];

  constructor() { }

  ngOnInit() {
  }

  OnRecipeEmit(rec){
      this.recp.emit(rec);
  }
}
