import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { AccountsListComponent } from './accounts-list/accounts-list.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [AccountsListComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    HttpClientModule
  ]
})
export class AccountsModule { }
