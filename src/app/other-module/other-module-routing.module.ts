import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OtherComponentComponent} from '../other-component/other-component.component';

const routes: Routes = [
  {
    path: 'otherComponent',
    component: OtherComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherModuleRoutingModule { }
