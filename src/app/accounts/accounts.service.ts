import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  public static URL = 'http://localhost:8080';
  public static ACCOUNTS_API = '/accounts';

  constructor(private httpClient: HttpClient) {
  }

  getAllAccounts(): Observable<Account[]> {
    // AccountsService.URL + AccountsService.ACCOUNTS_API
    return this.httpClient.get<Account[]>(`${AccountsService.URL}${AccountsService.ACCOUNTS_API}`);
  }

}
