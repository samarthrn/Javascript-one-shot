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

const depositAmount = deposit();
const numberOfLines = getNumberOfLines();



