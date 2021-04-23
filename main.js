// calculate ticket price

// Ask customer Number of kms
var kilometers = prompt('How far would you travel?');
// console.log('kilometers');

// Ask customer Age
var age = prompt('How old are you?');
// console.log('age');

// General Ticket price
var tPrice = kilometers * 0.21;
// console.log('tPrice');

//Prices with and without Discounts

if ( age < 18 ){
    tPrice = tPrice * 0.20;
    document.getElementById('info').innerHTML = 'The price of your ticket is :';
}else if ( age > 65 ){
    tPrice= tPrice * 0.40;
    document.getElementById('info').innerHTML = 'The price of your ticket is :';
}else{
    document.getElementById('info').innerHTML = tPrice;
}