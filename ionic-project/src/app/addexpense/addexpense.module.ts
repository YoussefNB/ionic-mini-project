import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddexpensePageRoutingModule } from './addexpense-routing.module';

import { AddexpensePage } from './addexpense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddexpensePageRoutingModule
  ],
  declarations: [AddexpensePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AddexpensePageModule {}
