import {
  OnInit,
  DoCheck,
  Directive,
  Attribute,
  ElementRef,
  Renderer2,
  Input
} from '@angular/core';
import {
  Validators,
  Validator,
  FormControl,
  ValidationErrors,
  NgControl
} from '@angular/forms';

enum ErrorTypes {
  Required,
  Min,
  Max
}

/**
 * @howToUse
 * ```
 *     <some-element poc-form-validator invalidMsg="This Field is required.">...</some-element>
 * ```
 */

@Directive({
  selector:
    '[poc-form-validator][formControlName],[poc-form-validator][ngModel]'
})
export class FormValidatorDirective implements Validator, DoCheck, OnInit {
  invalidClass = 'error';
  @Input() invalidMsg;
  @Input() min;
  @Input() max;
  @Input() canRemoveValidation: boolean;
  @Input() validateControl: boolean;
  isValidatorRemoved = false;
  isKendoComboBox = false;
  errorType: number;
  validators: ValidationErrors[] = [];

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private model: NgControl,
    @Attribute('poc-form-validator') public formValidator: string
  ) {
    this.isKendoComboBox =
      this.elementRef.nativeElement.nodeName === 'KENDO-COMBOBOX';
  }

  ngOnInit() {
    if (this.validateControl) {
      this.setValidators();
    }
  }

  setValidators() {
    const validators = [Validators.required];
    if (this.min) {
      validators.push(Validators.min(this.min));
    }

    if (this.max) {
      validators.push(Validators.max(this.max));
    }

    (this.model.control as FormControl).setValidators(validators);
  }

  ngDoCheck() {
    if (this.validateControl) {
      this.validate(this.model.control as FormControl);
    }
  }

  validate(formControl: FormControl): { [key: string]: any } {
    let value =
      formControl.value || formControl.value === 0
        ? formControl.value.toString().trim()
        : null;
    this.errorType = ErrorTypes.Required;

    if (this.isKendoComboBox && value && value === '-1') {
      value = '';
      formControl.setErrors({});
    }

    if (this.canRemoveValidation) {
      this.removeValidateMsg();
      formControl.clearValidators();
      formControl.updateValueAndValidity();
      this.isValidatorRemoved = true;
      return null;
    }

    if (this.isValidatorRemoved) {
      this.setValidators();
      formControl.updateValueAndValidity();
    }

    if (value && value.length > 0) {
      let canRemoveValidationMsg = true;

      if (this.min && this.min > Number(value)) {
        canRemoveValidationMsg = false;
        this.errorType = ErrorTypes.Min;
      }

      if (this.max && this.max < Number(value)) {
        canRemoveValidationMsg = false;
        this.errorType = ErrorTypes.Max;
      }

      if (canRemoveValidationMsg) {
        this.removeValidateMsg();
        return null;
      }
    }

    if (formControl.touched) {
      this.showValidateMsg();
    }
    //return { required: true };
  }

  showValidateMsg() {
    const parentElement: HTMLElement = this.elementRef.nativeElement.parentNode;
    const selectElement = parentElement.querySelector(`.${this.invalidClass}`);

    let message = this.invalidMsg
      ? this.invalidMsg
      : this.formValidator
      ? this.formValidator
      : '* required';

    switch (this.errorType) {
      case ErrorTypes.Min:
        message = 'Value must be greater than or equal to ' + this.min;
        break;
      case ErrorTypes.Max:
        message = 'Value must be less than or equal to ' + this.max;
        break;
    }

    if (!selectElement) {
      const divElement = this.renderer.createElement('div');
      const validatetMsg = this.renderer.createText(message);
      this.renderer.addClass(divElement, this.invalidClass);
      this.renderer.appendChild(divElement, validatetMsg);
      this.renderer.appendChild(parentElement, divElement);
    } else {
      selectElement.textContent = message;
    }
  }

  removeValidateMsg() {
    const parentElement: HTMLElement = this.elementRef.nativeElement.parentNode;
    const selectElement = parentElement.querySelector(`.${this.invalidClass}`);

    if (selectElement) {
      selectElement.remove();
    }
  }
}
