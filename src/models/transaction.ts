export class Transaction {
  protected constructor(
    readonly accountId: number,
    readonly rawValue: number,
    readonly type: Transaction.Type
  ) {}

  static createDeposit(value: number, forAccountId: number) {
    return new Transaction(forAccountId, value, Transaction.Type.Deposit);
  }

  static createWithdrawal(value: number, forAccountId: number) {
    return new Transaction(forAccountId, value, Transaction.Type.WithDrawal);
  }

  get value() {
    if (this.type === Transaction.Type.Deposit) return this.rawValue;
    return -this.rawValue;
  }
}

export namespace Transaction {
  export enum Type {
    Deposit = "deposit",
    WithDrawal = "withdrawal",
  }
}
