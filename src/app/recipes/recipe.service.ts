import { Recipe } from './recipe-list/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService{
    selectedRecipe=new EventEmitter<Recipe>();    
    
    private recipes:Recipe[] = [
        new Recipe(
            'Pizza',
            'just a Pizza recipe'
            ,'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/220px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
            [
                new Ingredient('bread',1),
                new Ingredient('cheese',2)
            ]
            ),
        new Recipe(
            'Burger',
            'just a Burger recipe'
            ,'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg',
            [
                new Ingredient('bun',1),
                new Ingredient('potato',2)
            ]
            )
      ];

      constructor(private slService:ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      getRecipeById(id:number){
        return this.recipes[id];
      }

      addIngredientToShoppingList(ingredient:Ingredient[]){
        this.slService.addIngredients(ingredient);
      }
}