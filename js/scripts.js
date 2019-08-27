var myAccount = new Account();

// FRONT END
$(document).ready(function(){
  $(".bankForm").submit(function(event){
    event.preventDefault();
    var userDeposit = parseFloat($('[name=deposit]').val());
    var userWithdrawal = parseFloat($('[name=withdrawal]').val());

    if(userDeposit){
      $(".output").text(myAccount.deposit(userDeposit));
    }else if (userWithdrawal){
      $(".output").text(myAccount.withdrawal(userWithdrawal));
    }else{
      $(".output").text("No deposit or withdrawal inputted");
    }

  });
});









// BACK END
function Transaction(amount, date) {
  this.amount = amount;
  this.date = date;
}

function Account() {
  this.balance = 0;
  this.transactions = [];
}

Account.prototype.deposit = function(amount) {
  if (amount > 0) {
    var newTransaction = new Transaction(amount, new Date());
    this.transactions.push(newTransaction);
    this.balance += amount;
    return Math.round(this.balance*100)/100;
  } else {
    return "Error, you broke.";
  }

}

Account.prototype.withdrawal = function(amount) {
  if (amount > 0) {
    var newTransaction = new Transaction(-amount, new Date());
    if (this.balance > amount) {
      this.balance = this.balance - amount;
      this.transaction.push(newTransaction);
      return Math.round(this.balance*100)/100;
    } else {
      return "Error, you broke.";
    }
  } else {
    return "Why you tryna take out negative dollars??";
  }
}
