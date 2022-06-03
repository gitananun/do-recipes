import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Meat', 3),
    new Ingredient('Potatoes', 2),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(data: Ingredient) {
    this.ingredients.push(data);
  }

  onIngredientsClear() {
    this.ingredients = [];
  }

  onIngredientDeleted(name: string) {
    this.ingredients = this.ingredients.filter((ing) => ing.name != name);
  }
}
