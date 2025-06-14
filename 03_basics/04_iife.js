//++++++++++++ Immediately Invoked Function Expressions (IIFE) ++++++++++++//

/* Immediately Invoked Function Expressions (IIFE) are JavaScript functions that are executed immediately after they are defined. They are typically used to create a local scope for variables to prevent them from polluting the global scope.  */

// basic code
function chai() {
    console.log(`DB Connected`);   
}
chai();

// IIFE code
/* The function is wrapped in parentheses (function() { ... }), followed by () to immediately invoke it. */
// Avoid polluting the global scopes.

// Named IIFE
(function chai() {
    console.log(`DB Connected`);   
})();

/* IIFE in Arrow Function */
// Unnamed IIFE
(() => {
    console.log(`DB Connected Two`)
})();

/* Declare a variable in IIFE in Arrow Function */
// Parameters IIFE
( (name) => {
    console.log(`DB Connected Three, ${name}`);
})("John Doe")
