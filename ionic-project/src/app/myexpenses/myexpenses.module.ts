import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyexpensesPageRoutingModule } from './myexpenses-routing.module';

import { MyexpensesPage } from './myexpenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyexpensesPageRoutingModule
  ],
  declarations: [MyexpensesPage]
})
export class MyexpensesPageModule {}
