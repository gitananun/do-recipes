import { BrowserModule } from '@angular/platform-browser';
import { RecipesRoutingModule } from './recipes-routing.module';
import { ShortenPipe } from './../shared/shorten.pipe';
import { AppRoutingModule } from './../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ShortenPipe,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AppRoutingModule,
    RecipesRoutingModule,
  ],
  exports: [
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
})
export class RecipesModule {}
