import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AccountsService} from '../accounts.service';
import {map, mergeMap} from 'rxjs/operators';
import {Account} from '../account';

@Component({
  selector: 'app-accounts-edit',
  templateUrl: './accounts-edit.component.html',
  styleUrls: ['./accounts-edit.component.css']
})
export class AccountsEditComponent implements OnInit {

  account: Account;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private accountsService: AccountsService) {
  }

  ngOnInit(): void {
    this.route.params
      .pipe(
        map(params => params.id), // extract the id parameter
        mergeMap(id => this.accountsService.getAccountById(id)) // use the id to get the account
      )
      .subscribe(account => this.account = account);
  }

  save(account: Account): void {
    this.accountsService.updateAccount(account)
      .subscribe(updateAccount => this.router.navigate(['/accounts']));
  }
}
