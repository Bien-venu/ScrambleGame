const wordText = document.querySelector(".word");
const hintText = document.querySelector(".hint span");
const timeText = document.querySelector(".time b");

const refresh = document.querySelector(".refresh-word");
const check = document.querySelector(".check-word");
const inputField = document.querySelector(".input");
let correctWord, timer;

const initTime = (max) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (max > 0) {
      max--;
      return (timeText.innerHTML = max);
    } else {
      clearInterval(timer);
      alert(`Time off ${correctWord.toUpperCase()} was a correct word`);
      initGame();
    }
  }, 1000);
};

const initGame = () => {
  initTime(30);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");
  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerHTML = wordArray.join("");
  hintText.innerHTML = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  console.log(wordArray, randomObj.word);
};
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase();
  if (!userWord) {
    alert(`Please enter a valid word`);
  } else {
    if (userWord !== correctWord) {
      alert(`Oops ${userWord} is not a corrext word`);
    } else {
      alert(`Congrats ${userWord.toUpperCase()} is a corrext word`);
      initGame();
    }
  }
};
refresh.addEventListener("click", initGame);
check.addEventListener("click", checkWord);
