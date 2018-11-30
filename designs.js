// Select color input
    let colorInput = document.getElementById('colorPicker');

// Select size input
    let table = document.getElementById('pixelCanvas');
    let sizePicker = document.getElementById('sizePicker');

    let N = document.getElementById('inputHeight');
    let W = document.getElementById('inputWidth');

  sizePicker.addEventListener('click', MouseEvent => {
    MouseEvent.preventDefault();
    console.log(MouseEvent + sizePicker);
    console.log(N.value, W.value);
  });





// When size is submitted by the user, call makeGrid()
  //$('sizePicker').submit(function (event){
    //makeGrid(height,width);
  //})

//function makeGrid()
    // x= height, and y= width
    //$('tr').remove();
    //tr= table row

    // Build Physical Box
    //for (let i = 1; i <= x; i++){
      //$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
      //for (let c = 1; c <=y; c++){
        //$('#table' + i).append('<td></td>');
      //}
    //}
    //add color to cell
    //$('td').click(function addColor(){

      //if ($(this).attr('style')) {
          //$(this).removeAttr('style')
      //} else {
          //$(this).attr('style', 'background-color;' + color);
      //}
    //})
//}
