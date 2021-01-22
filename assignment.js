// https://github.com/TanvirAhmed177/js-assignment-1

// kilometerToMeter

function kilometerToMeter(kilometer) {
  if (kilometer == 0) {
    return "No number inserted";
  } else {
    var meter = kilometer * 1000;

    return meter;
  }
}
var result = kilometerToMeter(1000);
console.log(result);

// budgetCalculator

function budgetCalculator(watch, mobile, laptop) {
  var watchPrice = watch * 50;
  var mobilePrice = mobile * 100;
  var laptopPrice = laptop * 500;

  var totalAmount = watchPrice + mobilePrice + laptopPrice;
  return totalAmount;
}

var totalCost = budgetCalculator(10, 5, 3);
console.log(totalCost);

// hotelCost

function hotelCost(day) {
  var firstTenDay = 100;
  var secondTenDay = 80;
  var thirdTenDay = 50;

  if (day > 0 && day <= 10) {
    var totalCost = day * firstTenDay;
    return totalCost;
  } else if (day >= 11 && day <= 20) {
    var totalCost = (day - 10) * secondTenDay + 1000;
    return totalCost;
  } else {
    var totalCost = (day - 20) * thirdTenDay + 1800;
    return totalCost;
  }
}

var finalAmount = hotelCost(65);
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
