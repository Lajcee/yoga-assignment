//***********************************
//Testing my script if it is linked
//***********************************

console.log('js');

// spinner functionality
$(document).ready(function(){
  var spinner = $( "#spinner" ).spinner();

});

// hardcoded values with Limitation
// document.getElementById('table5').addEventListener('click', function(){
//   var i = 0;
//   var n = parseInt(prompt('Enter how many lines you want: '));
//
//   var result = document.getElementById('result');
//
//   result.innerHTML = ''; //clear existing content
//
//   for (i = 1; i <= n; i++){
//     result.innerHTML += i + ' x 5 = ' + i*5 + '<br>' ;
//   }
//
// });

// document.getElementById('table7').addEventListener('click', function(){
//   var i = 0;
//   var n = parseInt(prompt('Enter how many lines you want: '));
//
//
//   var result = document.getElementById('result');
//   result.innerHTML = ''; //clear existing content
//
//   for (i = 1; i <= n; i++){
//     result.innerHTML += i + ' x 7 = ' + i*7 + '<br>' ;
//   }
//
// });
//
// document.getElementById('table9').addEventListener('click', function(){
//   var i = 0;
//   var n = parseInt(prompt('Enter how many lines you want: '));
//
//   var result = document.getElementById('result');
//   result.innerHTML = ''; //clear existing content
//   for (i = 1; i <= n; i++){
//     result.innerHTML += i + ' x 9 = ' + i*9 + '<br>' ;
//   }
//
// });

// Limitation to numbers here
// document.getElementById('tableNumber').addEventListener('change', function(){
//
//   var tableNumber = document.getElementById('tableNumber').value;
//   console.log(tableNumber);
//   var i = 0;
//   var n = parseInt(prompt('Enter how many lines you want: '));
//
//   var result = document.getElementById('result');
//   result.innerHTML = ''; //clear existing content
//   for (i = 1; i <= n; i++){
//     result.innerHTML += i + ' x ' + tableNumber + ' = ' + i*tableNumber + '<br>' ;
//   }
//
// });


//  spinner from jquery-ui with style blitzer
document.getElementById('spinner').addEventListener('change', function(){
  console.log('hello');
  debugger;
  console.log('spinner');
  debugger;
  var spinner = document.getElementById('spinner').value;
  console.log(spinner);
  var i = 0;
  var n = parseInt(prompt('Enter how many lines you want: '));

  var result = document.getElementById('result');
  result.innerHTML = ''; //clear existing content
  for (i = 1; i <= n; i++){
    result.innerHTML += i + ' x ' + spinner + ' = ' + i*spinner + '<br>' ;
  }

});
