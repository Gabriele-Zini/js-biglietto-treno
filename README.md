# EXRCISE


The program will need to ask the user for the number of kilometers they want to travel and the passenger's age. Based on this information, it will calculate the total price of the trip according to these rules:

The ticket price is defined based on the distance traveled (0.21 € per km).
:child: A 20% discount is applied for minors.
:older_man: A 40% discount is applied for passengers over 65.

The final price output should be in human-readable form (with a maximum of two decimals to indicate cents in the price).
<br>

## SOLUTION

**data collection**
1.  ask the user for the number of kilometers they want to travel and convert the string in number with parseInt().
2. ask the user for the passenger's age and convert the string in number with parseInt().
3. The ticket price is defined based on the distance traveled (0.21 € per km).
    - a 20% discount is applied for minors.
    - a 40% discount is applied for passengers over 65.

**program logic**
1. set conditions for differente age cases
2. calculate the total price of the trip taking into account the kilometers and the user's age.

**output**
1. display the result on html