$(function() {

let $button = $('#button');
let $textField = $('#textfield')
  
$button.on('click', changeColor); 

function changeColor() {
  $textField.addClass('red');
}

});