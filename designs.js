// Select color input
    let colorInput = document.getElementById('colorPicker');

// Select size input
    let table = document.getElementById('pixelCanvas');
    let sizePicker = document.getElementById('sizePicker');

    let N = document.getElementById('inputHeight');
    let W = document.getElementById('inputWidth');

  sizePicker.addEventListener('click', MouseEvent => {
    MouseEvent.preventDefault();
    //Please edit remove
    //table.firstElementChild.remove();
    makeGrid(N, W);
    //testing below with console.log
    //console.log(MouseEvent + sizePicker);
    //console.log(N.value, W.value);
    //console.log(colorInput.value);
  });





// When size is submitted by the user, call makeGrid()
  //$('sizePicker').submit(function (event){
    //makeGrid(height,width);
  //})

function makeGrid(N, W){
    //testing below
    //console.log(N.value, W.value);

    for (let i = 0; i <= N; i++){
      let row = table.insertRow(i);
      for (let c = 0; c <= W; c++){
        let cell = row.insertCell(c);
        cell.addEventListener('click', MouseEvent => {
          console.log(MouseEvent);
          cell.style.backgroundColor = colorInput.value;
        });
      }
    }
}
