import { slugify } from './../../../shared/string.utils';
import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input()
  recipe!: Recipe;

  slug: string = '';

  constructor() {}

  ngOnInit(): void {
    this.slug = slugify(this.recipe.name);
  }
}
