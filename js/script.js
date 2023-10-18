// DATA COLLECTION

// km that user wants to travel
const userKm = parseInt(prompt("Hello User, how many kilometres do you want to travel?"));
console.log(userKm, typeof userKm);

// user age
const userAge = parseInt(prompt("Hello User, how old are you?"));
console.log(userAge, typeof userAge);

// ticket price in €
let ticketPrice = 0.21*userKm;

// message var
let message;

// PROGRAM LOGIC

// user age conditions
if(userAge < 18) {
    ticketPrice = (ticketPrice - (0.21*userKm*0.2)).toFixed(2).replace('.', ',');
    console.log(ticketPrice);
} else if (userAge > 65) {
    ticketPrice = (ticketPrice - (0.21*userKm*0.4)).toFixed(2).replace('.', ',');
    console.log(ticketPrice);
} else {
    ticketPrice = ticketPrice.toFixed(2).replace('.', ',');
    console.log(ticketPrice);
}

// html output
message = `<h1>The ticket price is <span class="red-text">${ticketPrice} €</span></h1>`;
const messageElement = document.getElementById('price');
messageElement.innerHTML = messageElement.innerHTML + message;

