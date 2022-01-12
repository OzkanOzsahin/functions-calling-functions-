// two functions: one that greets and one that checks if someone is an adult

const isAdult = function (age) {
   if (age >= 18) {
      return true;
   } else {
      return false;
   }
};

console.log(isAdult(33))

const greet = function (age) {
   if (isAdult(age)) {
      return "Hello there";
   } else {
      return "Hey kiddo";
   }
};

console.log(greet(12)); // "Hello there"
console.log(greet(62)); // "Hey kiddo" 

// VAT calculations 1

const calculateVAT = function(basePrice, VATPercentage) {
   return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
   const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;

}


console.log(calculatePriceIncludingVAT(2, 9));

// VAT calculation 2

const calculateBasePrice = function(PriceIncludingVAT, VATPercentage) {
   const basePrice = PriceIncludingVAT / ((100 + VATPercentage) / 100);
   return basePrice 
};


const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
   const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
   const VAT = priceIncludingVAT - basePrice;
   return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21));
console.log(calculateBasePriceAndVAT(2.18, 9));