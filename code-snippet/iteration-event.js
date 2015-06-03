$( function() {  // shorthand for .ready()
   $('p').each( function() {  // Iterate through all selected elements
      console.log($(this));   // $(this) selects the element under operation
      $(this).append('<<< ');
      $(this).prepend(' >>>');
   });
});

$('#menu').hover(
   function() {   // mouseover
      $('#submenu').show();
   },
   function() {   // mouseout
      $('#submenu').hide();
   }
);

$('#box').click(function(evt) {
   var xPos = evt.pageX;
   var yPos = evt.pageY;
   alert('X:' + xPos + ' Y:' + yPos);
});