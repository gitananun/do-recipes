import {
  Directive,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appHover') highlightColor!: string;

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver() {
    this.backgroundColor = this.highlightColor || 'whitesmoke';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = 'transparent';
  }
}
