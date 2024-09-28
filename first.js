//Ticket Pricing 
let ticketPricing = (age) => {
    let ticketPrice;

    if (age <= 12) {
        ticketPrice = 10;
        return ticketPrice;
    } else if (age >= 13 && age <= 17) {
        ticketPrice = 15;
        return ticketPrice;
    } else {
        ticketPrice = 20;
        return ticketPrice;
    }

}

console.log(ticketPricing(56));

//Palindrome checker

let isPalindrome = (str) => {
    let strReverse = str.split('').reverse().join('');
    if (str === strReverse) {
        return true;
    } else {
        return false;
    }
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));