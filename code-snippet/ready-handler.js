// 1. On "ready", callback an anonymous function (with no argument). Most commonly-used
$(document).ready( function() {
   console.log('ready');
});
 
// 2. On "ready", callback a pre-defined function (with no argument)
$(document).ready(foo);
function foo() {   // function can be defined later
   console.log("foo");
}
 
// 3. Use a function variable - variable must be defined before used.
var bar = function() {   // function variable
   console.log("bar");
}
$(document).ready(bar);  // pass a function variable
 
// 4. This won't work!
//    .ready() takes a function object, not a statement!
// $(document).ready(alert("This won't work!"));