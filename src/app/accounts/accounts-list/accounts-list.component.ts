import {Component, OnInit} from '@angular/core';
import {AccountsService} from '../accounts.service';
import {Account} from '../account';

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
    this.loadAccountsFromBackend();
  }

  delete(id: number): void {
    this.accountsService.deleteAccountById(id)
      .subscribe(() => this.loadAccountsFromBackend());
  }

  loadAccountsFromBackend(): void {
    this.accountsService.getAllAccounts()
      .subscribe(accountsListFromBacked => this.accounts = accountsListFromBacked);
  }
}
