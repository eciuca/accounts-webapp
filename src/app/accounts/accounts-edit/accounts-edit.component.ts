import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountsService} from '../accounts.service';
import {map, mergeMap} from 'rxjs/operators';
import {Account} from '../account';
import {of, Subscription} from 'rxjs';

@Component({
  selector: 'app-accounts-edit',
  templateUrl: './accounts-edit.component.html',
  styleUrls: ['./accounts-edit.component.css']
})
export class AccountsEditComponent implements OnInit, OnDestroy {

  account: Account;
  subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountsService: AccountsService) {
  }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        map(params => params.id), // extract the id parameter
        mergeMap(id => {
          if (id) {
            return this.accountsService.getAccountById(id);
          } else {
            return of(Account.newAccount());
          }
        }) // use the id to get the account
      )
      .subscribe(account => this.account = account);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  save(account: Account): void {
    if (account.id) { // is an existing account
      this.accountsService.updateAccount(account)
        .subscribe(updateAccount => this.router.navigate(['/accounts']));
    } else {
      this.accountsService.createNewAccount(account)
        .subscribe(updateAccount => this.router.navigate(['/accounts']));
    }
  }
}
