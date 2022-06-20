import { Subject } from 'rxjs';
import { Ingredient } from './../shared/ingredient.model';
import { Recipe } from '../recipes/recipe.model';
import { slugify } from '../shared/string.utils';

export class RecipeService {
  recipesChanged: Subject<Recipe[]> = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Manti',
      'Manti is a type of dumpling popular in most Turkic cuisines, as well as in the cuisines of the South Caucasus and Balkans.',
      'https://img.chefkoch-cdn.de/rezepte/1808801292881984/bilder/949888/crop-960x720/kayseri-manti.jpg',
      [new Ingredient('Tomato', 2), new Ingredient('Rice', 100)]
    ),
    new Recipe(
      'Dolma',
      'Authentic Caucasian dolma with local flair',
      'https://www.alphafoodie.com/wp-content/uploads/2020/07/Stuffed-Grape-Leaves-1-of-25.jpeg',
      [new Ingredient('Cucumber', 2), new Ingredient('Salt', 0.5)]
    ),
  ];

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
}
