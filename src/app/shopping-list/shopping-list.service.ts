import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{
    updatedIngredients=new EventEmitter<Ingredient[]>();

    private ingredients:Ingredient[]=[
        new Ingredient('Apples',5),
        new Ingredient('Oranges',8)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.updatedIngredients.emit(this.ingredients.slice());
    }

    addIngredients(ingre:Ingredient[]){
    //    for(let ingre of ingredients){
    //         this.addIngredient(ingre);
    //    } 
    this.ingredients.push(...ingre);
    this.updatedIngredients.emit(this.ingredients.slice());
    }
}