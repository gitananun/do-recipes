import { Component } from '@angular/core';

export type HeaderTabType = 'recipes' | 'shopping-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'recipe-book';
  activeTab: HeaderTabType = 'recipes';

  tabChanged(event: string) {
    this.activeTab = event as HeaderTabType;
  }
}
