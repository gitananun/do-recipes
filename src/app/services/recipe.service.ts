import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';
import { slugify } from '../shared/string.utils';

export class RecipeService {
  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  private recipes: Recipe[] = [];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(slug: string): Recipe | undefined {
    return this.getRecipes().find((r: Recipe) => slugify(r.name) === slug);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(slug: string, newRecipe: Recipe) {
    const recipeIndex: number = this.recipes.findIndex(
      (r: Recipe) => slugify(r.name) === slug
    );

    if (recipeIndex >= 0) this.recipes[recipeIndex] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(slug: string) {
    const recipeIndex: number = this.recipes.findIndex(
      (r: Recipe) => slugify(r.name) === slug
    );

    if (recipeIndex >= 0) this.recipes.splice(recipeIndex, 1);
    this.recipesChanged.next(this.recipes.slice());
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(recipes);
  }
}
