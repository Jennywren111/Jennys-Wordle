$(function() {

let $button = $('#button');
let $textField = $('#textfield');
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet", "pink"];
  
$button.on('click', checkColor); 

function checkColor() {
  let input = $textField.val();

  if(colors.includes(input)) {
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