// Finding a character with indexOf
var message = "We choose to go to the Moon!";

var charIndex = message.indexOf("M");
console.log(message.substr(charIndex, 4));  // Output: Moon

var indexGo = message.indexOf("go");
console.log("Index of 'go': " + indexGo);   // Output: Index of 'go': 12

var indexChoose = message.indexOf("choose");
console.log(message.substr(indexChoose, "choose".length));  // Output: choose

var indexOo = message.lastIndexOf("oo");
console.log("Index of 'oo' in 'Moon': " + indexOo);   // Output: Index of 'oo' in 'Moon': 17



/* Further Adventures
 *
 * 1) Use indexOf to find the index of where the
 *    word 'go' starts in the message string.
 *
 * 2) Use indexOf and substr to display the word
 *    'choose' from the message string.
 *
 * There is also a lastIndexOf string method.
 *
 * 3) Use lastIndexOf to find the index of the
 *    'oo' in the word 'Moon' of the message string.
 *
 */