let count = 0;
let current = 0;

function nextImage() {
  hideButton();
  if (current < count - 1) {
    current++;
    let frame = document.getElementById("frame");
    frame.src = "./source/" + current + ".png";
    frame.setAttribute("alt", "lol");
    console.log(current);
  }
}

function previousImage() {
  if (current != 0) {
    current--;
    let frame = document.getElementById("frame");
    frame.src = "./source/" + current + ".png";
    frame.setAttribute("alt", "lol");
    console.log(current);
  }
}

let btnRight = document.getElementById("btn-right");
btnRight.addEventListener("click", () => {
  //loadImages();
  nextImage();
});

let btnLeft = document.getElementById("btn-left");
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
  const btnLeft = document.getElementById("btn-left");
  if (current === 0) {
    btnLeft.style.display = "none";
  } else {
    btnLeft.style.display = "inline-block";
  }
}

fetchTextFile();
