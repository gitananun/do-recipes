import { map, Subject, tap } from 'rxjs';
import { RecipeService } from './../services/recipe.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipesHttpService {
  recipesStored: Subject<Recipe[] | Recipe> = new Subject<Recipe[] | Recipe>();

  private readonly URI: string =
    'https://ng-recipe-book-e1bf8-default-rtdb.firebaseio.com';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  store(): void {
    const recipes = this.recipeService.getRecipes();
    this.http
      .put<Recipe[]>(`${this.URI}/recipes.json`, recipes)
      .subscribe((responseData) => {
        console.log(responseData);
        this.recipesStored.next(responseData);
      });
  }

  fetch() {
    return this.http.get<Recipe[]>(`${this.URI}/recipes.json`).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => this.recipeService.setRecipes(recipes))
    );
  }
}
