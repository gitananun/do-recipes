import { Ingredient } from './../../shared/ingredient.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredient-item',
  templateUrl: './ingredient-item.component.html',
})
export class IngredientItem {
  @Input('ingredient')
  ing!: Ingredient;

  @Output()
  ingredientDeleted: EventEmitter<any> = new EventEmitter();

  onIngredientDeleted() {
    this.ingredientDeleted.emit(this.ing.name);
  }
}
