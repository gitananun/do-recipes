import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();
  startEditing: Subject<number> = new Subject<number>();

  ingredients: Ingredient[] = [];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addNewIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.ingredientsChanged.next(this.ingredients);
  }

  addIngredients(ings: Ingredient[]) {
    this.ingredients.push(...ings);
    this.ingredientsChanged.next(this.ingredients);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);

    this.ingredientsChanged.next(this.ingredients);
  }

  updateIngredient(index: number, editedIng: Ingredient) {
    this.ingredients[index] = editedIng;

    this.ingredientsChanged.next(this.ingredients);
  }

  resetIngredients() {
    this.ingredients = [];
    this.ingredientsChanged.next(this.ingredients);
  }
}
