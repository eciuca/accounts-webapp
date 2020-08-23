import {Component, OnInit} from '@angular/core';
import {AccountsService} from '../accounts.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {

  accounts: Account[];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit(): void {
    this.accountsService.getAllAccounts()
      .subscribe(accountsListFromBacked => this.accounts = accountsListFromBacked);
  }

}
