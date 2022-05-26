import { Component, OnInit } from '@angular/core';
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
      'Manti',
      'Manti is a type of dumpling popular in most Turkic cuisines, as well as in the cuisines of the South Caucasus and Balkans.',
      'https://img.chefkoch-cdn.de/rezepte/1808801292881984/bilder/949888/crop-960x720/kayseri-manti.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
