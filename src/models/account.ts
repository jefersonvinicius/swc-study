import { Transaction } from "./transaction";
import banksJson from "../banks.json";

type TEDPayload = {
  withValue: number;
};

export class Account {
  private _transactions: Transaction[] = [];
  readonly bank: (typeof banksJson.banks)[0];

  constructor(readonly id: number, readonly username: string, readonly bankId: number) {
    const bank = banksJson.banks.find((bank) => bank.id === bankId);
    if (!bank) throw new Error("Bank does not exists");
    this.bank = bank;
  }

  get transactions() {
    return Array.from(this._transactions);
  }

  deposit(value: number) {
    this._transactions.push(Transaction.createDeposit(value, this.id));
  }

  withdrawal(value: number) {
    this._transactions.push(Transaction.createWithdrawal(value, this.id));
  }

  makeTEDFor(targetAccount: Account, payload: TEDPayload) {
    const { withValue } = payload;
    const isAccountsWithSameBank = targetAccount.bankId === this.bankId;
    const withdrawalValue = isAccountsWithSameBank ? withValue : this.applyTEDTax(withValue);
    this.withdrawal(withdrawalValue);
    targetAccount.deposit(withValue);
  }

  get balance() {
    return this._transactions.reduce((total, transaction) => total + transaction.value, 0);
  }

  private applyTEDTax(value: number) {
    return value + value * (this.bank.tedTax / 100);
  }
}
