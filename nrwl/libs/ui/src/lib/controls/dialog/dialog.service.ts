import { Injectable, Component, TemplateRef } from '@angular/core';
import {
  DialogRef,
  DialogService,
  DialogSettings,
  DialogAction
} from '@progress/kendo-angular-dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { POCDialogSetting } from './poc-dialog.interface';

@Injectable({
  providedIn: 'root'
})
export class POCDialogService {
  defaultSetting: POCDialogSetting = {
    width: 500
  };

  private destroyed$ = new Subject();

  dialogInstance: DialogRef;

  constructor(private dialogService: DialogService) {}

  show(setting: POCDialogSetting) {
    const updatedSettings = Object.assign({}, this.defaultSetting, setting);
    this.dialogInstance = this.dialogService.open(<DialogSettings>(
      updatedSettings
    ));
  }

  onCloseSubscriber() {
    /* return this.dialogInstance.result
    .pipe(
      takeUntil(this.destroyed$)
    ) */
    /*.subscribe((result) => {
      const dialogContentInstance = this.dialogInstance.content.instance;
    });*/
  }

  async confirm(
    title: string,
    content: string | TemplateRef<any> | Function
  ): Promise<boolean> {
    const confirmAction: DialogAction = { text: 'Yes', primary: true };

    const result = await this.dialogService
      .open({
        title,
        content,
        actions: [confirmAction, { text: 'No' }]
      })
      .result.toPromise();

    return result === confirmAction;
  }

  async alert(
    title: string,
    content: string | TemplateRef<any> | Function
  ): Promise<void> {
    await this.dialogService
      .open({
        title,
        content,
        actions: [{ text: 'OK' }]
      })
      .result.toPromise();
  }

  async open() {
    await this.open();
  }
}
