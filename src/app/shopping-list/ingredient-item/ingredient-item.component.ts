import { ShoppingListService } from './../../services/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  providers: [],
})
export class IngredientItem {
  @Input('ingredient')
  ing!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  onIngredientDeleted() {
    this.shoppingListService.deleteIngredient(this.ing.name);
  }
}
