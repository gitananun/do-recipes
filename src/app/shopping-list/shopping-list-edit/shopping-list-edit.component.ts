import { LoggingService } from './../../services/logging.service';
import { ShoppingListService } from './../../services/shopping-list.service';
import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
  providers: [LoggingService],
})
export class ShoppingListEditComponent {
  constructor(
    private shoppingListService: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  onIngredientAdded(
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement
  ) {
    let ing = new Ingredient(nameInput.value, +amountInput.value);

    this.loggingService.logNewRecordAdded(ing.name);
    this.shoppingListService.addNewIngredient(ing);
  }
}
