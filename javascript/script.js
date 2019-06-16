var index = 0;
slideshow();

function slideshow() {
  var i;
  var image = document.getElementsByClassName("images");
  var length = image.length;
  for (i = 0; i < length; i++) image[i].style.display = "none"; 
  index++;
  if (index > length) {index = 1} 
  image[index-1].style.display = "block"; 
  setTimeout(slideshow, 3000);
}