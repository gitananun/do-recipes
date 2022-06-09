import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 3),
    new Ingredient('Potatoes', 2),
  ];

  addNewIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
  }

  deleteIngredient(name: string) {
    let index = this.ingredients.findIndex((ingr) => ingr.name === name);
    if (index >= 0) this.ingredients.splice(index, 1);
  }

  resetIngredients() {
    this.ingredients.splice(0, this.ingredients.length);
  }
}
