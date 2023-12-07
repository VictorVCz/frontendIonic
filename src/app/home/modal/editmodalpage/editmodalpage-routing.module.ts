import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditmodalpagePage } from './editmodalpage.page';

const routes: Routes = [
  {
    path: '',
    component: EditmodalpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditmodalpagePageRoutingModule {}
