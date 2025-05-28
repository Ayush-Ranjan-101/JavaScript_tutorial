// Immediately Invoked Function Expressions (IIFE)
// Called immediately ones after it is defined

(function chai(){
    // named IIFE
    console.log('DB Connected')
})();

// Passing values to IIFE
( (name) => {
    console.log(`DB Connected by ${name}`)
})('Ayush');

// Either end the previous statement with ; or 
// Start the IIFE with a ;
// So that it does'nt throw a TypeError