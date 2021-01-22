// https://github.com/TanvirAhmed177/js-assignment-1

// kilometerToMeter

function kilometerToMeter(kilometer) {
  if (kilometer > 0) {
    var meter = kilometer * 1000;
  } else {
    console.log("Invalid");
  }
  return meter;
}
var result = kilometerToMeter(1000);
console.log(result);

// budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
  var watchPrice = 50;
  var mobilePrice = 100;
  var laptopPrice = 500;

  if (watch > 0 && mobile > 0 && laptop > 0) {
    var totalAmount =
      watch * watchPrice + mobile * mobilePrice + laptop * laptopPrice;
  } else {
    console.log("Invalid");
  }

  return totalAmount;
}

var totalCost = budgetCalculator(4, 6, 9);
console.log(totalCost);

// hotelCost

function hotelCost(day) {
  totalCost = 0;
  if (day > 0 && day <= 10) {
    totalCost = day * 100;
  } else if (day >= 11 && day <= 20) {
    firstPart = 100 * 10;
    var remaining = day - 10;
    secondPart = remaining * 80;
    totalCost = firstPart + secondPart;
  } else {
    var firstPart = 100 * 10;
    var secondPart = 80 * 10;
    var remaining = day - 20;
    var thirdPart = remaining * 50;
    totalCost = firstPart + secondPart + thirdPart;
  }
  return totalCost;
}
var finalAmount = hotelCost(45);
console.log(finalAmount);

// megaFriend

function megaFriend(names) {
  var largestName = names[0];
  for (i = 0; i < names.length; i++) {
    var currentName = names[i];
    if (largestName.length < currentName.length) {
      var largestName = currentName;
    }
  }
  return largestName;
}
var largestName = megaFriend([
  "Alex",
  "John",
  "Alexandra",
  "Mackenzie",
  "Bonner",
]);
console.log(largestName);
