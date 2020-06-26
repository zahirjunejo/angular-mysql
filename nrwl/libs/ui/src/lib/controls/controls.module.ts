import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//avatar
import { AvatarModule } from 'ngx-avatar';
//Kendo Modules
import {
  ButtonsModule,
  DropDownButtonModule
} from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import {
  DateInputsModule,
  DatePickerModule
} from '@progress/kendo-angular-dateinputs';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { GaugesModule } from '@progress/kendo-angular-gauges';
import { ChartsModule } from '@progress/kendo-angular-charts';
//Custom Modules
//import { POCInputsModule } from './poc-inputs/poc-inputs.module';
//Custom Components
// import { POCDatepickerComponent } from './poc-datepicker/poc-datepicker.component';
 import { POCNotificationComponent } from './notification/notification.component';
// import { POCDropdownComponent } from './poc-dropdown/poc-dropdown.component';
// import { POCButtonComponent } from './poc-button/poc-button.component';
// import { POCDropdownButtonComponent } from './poc-dropdown-button/poc-dropdown-button.component';
// import { POCTimepickerComponent } from './poc-timepicker/poc-timepicker.component';
// import { POCTootltipDirective } from './poc-tootltip/poc-tootltip.directive';
// import { POCMultiselectComponent } from './poc-multiselect/poc-multiselect.component';
 import { POCDialogComponent } from './dialog/dialog.component';
// import { POCDatatableComponent } from './poc-datatable/poc-datatable.component';
// import { POCImageUploadComponent } from './poc-imageupload/poc-imageupload.component';
// import { POCCheckboxTableComponent } from './poc-checkbox-table/poc-checkboxtable.component';
// import { POCRingChartComponent } from './poc-ring-chart/ring-chart.component';
// import { POCInfoPopupComponent } from './poc-info-popup/poc-info-popup.component';
// import { POCInfoBoxComponent } from './poc-info-box/poc-info-box.component';
import { PopupModule } from '@progress/kendo-angular-popup';
// import { POCLineChartComponent } from './poc-line-chart/line-chart.component';
// import { POCDonutChartComponent } from './poc-donut-chart/donut-chart.component';
// import { ChartAxisPipe } from './poc-line-chart/chart-axis.pipe';
// import { CategoryAxisPipe } from './poc-line-chart/category-axis.pipe';
import { POCCommonModule } from '../common/common.module';
import { LyResizingCroppingImageModule } from '@alyle/ui/resizing-cropping-images';
//import { POCResizingCroppingImagesComponent } from './poc-resize-crop/poc-resize-crop.component';
import { LyThemeModule, LY_THEME } from '@alyle/ui';
import { MinimaLight, MinimaDark } from '@alyle/ui/themes/minima';
import { LyToolbarModule } from '@alyle/ui/toolbar';
import { LySliderModule } from '@alyle/ui/slider';
// import { POCAvatarComponent } from './poc-avatar/poc-avatar.component';
// import { POCMasterDetailTableComponent } from './poc-masterdetail-table/poc-masterdetail-table.component';

const MODULES = [
  FormsModule,
  ButtonsModule,
  DropDownButtonModule,
  DialogModule,
  DropDownsModule,
  DateInputsModule,
  DatePickerModule,
  GridModule,
  ExcelModule,
  LayoutModule,
  // POCInputsModule,
  NotificationModule,
  TooltipModule,
  PopupModule,
  GaugesModule,
  ChartsModule,
  POCCommonModule,
  LyResizingCroppingImageModule,
  LyToolbarModule,
  LySliderModule,
  AvatarModule
];

@NgModule({
  declarations: [
    // POCDropdownComponent,
    // POCDatepickerComponent,
    POCNotificationComponent,
    // POCButtonComponent,
    // POCDropdownButtonComponent,
    // POCTimepickerComponent,
    // POCTootltipDirective,
    // POCMultiselectComponent,
     POCDialogComponent,
    // POCDatatableComponent,
    // POCMasterDetailTableComponent,
    // POCImageUploadComponent,
    // POCCheckboxTableComponent,
    // POCRingChartComponent,
    // POCLineChartComponent,
    // POCDonutChartComponent,
    // POCInfoPopupComponent,
    // POCInfoBoxComponent,
    // ChartAxisPipe,
    // CategoryAxisPipe,
    // POCResizingCroppingImagesComponent,
    // POCAvatarComponent
  ],
  imports: [CommonModule, LyThemeModule.setTheme('minima-light'), ...MODULES],
  exports: [
    ...MODULES,
    // POCDropdownComponent,
    // POCDatepickerComponent,
     POCNotificationComponent,
    // POCButtonComponent,
    // POCDropdownButtonComponent,
    // POCTimepickerComponent,
    // POCMultiselectComponent,
     POCDialogComponent,
    // POCDatatableComponent,
    // POCMasterDetailTableComponent,
    // POCImageUploadComponent,
    // POCCheckboxTableComponent,
    // POCRingChartComponent,
    // POCLineChartComponent,
    // POCDonutChartComponent,
    // POCInfoPopupComponent,
    // POCInfoBoxComponent,
    // POCResizingCroppingImagesComponent,
    // POCAvatarComponent
  ],
  providers: [
    { provide: LY_THEME, useClass: MinimaLight, multi: true }, // name: `minima-light`
    { provide: LY_THEME, useClass: MinimaDark, multi: true } // name: `minima-dark`
  ]
})
export class ControlsModule {}
