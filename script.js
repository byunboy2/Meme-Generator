// list variables for url,top and bottom text input. Form is to reference the parent. Container is where meme will be appended
let topText = document.getElementById("topText");
let bottomText = document.getElementById("bottomText");
let container = document.getElementById("memeGenerator");
let imgURL = document.getElementById("imageUpload");
let form = document.getElementById("form");
// Use the window.onload method to ensure webpage is completely loaded before the addEventListener for submit is activated
window.onload = (event) => {
  // Event delegation to improve efficiency. Add one eventlistener to parent tag.
  form.addEventListener("submit", function (e) {
    // prevent page from reloading when URL and texts are submitted
    e.preventDefault();
    // Ensure that only one meme exists at a time on the front page
    if (container.innerText.length > 0) {
      return alert("One meme at a time. Delete current meme before generating another!");
    }
    // generate meme using generateMeme function
    generateMeme(topText.value, bottomText.value, imgURL.value);
  });
};
//click on image to delete meme
container.addEventListener("click", function (e) {
  e.target.parentElement.remove();
});
// function to generate meme
function generateMeme(topText, bottomText, imgURL) {
  // create image, top text, bottom text, and container html semantics tags rather than just normal divs
  const section = document.createElement("header");
  const imageInput = document.createElement("img");
  const topSec = document.createElement("article");
  const bottomSec = document.createElement("footer");
  // Add attributes and inner texts to the newly created tags
  // Add inputted URL to the imageInput tag
  imageInput.src = imgURL;
  // Add to class attributes to the tags referencing CSS sheet.
  section.classList.add("container");
  imageInput.classList.add("img");
  topSec.classList.add("topFormat", "memeCaptions");
  bottomSec.classList.add("bottomFormat", "memeCaptions");
  // Add text to the top and bottom divs referencing inputted texts
  topSec.innerText = topText;
  bottomSec.innerText = bottomText;
  // Append image, top text,bottom text element to section header
  section.appendChild(topSec);
  section.appendChild(imageInput);
  section.appendChild(bottomSec);
  // Append section header to the container
  container.appendChild(section);
}

