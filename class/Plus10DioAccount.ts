import { DioAccount } from "./DioAccount";

export class Plus10DioAccount extends DioAccount{

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (value: number): void => {
        if (this.getStatus()) {
            console.log(`You deposited: ${value}`);
            value += 10;
            this.setBalance(value);
        }
    }
}