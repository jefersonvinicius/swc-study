import assert from "assert";
import { Account } from "@app/models/account";

const account = new Account(1, "jefersonvinicius", 1);
account.deposit(100);
account.deposit(150);
account.withdrawal(200);

assert.deepStrictEqual(account.balance, 50);
