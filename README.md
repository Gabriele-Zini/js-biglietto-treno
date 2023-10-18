# EXRCISE

The program will need to ask the user for the number of kilometers they want to travel and the passenger's age. Based on this information, it will calculate the total price of the trip according to these rules:

The ticket price is defined based on the distance traveled (0.21 € per km).

- a 20% discount is applied for minors.
- a 40% discount is applied for passengers over 65.

The final price output should be in human-readable form (with a maximum of two decimals to indicate cents in the price).
<br>

## SOLUTION

**Data collection**

1.  ask the user for the number of kilometers they want to travel and convert the string in number with parseInt().
2.  ask the user for the passenger's age and convert the string in number with parseInt().
3.  the ticket price is defined based on the distance traveled (0.21 € per km).
    - a 20% discount is applied for minors.
    - a 40% discount is applied for passengers over 65.
4.  set a message variable and a condition flag (to control the program flow) without initialization.

```javascript
// km that user wants to travel
const userKm = parseInt(
  prompt("Hello User, how many kilometres do you want to travel?")
);
console.log(userKm, typeof userKm);

// user age
const userAge = parseInt(prompt("Hello User, how old are you?"));
console.log(userAge, typeof userAge);

// ticket price in €
let ticketPrice = 0.21 * userKm;

// message var
let message;

// condition flag
let conditionFulFilled = false;
```

<br>

**Program logic**

1. set conditions and message in case of user input error for negative age value, age value > 123 and negative kilometers value with the function: conditionBothUncorrect();

```javascript
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
```

2. set conditions and message in case of user input error only for negative kilometers value with the function: conditionKm().

```javascript
// km condition
function conditionKm() {
  if (userKm <= 0) {
    message = "<h1>Kilometers cannot be negative or 0.</h1>";
    console.log(message);
    conditionFulFilled = true;
  }
}
```

3. set conditions and message in case of user input error only for negative age value with the function: conditionAge().

```javascript
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
```

4. calculate the total price of the trip taking into account the kilometers and the user's age with the function: conditionPrice().

```javascript
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
```

5. every condition has the conditionFulfilled = true to prevent the subsequent conditions from being checked or executed. Functions order is crucial.
   <br>

**Output**

1. invoke all the functions by setting the condition: conditionFulfilled === false.
2. it is essential to place the conditions that invoke the functions in the predetermined order for the desired effect to occur. The order cannot be random.
3. whenever the condition inside a function is met, conditionFulfilled is triggered and changes the state of the conditionFulfilled flag from false to true. That will prevent the subsequent conditions from being checked or executed. That's why order is crucial in this algorithm.


```javascript
// html output
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
<br>
```
4. display the result on html with the concatenation of html content instead of replacement.

```javascript
const messageElement = document.getElementById("price");
messageElement.innerHTML = messageElement.innerHTML + message;
```
