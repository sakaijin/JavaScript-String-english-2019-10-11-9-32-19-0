// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
console.log(sentence.charAt(0).toUpperCase() + sentence.slice(1,5) + sentence.charAt(5).toUpperCase() +
    sentence.slice(6,16) + sentence.charAt(16).toUpperCase() + sentence.slice(17,19) +
    sentence.charAt(19).toUpperCase() + sentence.slice(20,24));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.substr(1,2));
