import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditmodalpagePageRoutingModule } from './editmodalpage-routing.module';

import { EditmodalpagePage } from './editmodalpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditmodalpagePageRoutingModule
  ],
  declarations: [EditmodalpagePage]
})
export class EditmodalpagePageModule {}
