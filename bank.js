
//array of customer info objects

const customerAccounts = [
    {
        accountId: 2501,
        accountHolder: "Ogunbunmi Oluwafemi",
        balance: 100000,
        type: "Savings"
    },
    {
        accountId: 2502,
        accountHolder: "Og-george",
        balance: 95000,
        type: "Checking"
    },
    {
        accountId: 2503,
        accountHolder: "Adebola Moyinoluwa",
        balance: 93000,
        type: "Saving for my new house"
    }
];

const BANK_NAME = "My Bank Inc"



//function that check balance

function checkBalance(accountId) {
    const account = customerAccounts.find((acc) => acc.accountId === accountId);
    if (account) {
        console.log(`${account.accountHolder}'s balance:  ₦${account.balance.toFixed(2)}`);
    } else {
        console.log("Account not found");
    }
}

function findAccountById(accountId) {
    const account = customerAccounts.find(acc => acc.accountId === accountId);
    if (account) {
        return account; 
    } else {
        console.log("Account not found.");
        return null; // return null when not found
    }
}


//function to deposit money

function deposit(accountId, amount) {
    const account = customerAccounts.find((acc) => acc.accountId === accountId);
    if (account) {
        if (amount > 0) {
            account.balance += amount;
            console.log(`Deposit succesful ₦${amount.toFixed(2)}
            added to ${account.accountHolder}'s account at ${BANK_NAME}.`);
            console.log(`New balance: ₦${account.balance.toFixed(2)}`);
        } else {
            console.log("Please put in a vaid amount.");
        }
    } else {
        console.log("Account not found");
    }
}


//function to withdraw money

function withdraw(accountId, amount) {
    const account = customerAccounts.find((acc) => acc.accountId === accountId);
    if (account) {
        const FEE_RATE = 0.01;
        const fee = amount * FEE_RATE;
        const feeDeduction = amount + fee
        if (feeDeduction <= account.balance) {
            account.balance -= feeDeduction;
            console.log(
                `Withdrawal succesful! ₦${amount.toFixed(2)} withdrawn (fee: ₦${fee.toFixed(2)}).`
             );
             console.log(`New balance: ₦${account.balance.toFixed(2)}`);
        } else {
            console.log(`Insufficient funds. Unable to withdraw ₦${amount.toFixed(2)}`);
        }
    } else {
        console.log("Account not found.");
    }
}

console.log();
try {
    console.log("Outside FEE_RATE:", FEE_RATE);
} catch (error) {
    console.log("Error: Something went wrong, please try again later");
}

console.log();
checkBalance(2501);
checkBalance(2502);

console.log();
deposit(2501, 500.00);

console.log();
withdraw(2501, 350.00);

console.log();
withdraw(2502, 100000.00);

console.log();
checkBalance(2501);
checkBalance(2502);
checkBalance(2503);

console.log(findAccountById(2501));
console.log(findAccountById(2502));
console.log(findAccountById(2503));











