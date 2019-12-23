import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  { 
    path: 'myexpenses',
    loadChildren: () => import('./myexpenses/myexpenses.module').then( m => m.MyexpensesPageModule)
  },
  {
    path: 'addexpense',
    loadChildren: () => import('./addexpense/addexpense.module').then( m => m.AddexpensePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
