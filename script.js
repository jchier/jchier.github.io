let imageSource = "/source/1-1.jpg";
let countSource = ".index.txt";

function loadImages(imgArr) {
  let img = new Image();
  img.src = imageSource;
  var frame = document.getElementById("frame");
  frame.src = imageSource;
  frame.setAttribute("alt", "lol");
}

let btnRight = document.getElementById("btn-right");
btnRight.addEventListener("click", () => {
  loadImages();
});

async function fetchTextFile() {
  try {
    // Replace 'https://example.com/path/to/yourfile.txt' with the URL of your remote .txt file
    const response = await fetch("https://example.com/path/to/yourfile.txt");

    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }

    // Get the text content from the response
    const data = await response.text();

    // Display the content in the HTML element
    console.log(data);
  } catch (error) {
    console.error("Error fetching the text file:", error);
  }
}

fetchTextFile();
