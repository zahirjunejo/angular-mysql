import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlDirective } from './directives/form-control.directive';
import { FormValidatorDirective } from './directives/form-validator.directive';
import { POCSelectDirective } from './directives/poc-select.directive';

@NgModule({
  imports: [CommonModule],
  exports: [
    CommonModule,
    FormControlDirective,
    FormValidatorDirective,
    POCSelectDirective
  ],
  declarations: [
    FormControlDirective,
    FormValidatorDirective,
    POCSelectDirective
  ],
  providers: []
})
export class POCCommonModule {}
