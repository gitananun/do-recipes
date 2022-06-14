import { slugify } from './../../shared/string.utils';
import { ShoppingListService } from './../../services/shopping-list.service';
import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: Recipe;
  slug!: string;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.slug = slugify(this.recipe.name);
  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }
}
