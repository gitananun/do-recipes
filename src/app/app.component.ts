import { LayoutService } from './services/layout.service';
import { Component, OnInit } from '@angular/core';

export type HeaderTabType = 'recipes' | 'shopping-list';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'recipe-book';
  activeTab: HeaderTabType = 'recipes';

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.tabChanged.subscribe((tabName: HeaderTabType) => {
      this.activeTab = tabName;
    });
  }
}
