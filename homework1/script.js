const phonePrice = 119.95;
const taxRate = 0.05;
const phoneCount = 30;

const totalPriceWithoutTax = phonePrice * phoneCount;

const taxAmount = totalPriceWithoutTax * taxRate;

const totalPriceWithTax = totalPriceWithoutTax + taxAmount;

console.log("Price of 1 Mobile Phone is : $" + totalPriceWithoutTax.toFixed(2));
console.log("price of tax: $" + taxAmount.toFixed(2));
console.log(" total: $" + totalPriceWithTax.toFixed(2));
