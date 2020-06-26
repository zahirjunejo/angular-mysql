import { Directive } from '@angular/core';
import { NgModel } from '@angular/forms';
import uuidv4 from 'uuidv4';
/**
 * The name attribute must be set for any control that is decorated with ngModel and is contained within a form element.
 * This directive will automatically attach itself to any element that is decorated with ngModel and set the name.
 * It looks as though any names that are hard coded into the template will override the name that is set here by the time ngOnInit is called.
 */
@Directive({
  // tslint:disable-next-line: directive-selector
  selector: `[ngModel]`
})
export class FormControlDirective {
  constructor(private ngModel: NgModel) {
    ngModel.name = uuidv4();
  }
}
