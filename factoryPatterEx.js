function Payment(amount){
  this.amount = amount;
  this.bank;
  this.pay = function(){
    console.log('Paying' + this.amount);
  }
}

function CreditCardPayment(amount){
  this.bank = 'PayPal';
}
CreditCardPayment.prototype = Object.create(Payment.prototype, {
  constructor: {value: CreditCardPayment}
});

function BankPayment(amount){
  this.bank = 'BOH';
}
BankPayment.prototype = Object.create(Payment.prototype, {
  constructor: {value: BankPayment}
});

var PaymentFactory = (function(){
  return {
    create: function(paymentType, amount) {
      if(paymentType.toLowerString() === 'credit'){
        return new CreditCardPayment(amount);
      }else if (paymentType.toLowerString() === 'bank'){
        return new  BankPayment(amount);
      }else{
        throw Error('Invalid Payment Type!!!!');
      }
    }
  }

})();
//---------------------------

var payment = PaymentFactory.create('credit', 99);