// Get the value of text
$('#formID :text[name="foo"]').val();  // <form id="formID"><input type="text" name="foo">
 
// Get the value from <select>
$('#selectID:selected').val();        // <select id="selecctID">'s selected value
$('select[name="foo"]').val();        // <select name="foo">'s selected value
$('#formID :selected').val()          // <form id="formID"><select ...>
 
// Get the value of checked checkbox
$('#formID input:checkbox[name="foo"]:checked').val()   // <form id="formID"><input type="checkbox" name="foo">
$('#formID input[type="checkbox"][name="foo"]').val()
 
// Get the value of the checked radio
$('#formID input:radio[name="foo"]:checked').val()      // <form id="formID"><input type="radio" name="foo">

//submit
$('#formID').submit( function(evt) {  // submit event handler
   ......
   ......
   // return false to prevent form submission, or evt.preventDefault()
});
