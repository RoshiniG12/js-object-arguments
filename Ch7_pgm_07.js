// Converting a string to upper case


var planet = "Jupiter";
var bigPlanet = planet.toUpperCase();

console.log(planet + " becomes " + bigPlanet);

// Further Adventures

// 1) Create a getBig function that accepts a string as an argument and returns it converted to upper case.
var getBig = function (str) {
    return str.toUpperCase();
};

console.log(getBig("earth")); // Output: EARTH
console.log(getBig("Mars"));  // Output: MARS

// 2) Create a getSmall function that accepts a string as an argument and returns it converted to lower case.
var getSmall = function (str) {
    return str.toLowerCase();
};

console.log(getSmall("VENUS"));  // Output: venus
console.log(getSmall("SATURN")); // Output: saturn




/* Further Adventures
 *
 * 1) Create a getBig function that accepts a
 *    string as an argument and returns it
 *    converted to upper case.
 *
 * There is also a toLowerCase string method.
 *
 * 2) Create a getSmall function that accepts a
 *    string as an argument and returns it
 *    converted to lower case.
 *
 */