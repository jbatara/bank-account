// BACK END
function Transactions(amount, date) {
  this.amount = amount;
  this.date = date;
  t
}

function Account() {
  this.balance = 0;
  this.transactions = [];
}

Acccount.prototype.deposit = function(amount) {
  if (amount > 0) {
    var newTransaction = new Transaction(amount, new Date());
    this.transactions.push(newTransaction);
    return amount + this.balance;
  } else {
    return "Error, you broke.";
  }

}

Account.prototype.withdrawl = function(amount) {
  if (amount > 0) {
    var newTransaction = new Transaction(-amount, new Date());
    if (this.balance > amount) {
      this.balance = this.balance - amount;
      this.transaction.push(newTransaction);
      return this.balance;
    } else {
      return "Error, you broke.";
    }
  }
}

Account.prototype.total = function(balance) {
  
}
