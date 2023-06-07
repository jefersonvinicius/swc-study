import { Transaction } from "@app/models/transaction";

describe("Transaction", () => {
  it("should create profit", () => {
    const transaction = Transaction.createDeposit(100, 1);
    expect(transaction.type).toBe(Transaction.Type.Deposit);
  });

  it("should create withdrawal", () => {
    const transaction = Transaction.createWithdrawal(100, 1);
    expect(transaction.type).toBe(Transaction.Type.WithDrawal);
  });
});
