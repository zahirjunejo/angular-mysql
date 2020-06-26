import { Component, TemplateRef } from '@angular/core';
import { DialogAction } from '@progress/kendo-angular-dialog';

export interface POCDialogSetting {
  content?: TemplateRef<any> | any;
  title?: string;
  actions?: Array<DialogAction>;
  height?: Number | String;
  width?: Number | String;
}
