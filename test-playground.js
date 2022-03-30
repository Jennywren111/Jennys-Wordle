$(function() {

let $button = $('#button');
let $textField = $('#textfield');
  
$button.on('click', checkColor); 

function checkColor() {
  let input = $textField.val();

  if(input === "red" || input === "blue" || input === "lavender" || input === "green" || input === "turquoise" || input === "orange" || input === "pink") {
    changeColor(input);
  }
  else {
    changeColor('#333333');
  }
}

function changeColor(color) {
  $textField.css('color', color);
}

});