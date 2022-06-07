import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-nav-link',
  templateUrl: './header-nav-link.component.html',
})
export class HeaderNavLinkComponent {
  @Input() href: string = '#';
  @Input() name!: string;
}
