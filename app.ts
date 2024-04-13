import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { Plus10DioAccount } from "./class/Plus10DioAccount";

console.log("# Welcome to DioBank! #\n");

// Task 1:
/* Deposit */
console.log("## People Account ##\n");

const peopleAccount: PeopleAccount = new PeopleAccount(12345, "Thompson", 10);
console.log("### Debit Operation: ###");

console.log("Balance Available: ", peopleAccount.getBalance());
peopleAccount.deposit(500);
console.log("Current Balance: ", peopleAccount.getBalance());

/* Withdraw */
console.log("\n### Withdraw Operation: ###");

console.log("Balance Available: ", peopleAccount.getBalance());
peopleAccount.withdraw(200);
console.log("Current Balance: ", peopleAccount.getBalance());

// Task 2::
console.log("\n## Company Account ##");

const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
console.log("\n### Loan Operation: ###");
console.log("Current Balance: ", companyAccount.getBalance());
companyAccount.loan(600);
console.log("Current Balance: ", companyAccount.getBalance());

// Task 3:
const newAccount: Plus10DioAccount = new Plus10DioAccount('Eduardo', 11);
console.log("\n### New Account with Deposit plus 10 operation: ###")
newAccount.deposit(100);
console.log("Current Balance: ", newAccount.getBalance());

// Testing Account with status false 
/* To test uncomment sentences below */
// console.log("\n### Testing Status False: ###")

// console.log('People Account - Status:false')
// peopleAccount.setStatus(false);
// peopleAccount.withdraw(200);

// console.log('Company Account - Status:false')
// companyAccount.setStatus(false);
// companyAccount.loan(600);
