import { Injectable } from '@angular/core';
import {
  NotificationService,
  NotificationSettings
} from '@progress/kendo-angular-notification';

type NotificationType = 'success' | 'warning' | 'error' | 'info';

@Injectable({
  providedIn: 'root'
})
export class POCNotificationService {
  defaultConfig: NotificationSettings = {
    content: '',
    position: { horizontal: 'right', vertical: 'top' },
    animation: { type: 'fade', duration: 700 },
    type: { style: 'none', icon: true },
    cssClass: 'poc-notify',
    closable: false,
    hideAfter: 3000,
    width: 280
  };

  constructor(private notificationService: NotificationService) {}

  success(message: string, title: string = '') {
    const config = this.updateNotifySettings('success', message);
    this.notificationService.show(config);
  }

  error(message: string, title: string = '') {
    const config = this.updateNotifySettings('error', message);
    this.notificationService.show(config);
  }

  info(message: string, title: string = '') {
    const config = this.updateNotifySettings('info', message);
    this.notificationService.show(config);
  }

  warning(message: string, title: string = '') {
    const config = this.updateNotifySettings('warning', message);
    this.notificationService.show(config);
  }

  private updateNotifySettings(
    notifyType: NotificationType,
    content: string
  ): NotificationSettings {
    return Object.assign({}, this.defaultConfig, {
      content: `${content}`,
      type: { style: notifyType }
    });
  }
}
