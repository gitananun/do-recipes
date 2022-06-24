import { AuthGuard } from './guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Route[] = [
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  {
    path: 'shopping',
    canActivate: [AuthGuard],
    component: ShoppingListComponent,
  },
  { path: 'not-found', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
