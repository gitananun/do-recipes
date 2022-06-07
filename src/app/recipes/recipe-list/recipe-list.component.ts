import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Manti',
      'Manti is a type of dumpling popular in most Turkic cuisines, as well as in the cuisines of the South Caucasus and Balkans.',
      'https://img.chefkoch-cdn.de/rezepte/1808801292881984/bilder/949888/crop-960x720/kayseri-manti.jpg'
    ),
    new Recipe(
      'Dolma',
      'Authentic Caucasian dolma with local flair',
      'https://www.alphafoodie.com/wp-content/uploads/2020/07/Stuffed-Grape-Leaves-1-of-25.jpeg'
    ),
  ];

  @Output()
  onRecipeSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  onSelect(recipe: Recipe) {
    this.onRecipeSelected.emit(recipe);
  }
}
