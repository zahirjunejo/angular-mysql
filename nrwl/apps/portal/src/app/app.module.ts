import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { SpinnerComponent } from './shared/spinner.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';
import { AppRoutes } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ApiHelperModule } from '@poc/api-helper';
import { environment } from '../environments/environment';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { SandboxComponent } from './sandbox/sandbox.component';

const config: SocketIoConfig = {
  url: environment.socketUrl,
  options: {}
};

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    SpinnerComponent,
    AppSidebarComponent,
    AppHeaderComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    ApiHelperModule.forRoot(environment),
    RouterModule.forRoot(AppRoutes, { initialNavigation: 'enabled' }),
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    // Any dialog components go here if you wanna use them.
  ]
})
export class AppModule {}
