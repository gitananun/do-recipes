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

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipesChangedSbs = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => (this.recipes = recipes)
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipesChangedSbs.unsubscribe();
  }
}
