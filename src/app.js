var coupon = 'pizza25';
function normalizeCoupon(code) {
    return code.toUpperCase();
}
var couponMessage = "Final coupon is " + normalizeCoupon(coupon);
console.log(couponMessage);
