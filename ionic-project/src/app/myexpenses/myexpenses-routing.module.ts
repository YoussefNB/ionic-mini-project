import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyexpensesPage } from './myexpenses.page';

const routes: Routes = [
  {
    path: '',
    component: MyexpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyexpensesPageRoutingModule {}
