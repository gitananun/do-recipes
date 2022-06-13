import { HeaderTabType } from './../app.component';
import { EventEmitter } from '@angular/core';

export class LayoutService {
  tabChanged: EventEmitter<HeaderTabType> = new EventEmitter<HeaderTabType>();
}
