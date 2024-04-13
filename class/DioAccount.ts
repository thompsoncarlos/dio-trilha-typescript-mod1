export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  //   // Each method should have only one responsability
  //   setName = (name: string): void => {
  //     this.name = name;
  //     console.log("Update name with sucess!")
  //   }

  getName = (): string => {
    return this.name;
  };

  getAccountNumber = (): number => {
    return this.accountNumber;
  };

  getBalance = (): number => {
    return this.balance;
    console.log(this.balance);
  };

  setBalance = (balance: number) => {
    this.balance = balance;
  };

  getStatus = (): boolean => {
    return this.status;
  };

  setStatus = (status: boolean) => {
    this.status = status;
  };

  deposit = (value: number): void => {
    this.balance += value;
    console.log(`You deposited: ${value}`);
  };

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance > value) {
      this.balance -= value;
      console.log(`You withdrawed: ${value}`);
    }
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Invalid account!");
  };
}
