console.log('script sourced!');
// console.log(document);
$(document).ready(function() {

  // when the DOM is loaded this function will run
  $('body').append('<p>Hello!</p>');
  $('#albums').append('<ul></ul>');
  $('ul').append('<li>Dark Side of the Moon</li>');
  $('ul').append('<li>Kill the Moonlight</li>');
  $('ul').append('<li>Houses of the Holy</li>');


  // remove elements
  $('h1').remove();
  $('ul').empty();
});
