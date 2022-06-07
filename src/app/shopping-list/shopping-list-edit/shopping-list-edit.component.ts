import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  @Output()
  ingredientCreated: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(
    nameInput: HTMLInputElement,
    amountInput: HTMLInputElement
  ) {
    this.ingredientCreated.emit({
      name: nameInput.value,
      amount: +amountInput.value,
    });
  }
}
