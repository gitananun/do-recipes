import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged: EventEmitter<Ingredient[]> = new EventEmitter<
    Ingredient[]
  >();

  ingredients: Ingredient[] = [];

  addNewIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.emit(this.ingredients);
  }

  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientsChanged.emit(this.ingredients);
  }

  deleteIngredient(name: string) {
    this.ingredients = this.ingredients.filter((ingr) => ingr.name != name);
    this.ingredientsChanged.emit(this.ingredients);
  }

  resetIngredients() {
    this.ingredients = [];
    this.ingredientsChanged.emit(this.ingredients);
  }
}
