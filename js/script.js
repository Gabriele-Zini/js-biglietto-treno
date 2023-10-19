// DATA COLLECTION

// km that user wants to travel
const userKm = parseInt(
  prompt("Hello User, how many kilometres do you want to travel?")
);
console.log(userKm, typeof userKm);

// user age
const userAge = parseInt(prompt("Hello User, how old are you?"));
console.log(userAge, typeof userAge);



// message var
let message;

// condition flag
let conditionFulFilled = false;


// PROGRAM LOGIC

// ticket price in €
let ticketPrice = 0.21 * userKm;

// age and km condition
function conditionBothUncorrect() {
  if (userAge < 0 && userKm <= 0) {
    message = "<h1>Age is uncorrect and Kilometers cannot be negative";
    conditionFulFilled = true;
  } else if (userAge > 123 && userKm <= 0) {
    message =
      "<h1>Are you kidding me? The world record for the oldest age in history is 122 years and 64 days and btw Kilometers cannot be negative";
    conditionFulFilled = true;
  }
}

// km condition
function conditionKm() {
  if (userKm <= 0) {
    message = "<h1>Kilometers cannot be negative or 0.</h1>";
    console.log(message);
    conditionFulFilled = true;
  }
}

// age condition
function conditionAge() {
  if (userAge < 0) {
    message = "<h1>Age cannot be negative</h1>";
    console.log(message);
    conditionFulFilled = true;
  } else if (userAge > 123) {
    message =
      "<h1>Are you kidding me? The world record for the oldest age in history is 122 years and 64 days</h1>";
    console.log(message);
    conditionFulFilled = true;
  }
}

// price conditions
function conditionPrice() {
  if (userAge < 18) {
    ticketPrice = (ticketPrice - 0.21 * userKm * 0.2)
      .toFixed(2)
      .replace(".", ",");
    console.log(ticketPrice);
    conditionFulFilled = true;
  } else if (userAge > 65) {
    ticketPrice = (ticketPrice - 0.21 * userKm * 0.4)
      .toFixed(2)
      .replace(".", ",");
    console.log(ticketPrice);
    conditionFulFilled = true;
  } else {
    ticketPrice = ticketPrice.toFixed(2).replace(".", ",");
    console.log(ticketPrice);
    conditionFulFilled = true;
  }
  message = `<h1>The ticket price is <span class="red-text">${ticketPrice} €</span></h1>`;
}


// OUTPUT

// display output
if (conditionFulFilled === false) {
  conditionBothUncorrect();
}
if (conditionFulFilled === false) {
  conditionKm();
}
if (conditionFulFilled === false) {
  conditionAge();
}
if (conditionFulFilled === false) {
  conditionPrice();
}

const messageElement = document.getElementById("price");
messageElement.innerHTML = messageElement.innerHTML + message;
