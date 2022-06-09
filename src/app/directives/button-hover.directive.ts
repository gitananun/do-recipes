import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appButtonHover]',
})
export class ButtonHoverDirective implements OnInit {
  @HostBinding('style.backgroundColor') color: string = 'red';

  @Input() appButtonHover: string = 'trasnparent';
  @Input() enterColor!: string;

  ngOnInit(): void {
    this.color = this.appButtonHover;
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this.color = this.enterColor;
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.color = this.appButtonHover;
  }
}
