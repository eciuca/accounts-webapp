import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountsEditComponent } from './accounts-edit/accounts-edit.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AccountsListComponent, AccountsEditComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class AccountsModule { }
