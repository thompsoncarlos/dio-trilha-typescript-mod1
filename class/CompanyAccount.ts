import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accoutNumber: number) {
    super(name, accoutNumber);
  }

  loan = (value: number): void => {
    if (this.validateStatus()) {
        let balance = this.getBalance();
        this.setBalance(balance + value);
        console.log(`You get a loan: ${value}`);
    }
  };

  deposit = (): void => {
    console.log('The company deposit!')
  }

}
