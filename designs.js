// Select color input
    let colorInput = document.getElementById('colorPicker');
    let sumbitButton = document.getElementById('sumbitButton');

// Select size input
    let table = document.getElementById('pixelCanvas');
    let sizePicker = document.getElementById('sizePicker');

    let N = document.getElementById('inputHeight');
    let W = document.getElementById('inputWidth');

  sumbitButton.addEventListener('click', MouseEvent => {
    MouseEvent.preventDefault();
    //Please edit remove
    //table.firstElementChild.remove();
    makeGrid(N, W);
    //testing below with console.log
  //  console.log(MouseEvent + sizePicker);
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
    console.log("N is: " + N);
    for (let i = 0; i <= N.value; i++){
      let row = table.insertRow(i);
      console.log(i);
      for (let c = 0; c <= W.value; c++){
        let cell = row.insertCell(c);
        cell.addEventListener('click', MouseEvent => {
          console.log(MouseEvent);
          cell.style.backgroundColor = colorInput.value;
        });
      }
    }
}
