import { Account } from "@app/models/account";

describe("Account", () => {
  it("should calculate balance", () => {
    const account = new Account(1, "jeferson", 1);
    account.deposit(1000);
    account.deposit(1000);
    account.withdrawal(3000);
    expect(account.balance).toBe(-1000);
    account.deposit(2000);
    expect(account.balance).toBe(1000);
    expect(account.transactions).toHaveLength(4);
  });

  it("should make ted tranfer without tax if it to same bank", () => {
    const account1 = new Account(1, "jeferson", 1);
    const account2 = new Account(2, "Ciclano", 1);
    account1.makeTEDFor(account2, { withValue: 1000 });
    expect(account1.balance).toBe(-1000);
    expect(account2.balance).toBe(1000);
  });

  it("should make ted tranfer with tax if it to different bank", () => {
    const account1 = new Account(1, "jeferson", 1);
    const account2 = new Account(2, "Ciclano", 2);
    account1.makeTEDFor(account2, { withValue: 1000 });
    expect(account1.balance).toBe(-1012);
    expect(account2.balance).toBe(1000);
  });
});
