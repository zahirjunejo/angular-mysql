import { Component, Input } from '@angular/core';
import { ComponentBase } from '../../common/classes/component-base';

@Component({
  selector: 'poc-dialog',
  templateUrl: './poc-dialog.component.html',
  styleUrls: ['./poc-dialog.component.scss']
})
export class POCDialogComponent {
  @Input() title: string;
  @Input() okButtonLabel = 'Save';
  @Input() dialog: ComponentBase;
  @Input() height?: number;
  @Input() width?: number;
  @Input() hideCancelButton = false;
  @Input() actionsLayout = 'normal';

  constructor() {}

  async ok() {
    await this.execute(() => this.dialog.ok());
  }

  async cancel() {
    await this.execute(() => this.dialog.cancel());
  }

  private async execute(action: () => any) {
    try {
      await action();
    } finally {
    }
  }
}
