// Comparison operators
// == Equality
// != Inequality
// > greater than
// >= greater than equal to
// < less than
// <= less than equal to

// Comparison with data type
// === Strict equality
// !== Strict inequality


// Some comparison operation complications

//String converted to number for comparison
console.log("2" > 1);
console.log("01" == 1);
console.log(null == undefined)
console.log(null === undefined)
console.log("------------")

// Coercion
// This happens automatically when JavaScript tries to 
// perform operations between values of different types.

// '==' performs type coercion before comparison, >,>= performs numeric comparison
console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
console.log(null <= 0)