import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlsModule } from './controls/controls.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { POCCommonModule } from './common/common.module';
import { ApiHelperService } from './services/api-helper.service';
@NgModule({
  imports: [
    ControlsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    POCCommonModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ControlsModule,
    POCCommonModule
  ],
  declarations: [],
  providers: [ApiHelperService]
})
export class UiModule {
  static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: UiModule,
      providers: [
        ApiHelperService,
        { provide: 'environment', useValue: environment }
      ]
    };
  }
}
