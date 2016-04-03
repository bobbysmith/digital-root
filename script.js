var rootNum = document.querySelector('.root'),
num = document.querySelector('.num'),
button = document.querySelector('button'),
error = document.querySelector('.error'),
digit;


function digitalRoot(n){
  var digitArray = n.toString().split('');
  digit = 0;

  for (var i = 0; i < digitArray.length; i++) {
    digit += parseInt(digitArray[i]);
  };

  while (digit > 9) {
    digitalRoot(digit);
  }

  return digit;
}

document.addEventListener('keypress', function(e){
  if(e.charCode === 13) {
    error.innerHTML = '';
    rootNum.innerHTML = '';
    if (isNaN(parseInt(num.value)) || num.value < 0 || num.value % 1 !== 0) {
      error.innerHTML = 'Enter a positive integer.';
    } else if(num.value.length >= 21) {
      error.innerHTML = 'Sorry, your number is larger than allowed.';
    } else {
      digitalRoot(parseInt(num.value));
      rootNum.innerHTML = '<p style="font-size: 2rem;">The digital root of ' + num.value + ' is:</p>' + '<p>' + digit + '</p>';
    }
  }
});


button.addEventListener('click', function(e){
  error.innerHTML = '';
  rootNum.innerHTML = '';
  if (isNaN(parseInt(num.value)) || num.value < 0 || num.value % 1 !== 0) {
    error.innerHTML = 'Enter a positive integer.';
  } else if(num.value.length >= 21) {
      error.innerHTML = 'Sorry, your number is larger than allowed.';
  } else {
    digitalRoot(parseInt(num.value));
    rootNum.innerHTML = '<p style="font-size: 2rem;">The digital root of ' + num.value + ' is:</p>' + '<p>' + digit + '</p>';
  }
});