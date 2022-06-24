import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../guards/auth-guard.service';
import { RecipeResolverService } from '../services/recipe-resolver.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes.component';

const appRoutes: Routes = [
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':slug',
        component: RecipeDetailComponent,
        resolve: [RecipeResolverService],
      },
      {
        path: ':slug/edit',
        component: RecipeEditComponent,
        resolve: [RecipeResolverService],
      },
      { path: '**', redirectTo: 'not-found' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule],
})
export class RecipesRoutingModule {}
