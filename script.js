let count = 0;
let current = 0;
const bootBlue = "#0d6efd";
const frame = document.getElementById("frame");
const btnDec = document.getElementById("decrement");
const btnInc = document.getElementById("increment");
const btnNext = document.getElementById("next-chapt");
const btnPrev = document.getElementById("prev-chapt");

let chapterMarks = [0, 64, 127];

function nextImage() {
  if (current < count - 1) {
    current++;
    setFrame();
  }
}

function previousImage() {
  if (current != 0) {
    current--;
    setFrame();
  }
}

function nextChapter() {
  for (let i of chapterMarks) {
    if (current < i) {
      current = i;
      setFrame();
      return;
    }
  }
}

function prevChapter() {
  for (let i = chapterMarks.length - 1; i >= 0; i--) {
    if (current > chapterMarks[i]) {
      current = chapterMarks[i];
      setFrame();
      return;
    }
  }
}

btnInc.addEventListener("click", () => {
  nextImage();
  hideButton();
});

btnDec.addEventListener("click", () => {
  previousImage();
  hideButton();
});

btnNext.addEventListener("click", () => {
  nextChapter();
  hideButton();
});

btnPrev.addEventListener("click", () => {
  prevChapter();
  hideButton();
});

function setFrame() {
  frame.src = "./source/" + current + ".png";
  frame.setAttribute("alt", "lol");
  console.log(current);
}

async function fetchTextFile() {
  try {
    const response = await fetch("https://jchier.github.io/count.txt");

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    count = await response.text();

    console.log(count);
  } catch (error) {
    console.error("Error fetching the text file:", error);
  }
}

function hideButton() {
  if (current === 0) {
    btnDec.style.backgroundColor = "grey";
  } else if (current === count - 1) {
    btnInc.style.backgroundColor = "grey";
  } else {
    btnDec.style.backgroundColor = bootBlue;
    btnInc.style.backgroundColor = bootBlue;
  }
}

fetchTextFile();
hideButton();
