import { LayoutService } from './../../services/layout.service';
import { HeaderTabType } from './../../app.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private layoutService: LayoutService) {}

  onTabChanged(name: HeaderTabType) {
    this.layoutService.tabChanged.emit(name);
  }
}
