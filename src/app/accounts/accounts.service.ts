import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from './account';

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

  deleteAccountById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${AccountsService.URL}${AccountsService.ACCOUNTS_API}/${id}`);
  }

}
