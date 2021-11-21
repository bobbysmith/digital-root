const rootNum = document.querySelector('.root');
const rootText = document.querySelector('.root-text');
const num = document.querySelector('.num');
const button = document.querySelector('button');
const error = document.querySelector('.error');
const valueContainer = document.querySelector('#value');
const digitalRootContainer = document.querySelector('#digital-root');
let digit;
const RETURN_CHAR_CODE = 13;

function digitalRoot(n) {
  digit = 0;
  const digitArray = [...n.toString()];

  for (let i = 0; i < digitArray.length; i++) {
    digit += parseInt(digitArray[i]);
  };

  while (digit > 9) {
    digitalRoot(digit);
  }

  return digit;
}

function clear() {
  if (error.textContent) {
    error.textContent = '';
  }

  if (!rootText.classList.contains('hidden')) {
    rootText.classList.add('hidden');
  }
}

function isInputInvalid(n) {
  return isNaN(parseInt(n)) || n < 0 || n % 1 !== 0;
}

function handleEvent() {
  clear();

  const { value } = num;

  if (isInputInvalid(value)) {
    error.textContent = 'Enter a positive integer.';
  } else if (value.length >= 21) {
    error.textContent = 'Sorry, your number is larger than allowed.';
  } else {
    rootText.classList.remove('hidden');
    valueContainer.textContent = value;
    digitalRootContainer.textContent = digitalRoot(parseInt(value));
  }

  num.value = '';
}

document.addEventListener('keypress', (e) => {
  if (e.charCode === RETURN_CHAR_CODE) handleEvent();
});

button.addEventListener('click', handleEvent);
