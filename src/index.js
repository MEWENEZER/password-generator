const passwordField = document.querySelector(".password__field"),
  lengthItem = document.querySelector(".length-item"),
  lengthRange = document.querySelector(".length-range"),
  numbers = document.getElementById("numbers"),
  symbols = document.getElementById("symbols"),
  generateButton = document.querySelector(".generate-btn");

const charNumber = "1234567890",
  charSymbols = "!?|/@#$%^&*(){}[]=+_-";

generateButton.addEventListener("click", () => {
  let password = "";

  let charLetters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  console.log(charLetters);

  if (numbers.checked) {
    charLetters += charNumber;
    console.log(charLetters);
  }

  if (symbols.checked) {
    charLetters += charSymbols;
    console.log(charLetters);
  }

  for (let i = 0; i < lengthItem.value; i++) {
    password += charLetters[Math.floor(Math.random() * charLetters.length)];
  }

  passwordField.textContent = password;
});

lengthRange.addEventListener("input", () => {
  lengthItem.value = lengthRange.value;
});

lengthItem.addEventListener("input", () => {
  lengthRange.value = lengthItem.value;
});
