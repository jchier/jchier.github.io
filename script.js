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
  greyButton();
});

btnDec.addEventListener("click", () => {
  previousImage();
  greyButton();
});

btnNext.addEventListener("click", () => {
  nextChapter();
  greyButton();
});

btnPrev.addEventListener("click", () => {
  prevChapter();
  greyButton();
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

function greyButton() {
  if (current === 0) {
    btnDec.classList.add("grey");
    btnPrev.classList.add("grey");
  } else if (current === count - 1) {
    btnInc.classList.add("grey");
  } else {
    btnDec.classList.remove("grey");
    btnInc.classList.remove("grey");
    btnPrev.classList.remove("grey");
  }

  if (current <= count && current >= chapterMarks[chapterMarks.length - 1]) {
    btnNext.classList.add("grey");
  } else {
    btnNext.classList.remove("grey");
  }

  // if (current >= chapterMarks[0] && current < chapterMarks[1]) {
  //   btnPrev.classList.add("grey");
  // } else {
  //   btnPrev.classList.remove("grey");
  // }
}

fetchTextFile();
greyButton();
