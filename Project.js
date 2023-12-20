/*
    1. deposit money
    2. determine the amount to bet 
    3. collect the bet amount 
    4. spin the slot machine 
    5. check if the user won
    6. give the user their wining 
    7. Play again or handle the situation where user does not have money
*/

const prompt = require("prompt-sync")();


const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8
}










const deposit = () => {
    while(true){

        const depositAmount       = prompt ("Enter a Deposit Amount :-  ");
        const numberDepositAmount = parseFloat(depositAmount);


        if(isNaN(numberDepositAmount) || numberDepositAmount <=0){
            console.log("Invalid Deposit Amount please try again")
        }
        else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    const lines         = prompt("Select Number of Lines (1-3):-  ");
    const numberOfLines =  parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines<=0 || numberOfLines >=3) {
        console.log("Select the valid Number of Lines");
    } else {
        return numberOfLines;
    }
};


const getBet = (balance,lines) => {
    const bet =prompt("Enter the total bets per line : ")
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet || nnumberBet <= 0 || numberBet > balance/lines)) {
        console.log("Invalid Bet, Please try again");
    } else {
        return numberBet;
    }
}


let balance =  deposit();
//const depositAmount = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);

