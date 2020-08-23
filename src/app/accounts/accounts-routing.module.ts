import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountsListComponent} from './accounts-list/accounts-list.component';
import {AccountsEditComponent} from './accounts-edit/accounts-edit.component';

const routes: Routes = [
  {
    path: 'accounts',
    component: AccountsListComponent
  },
  {
    path: 'accounts/:id/edit',
    component: AccountsEditComponent
  },
  {
    path: 'accounts/new',
    component: AccountsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
