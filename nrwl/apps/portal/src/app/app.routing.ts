import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
// import { MachineManagementComponent } from './machine-management/machine-management.component';
// import { MotorManagementComponent } from './motor-management/motor-management.component';
// import { MachineDetailComponent } from './machine-detail/machine-detail.component';
import { SandboxComponent } from './sandbox/sandbox.component';
// import { GraphDetailComponent } from './graph-detail/graph-detail.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      // {
      //   path: 'machine-management',
      //   component: MachineManagementComponent
      // },
      // {
      //   path: 'motor-management',
      //   component: MotorManagementComponent
      // },
      {
        path: 'sandbox',
        component: SandboxComponent
      }
      // {
      //   path: 'machine-detail/:id',
      //   component: MachineDetailComponent
      // }
    ]
  }
];
