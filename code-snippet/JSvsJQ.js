// 1. Via the attribute onxxx, for example,
<body onload="init()" >
<body onload="init1();init2()" >
<form onsubmit="validateForm(this)" >

// 2. Via the JavaScript, e.g.,
window.onload = init;   // Named function, no parentheses
function init() { ...... }
 
window.onload = function() { ...... };  // anonymous function
 
document.document.getElementById('#theForm').onsubmit = validateForm;
function validateForm() { ...... }

// jQuery is much simpler, and always separated from the HTML codes. Anonymous functions (instead of named functions) are used extensively. E.g.,
// Bind handler to event
$('#theForm').on('submit', function() { .... });  // Anonymous function
$('#theForm').submit(function() { .... });        // Shorthand, same as above
 
$('#theForm').on('submit', validateForm);    // Named function, no parentheses
function validateForm() { ..... };

$('#btn').on('click', function() { .... });
$('#btn').click(function() { .... });  // same as above 