let imageSource = "/source/1-1.jpg";

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

const fs = require("fs");
const dir = "./directory";

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});
