class bankAccount {
    constructor(intRates, balances) {
        this.balance = balances;
        this.intRate = intRates;

    };
    deposit(amount) {
        this.balance += amount;
        // console.log('deposited :'+amount);
        // console.log('Value of account is '+this.balance);
        return this;
    };
    withdraw(amount) {
        if (this.balance - amount < 0) {
            console.log("Insufficient funds: Charging a $5 fee")
            this.balance -= 5;
        }
        this.balance -= amount;
        return this;

    };
    displayAccountInfo() {
        console.log("Balance : " + this.balance)
        // return this;
    };
    yieldInterest() {
        if (this.balance >= 0) {
            this.balance *= (1 + this.intRate);
        };
        return this;
    };
};

//Note:: interest is in defaulted to decimal.

// const john = new bankAccount(.01,0);
// const ninja = new bankAccount(.02,0);

// john.deposit(100).deposit(100).yieldInterest().displayAccountInfo();
// ninja.deposit(1000).deposit(1000).withdraw(10).withdraw(10).withdraw(10).withdraw(10).yieldInterest().displayAccountInfo();

// Establishing a relationship between class user and bankAccount
class user {
    constructor(userName, userEmail) {
        this.name = userName;
        this.email = userEmail;
        this.account = new bankAccount(0.02,0);
    }
    makeDeposit(amount){
        this.account.deposit(amount);
    };
    makeWithdrawal(amount){
        this.account.makeWithdrawal(amount);
    };
    displayUserBalance(){
        this.account.displayAccountInfo();
    };

}

const ninja = new user('ninja','ninja@codingdojo.com');
ninja.makeDeposit(100);
ninja.displayUserBalance();
console.log(ninja);