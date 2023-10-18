# EXRCISE


The program will need to ask the user for the number of kilometers they want to travel and the passenger's age. Based on this information, it will calculate the total price of the trip according to these rules:

The ticket price is defined based on the distance traveled (0.21 € per km).
A 20% discount is applied for minors.
A 40% discount is applied for passengers over 65.

The final price output should be in human-readable form (with a maximum of two decimals to indicate cents in the price).
<br>

## SOLUTION

**Data collection**
1.  ask the user for the number of kilometers they want to travel and convert the string in number with parseInt().
2. ask the user for the passenger's age and convert the string in number with parseInt().
3. The ticket price is defined based on the distance traveled (0.21 € per km).
    - a 20% discount is applied for minors.
    - a 40% discount is applied for passengers over 65.

``` javascript
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
```
<br>



**Program logic**
1. set conditions for differente age cases
2. calculate the total price of the trip taking into account the kilometers and the user's age.
``` javascript
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
```
<br>

**Output**
1. display the result on html with the concatenation of html content instead of replacement.

``` javascript

// html output
message = `<h1>The ticket price is <span class="red-text">${ticketPrice} €</span></h1>`;
const messageElement = document.getElementById('price');
messageElement.innerHTML = messageElement.innerHTML + message;

```
