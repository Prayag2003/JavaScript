var num1 = 7;
var num2 = 6;

console.log(num1+num2);
console.log(num1*num2);

var ans = num1 < num2;
console.log(ans);

var listPrice = 199;
var sellingPrice = 799;
var discount = ((sellingPrice - listPrice)/(sellingPrice)) * 100 ;
console.log(discount);

// rounding Up 
displayDiscountPercentage = Math.round(discount);
console.log(displayDiscountPercentage + " % OFF ");

var res = listPrice > sellingPrice;
console.log(typeof res);

