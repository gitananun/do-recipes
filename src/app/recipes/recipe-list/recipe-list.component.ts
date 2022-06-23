import { RecipesHttpService } from './../../http/recipes-http.service';
import { Subscription } from 'rxjs';
import { RecipeService } from './../../services/recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  recipesChangedSbs!: Subscription;
  recipesStoredSbs!: Subscription;

  recipesStoreInProgress: boolean = false;

  constructor(
    private recipeService: RecipeService,
    private recipesHttpService: RecipesHttpService
  ) {}

  ngOnInit(): void {
    this.initFetch();

    this.recipesChangedSbs = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => (this.recipes = recipes)
    );

    this.recipesStoredSbs = this.recipesHttpService.recipesStored.subscribe(
      (_: Recipe[] | Recipe) => (this.recipesStoreInProgress = false)
    );

    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipesChangedSbs.unsubscribe();
    this.recipesStoredSbs.unsubscribe();
  }

  onStore() {
    this.recipesStoreInProgress = true;
    this.recipesHttpService.store();
  }

  private initFetch(): void {
    this.recipesHttpService.fetch().subscribe();
  }
}
