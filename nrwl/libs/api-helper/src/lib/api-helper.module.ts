import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiHelperService } from './api-helper.service';

@NgModule({
  imports: [CommonModule],
  providers: [ApiHelperService]
})
export class ApiHelperModule {
  static forRoot(environment: any): ModuleWithProviders {
    return {
      ngModule: ApiHelperModule,
      providers: [
        ApiHelperService,
        { provide: 'environment', useValue: environment }
      ]
    };
  }
}
