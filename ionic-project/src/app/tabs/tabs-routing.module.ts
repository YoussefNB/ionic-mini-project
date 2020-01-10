import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '/tabs',
    component: TabsPage,
    children: [{
      path: 'myexpenses',
      loadChildren: () => import('../myexpenses/myexpenses.module').then( m => m.MyexpensesPageModule)
    },
    {
      path: 'addexpense',
      loadChildren: () => import('../addexpense/addexpense.module').then( m => m.AddexpensePageModule)
    }]
  },
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
