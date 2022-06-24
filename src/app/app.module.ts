import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { RecipesModule } from './recipes/recipes.module';
import { ShortenPipe } from './shared/shorten.pipe';
import { AuthGuard } from './guards/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeService } from './services/recipe.service';
import { ShoppingListService } from './services/shopping-list.service';
import { ButtonHoverDirective } from './directives/button-hover.directive';
import { HoverDirective } from './directives/hover.directive';
import { HeaderWrapperComponent } from './layout/header/header-wrapper/header-wrapper.component';
import { IngredientItem } from './shopping-list/ingredient-item/ingredient-item.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shopping-list-edit.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ShoppingListComponent,
    ShoppingListEditComponent,
    IngredientItem,
    HeaderWrapperComponent,

    HoverDirective,
    ButtonHoverDirective,
    WelcomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipesModule,
  ],
  providers: [ShoppingListService, RecipeService, AuthService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
