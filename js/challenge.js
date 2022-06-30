// Hell yeah, get some, lol
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const heart = document.getElementById("heart");
const commentsContainer = document.getElementById("list");
const form = document.getElementById("comment-form");
  
let timerID = setInterval(() => {
  increment()
}, 1000)

// ----Plus button functionality----
function increment() {
  const currentCounterAsAString = document.getElementById("counter");
  const counter = parseInt(currentCounterAsAString.innerText);
  currentCounterAsAString.innerText = counter + 1;
}

plus.addEventListener("click", function() {
  increment();
});

//event listener for click on minus
minus.addEventListener("click", function() {
  const currentCounterAsAString = document.getElementById("counter");
  const counter = parseInt(currentCounterAsAString.innerText);
  currentCounterAsAString.innerText = counter - 1;
});

// ----Heart button functionality----
heart.addEventListener("click", () => {
  // 1 has been liked <span>4</span> times

  const currentNumber = counter.textContent;
  const likeElement = document.getElementById(`likes-${currentNumber}`)
  const likesContainer = document.querySelector("ul.likes");

  if (!likeElement) {
    const li = document.createElement("li");
    // span will translate if using innerHTML instead of textContent
    const string = `${currentNumber} has been liked <span>1</span> times`;

    li.id = `likes-${currentNumber}`;
    li.innerHTML = string;

    likesContainer.append(li);
  } else {
      const innerSpanElement = likeElement.querySelector("span")
      const currentLikeNumberAsAString = innerSpanElement.textContent
      const likeNumber = parseInt(currentLikeNumberAsAString)
      innerSpanElement.textContent = likeNumber + 1
  }
})

// ----Comment submission functionality----
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const userInput = e.target.comment.value;
  const p = document.createElement('p');

  p.textContent = userInput;
  commentsContainer.append(p);

  e.target.reset();
})

// ----Functionality for Timer and Pause Button----

// The return value of setInterval is a numeric identifier of
// the current timer's value. This can be used to pause
// the timed increments
const pauseButton = document.getElementById('pause');
let paused = false;

pauseButton.addEventListener('click', () => {
  const buttons = [plus, minus, heart]

  if(paused) {
    timerID = setInterval(() => {
      increment()
    }, 1000)
    buttons.forEach(button => button.disabled = false)
    pauseButton.innerText = 'pause'
  } else {
    buttons.forEach(button => button.disabled = true)
    pauseButton.innerText = 'resume'
    clearInterval(timerID)
  }

  paused = !paused
  console.log(timerID, paused)
})

// ----Functionality for Reset Button----
const resetButton = document.getElementById('reset')

resetButton.addEventListener('click', () => {
  const buttons = [plus, minus, heart]
  document.getElementById('counter').innerText = '0'

  if(paused) {
    buttons.forEach(button => button.disabled = false)
    pauseButton.innerText = 'pause'
    paused = !paused
    timerID = setInterval(() => {
      increment()
    }, 1000)
  } else {
    timerID = null
  }
})