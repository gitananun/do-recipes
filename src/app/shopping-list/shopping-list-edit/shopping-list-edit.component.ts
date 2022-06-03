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

  name: string = '';
  amount: number = 0;

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded() {
    this.ingredientCreated.emit({ name: this.name, amount: this.amount });
  }
}
