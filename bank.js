  document.getElementById('btn-deposit').addEventListener('click', function(){
    
    let depositField = document.getElementById('deposit-field');
    let depositAmount =parseFloat(depositField.value)  ;

    let depositTotal = document.getElementById('deposit-total');
    let depositTotalAmount = parseFloat(depositTotal.innerText) ;
    
    depositTotal.innerText = depositAmount;

    newTotalDepositAmount = depositAmount + depositTotalAmount;
    depositTotal.innerText = newTotalDepositAmount;
    depositField.value = '';

    let totalBalance = document.getElementById('total-balance');

    let totalBalanceAmount =parseFloat(totalBalance.innerText) ;

    let newTotalBalanceAmount = totalBalanceAmount + depositAmount;
    totalBalance.innerText= newTotalBalanceAmount
    console.log(totalBalanceAmount);
    

  })
//   Withdraw field
document.getElementById('btn-withdraw').addEventListener('click', function(){
    let withdrawField = document.getElementById('withdraw-field');
    let withdrawAmount =parseFloat(withdrawField.value) ;

    let withdrawTotal = document.getElementById('withdraw-amount');
    let previousWithdrawAmount =parseFloat(withdrawTotal.innerText) ;
    let totalWithdrawAmount = withdrawAmount + previousWithdrawAmount;
    withdrawTotal.innerText= totalWithdrawAmount;
    withdrawField.value ='';
    let previousBalance = document.getElementById('total-balance');
    let previousBalanceAmount =parseFloat(previousBalance.innerText) ;
    let newBalance = previousBalanceAmount - withdrawAmount;
    previousBalance.innerText = newBalance;

    
})