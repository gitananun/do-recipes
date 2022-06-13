import { LayoutService } from './services/layout.service';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { HoverDirective } from './directives/hover.directive';
import { HeaderWrapperComponent } from './layout/header/header-wrapper/header-wrapper.component';
import { IngredientItem } from './shopping-list/ingredient-item/ingredient-item.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { HeaderNavLinkComponent } from './layout/header/header-nav-link/header-nav-link.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientItem,
    HeaderWrapperComponent,
    HeaderNavLinkComponent,

    HoverDirective,
    ButtonHoverDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ShoppingListService, RecipeService, LayoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
