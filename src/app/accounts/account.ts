export class Account {

  constructor(public id: number,
              public iban: string,
              public holder: string,
              public balance: number) {
  }
}
