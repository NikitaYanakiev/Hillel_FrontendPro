/*
+0) prepare data
+1) show all products with prices
+2) show prompt with request to enter product number (validation)
+3) show prompt with request to enter product amount (validation)
+4) calculate price
+5) check if discount available
+6) if so - calculate discount
+7) then show final price
*/

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(`#${i + 1} ${products[i].name} - $${products[i].price}`);
  }
}

function getProductNumber() {
  let productNumber;
  do {
    productNumber = parseInt(prompt('Enter product number'));
  } while(productNumber < 1 || productNumber > products.length || isNaN(productNumber))
  return productNumber;
}

function getProductAmount() {
  let productAmount;
  do {
    productAmount = parseInt(prompt('Enter amount of products you wanna buy'));
  } while(productAmount < 1 || productAmount > productToBuy.availability || isNaN(productAmount));
  return productAmount;
}

function calculatePrice() {
  return productToBuy.price * productAmount;
}

function isDiscount() {
  const discount = 0.2;
  const discountStartsFrom = 10000; 

  if (price >= discountStartsFrom) {
    const finalPrice = price - price * discount;
    return finalPrice;
  }
}

showProducts();
const productNumber = getProductNumber();
const productToBuy = products[productNumber - 1];
const productAmount = getProductAmount();
const price = calculatePrice();

if (isDiscount()) {
  console.log(`Congrats! You get discount. Your final price is $${isDiscount()}`)
} else {
  console.log(`The final price is $${price}`);
}