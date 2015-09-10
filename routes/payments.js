var stripe = require("stripe")("sk_test_rGRHJzE8a7IFaHRnW10i77EL");



module.exports.makePayment = function(req, res){

	
}

module.exports.getPaymentToken = function(req, res){

	var stripeToken = req.body.stripeToken;

	var charge = stripe.charges.create({
		  amount: 2000, // amount in cents, again
		  currency: "usd",
		  source: stripeToken,
		  description: "Example charge"
		}, function(err, charge) {

		  console.log(charge)
		  if (err && err.type === 'StripeCardError') {
		    console.log(err)
		}	
	});
}

