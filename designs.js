// Select color input
var color;

// Select size input
var height, width;

// When size is submitted by the user, call makeGrid()
$('sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val();
  width= $('inputWidth').val();
  makeGrid(height, width);
  console.log('Height: ' + height + ' and width: ' + width);
})

function makeGrid() {

// Your code goes here!

}
