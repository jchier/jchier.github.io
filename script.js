let count = 0;
let current = 0;
let isImageLoaded = false;
const bootBlue = "#0d6efd";
const frame = document.getElementById("frame");
const btnDec = document.getElementById("decrement");
const btnInc = document.getElementById("increment");
const btnNext = document.getElementById("next-chapt");
const btnPrev = document.getElementById("prev-chapt");

let chapterMarks = [0, 64, 127];

function nextImage() {
  return new Promise((resolve) => {
    if (current < count - 1) {
      current++;
      frame.onload = resolve;
      setFrame();
    }
  });
}

function previousImage() {
  return new Promise((resolve) => {
    if (current != 0) {
      current--;
      frame.onload = resolve;
      setFrame();
    }
  });
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
  if (isImageLoaded) return;
  isImageLoaded = true;
  nextImage().then(() => (isImageLoaded = false));
  greyButton();
});

btnDec.addEventListener("click", () => {
  if (isImageLoaded) return;
  isImageLoaded = true;
  previousImage().then(() => (isImageLoaded = false));
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
  const isFirstImage = current === 0;
  const isLastImage = current === count - 1;
  const isBeyondChapter =
    current <= count && current >= chapterMarks[chapterMarks.length - 1];

  if (isFirstImage) {
    if (!btnDec.classList.contains("grey")) btnDec.classList.add("grey");
    if (!btnPrev.classList.contains("grey")) btnPrev.classList.add("grey");
  } else {
    if (btnDec.classList.contains("grey")) btnDec.classList.remove("grey");
    if (btnPrev.classList.contains("grey")) btnPrev.classList.remove("grey");
  }

  if (isLastImage) {
    if (!btnInc.classList.contains("grey")) btnInc.classList.add("grey");
  } else {
    if (btnInc.classList.contains("grey")) btnInc.classList.remove("grey");
  }

  if (isBeyondChapter) {
    if (!btnNext.classList.contains("grey")) btnNext.classList.add("grey");
  } else {
    if (btnNext.classList.contains("grey")) btnNext.classList.remove("grey");
  }
}

fetchTextFile();
greyButton();
