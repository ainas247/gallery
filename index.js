let btn = document.querySelector(".btn");
let img = [
  'url("image/1.jpg")',
  'url("image/2.jpg")',
  'url("image/3.jpg")',
  'url("image/4.jpg")',
  'url("image/5.jpg")',
  'url("image/6.jpg")',
  'url("image/7.jpg")',
  'url("image/8.jpg")',
  'url("image/9.jpg")',
  'url("image/10.jpg")',
  'url("image/11.jpg")',
  'url("image/12.jpg")',
  'url("image/13.jpg")',
  'url("image/14.jpg")',
  'url("image/15.jpg")'
  //Add More Images to the array
];

let btnColor = ['red', 'pink', 'green', 'gold', 'purple', 'silver', 'lemon']
setInterval(() => {
      let colors = Math.floor(Math.random() * 7); //Get colors
      let displayColor = btnColor[colors];
      btn.style.backgroundColor = `${displayColor}`;
}, 1000);


btn.addEventListener("click", changeImage);
function changeImage() {
  let randomNum = Math.floor(Math.random() * 15); //Multiply by the number of Images
  let getImage = img[randomNum];
  let imageResult = (document.body.style.backgroundImage = `${getImage}`);
}

