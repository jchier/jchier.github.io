let count = 0;
let current = 0;

function nextImage() {
  if (current < count - 1) {
    current++;
    let frame = document.getElementById("frame");
    frame.src = "./source/" + current + ".png";
    frame.setAttribute("alt", "lol");
    console.log(current);
    hideButton();
  }
}

function previousImage() {
  if (current != 0) {
    current--;
    let frame = document.getElementById("frame");
    frame.src = "./source/" + current + ".png";
    frame.setAttribute("alt", "lol");
    console.log(current);
    hideButton();
  }
}

let btnRight = document.getElementById("increment");
btnRight.addEventListener("click", () => {
  //loadImages();
  nextImage();
});

let btnLeft = document.getElementById("decrement");
btnLeft.addEventListener("click", () => {
  //loadImages();
  previousImage();
});

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
  const btnLeft = document.getElementById("decrement");
  if (current === 0) {
    btnLeft.style.visibility = "hidden";
  } else {
    btnLeft.style.visibility = "visible";
  }
}

fetchTextFile();
hideButton();
