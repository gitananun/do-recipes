import { ShoppingListService } from './../../services/shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
  providers: [],
})
export class IngredientItem {
  @Input() index!: number;
  @Input('ingredient') ing!: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  onIngredientDeleted() {
    this.shoppingListService.deleteIngredient(this.index);
  }

  onEditIngredient() {
    this.shoppingListService.startEditing.next(this.index);
  }
}
