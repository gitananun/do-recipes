import { RecipeService } from './../../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
  recipe!: Recipe;

  constructor(
    private shoppingListService: ShoppingListService,
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let r = this.recipeService.getRecipe(params['slug']);
      if (!r) {
        this.router.navigate(['not-found'], { relativeTo: this.route });
      } else {
        this.recipe = r;
      }
    });
  }

  addToShoppingList() {
    this.shoppingListService.addIngredients(this.recipe.ingredients);
  }

  onDelete() {
    this.recipeService.deleteRecipe(slugify(this.recipe.name));
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
