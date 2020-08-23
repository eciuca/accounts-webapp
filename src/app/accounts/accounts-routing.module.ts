import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsListComponent} from './accounts-list/accounts-list.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
