// Select color input
    const color = $('#colorpicker').val();

// Select size input
    const height = $('#inputHeight').val();
    const width = $('#inputWidth').val();


// When size is submitted by the user, call makeGrid()
  $('sizePicker').submit(function (event){
    event.preventDefault();
    makeGrid(height,width);
  })

function makeGrid(x,y) {
    // x= height, and y= width
    $('tr').remove();
    //tr= table row

    // Build Physical Box
    for (var i = 1; i <= x; i++){
      $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      for (var c = 1; c <=y; c++){
        $('#table' + i).append('<td></td>');
      }
    }
    //add color to cell
    $('td').click(function addColor()){

      if $(this).attr('style') {
          $(this).removeAttr('style')
      } else {
          $(this).attr('style', 'background-color + color');
      }
    }
}
