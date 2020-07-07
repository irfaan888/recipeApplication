import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe-list/recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {
  rec:Recipe
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
    this.recipeService.selectedRecipe.subscribe(
      (recipe:Recipe)=>{this.rec=recipe;}
    );
  }

}
