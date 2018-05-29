let coupon: string | null = 'pizza25';

function removeCoupon(coupon): void {
    coupon = null;
}

console.log(coupon);

removeCoupon(coupon);

console.log(coupon);