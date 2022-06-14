import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RecipeComponent } from './recipes/recipe/recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Route[] = [
  { path: '', component: WelcomeComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'recipes/:slug', component: RecipeComponent },
  {
    path: 'shopping',
    canActivate: [AuthGuard],
    component: ShoppingListComponent,
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
