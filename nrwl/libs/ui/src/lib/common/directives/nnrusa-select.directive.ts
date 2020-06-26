import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[pocSelect]'
})
export class POCSelectDirective implements OnInit, OnDestroy {
  constructor(private el: ElementRef<HTMLSelectElement>) {}

  @Input() classes: string[];
  @Input() parentClass: string;

  ngOnInit(): void {
    const element = this.el.nativeElement;

    const newParent = document.createElement('div');

    newParent.classList.add('select');

    if (this.parentClass) {
      newParent.classList.add(this.parentClass);
    }

    if (typeof this.classes !== 'undefined' && this.classes.length > 0) {
      for (let className of this.classes) {
        newParent.classList.add(className);
      }
    }

    element.parentElement.replaceChild(newParent, element);

    newParent.appendChild(element);
  }

  ngOnDestroy(): void {
    const selectElement = this.el.nativeElement;
    if ((selectElement.parentNode as Element).classList.contains('select')) {
      selectElement.parentNode.parentNode.removeChild(selectElement.parentNode);
    }
  }
}
