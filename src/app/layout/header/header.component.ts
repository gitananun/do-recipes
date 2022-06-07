import { HeaderTabType } from './../../app.component';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Output()
  tabChanged: EventEmitter<string> = new EventEmitter<string>();

  onTabChanged(name: HeaderTabType) {
    this.tabChanged.emit(name);
  }
}
