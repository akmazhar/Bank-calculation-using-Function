// console.log('deposit file');

//step-1: add event listener to the deposit button, event handler
//step-2: get deposit amount from the deposit input field
//step-2.5: convert string deposit amount to a number type
//step-3: clear the deposit input field after getting value
//step-4: get the previous deposit total
//step-5: calculate new deposit total and set the value to the deposit total
//step-6: get current balance
//step-7: calculate the new balance and set it to the balance total element

document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('deposit button clicked');
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // console.log(newDepositAmountString); 
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);
   //3
    depositField.value = '';
    //4
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;
    //6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
    //7
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
    
})


/* < WITHDRAW SECTION > */

//step-1add event handler with the withdraw button
//step-2. get the withdraw button
//step-3.clear the input field
//step-4: get the previous withdraw total
//step-5: calculate total withdraw amount and set the value to the withdraw total element
//step-6: calculate new balance and set it to the balance total element
//step-7: 

//s-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('withdraw button clicked');

//s-2:
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // console.log(newWithdrawAmount);

//s-3:
withdrawField.value = '';

//s-4:
const withdrawTotalElement = document.getElementById('withdraw-total');
const previousWithdrawTotalString = withdrawTotalElement.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//s-5:
const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = newWithdrawTotal;

//s-6:
const balanceElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//s-7:
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceElement.innerText = newBalanceTotal;
})