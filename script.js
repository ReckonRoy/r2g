let modal = document.getElementById('myModal');
let modalImg = document.getElementById("modalImg");
let images = document.querySelectorAll('.image');
let currentIndex;

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', function() {
    modal.style.display = "block";
    modalImg.src = this.querySelector('img').src;
    currentIndex = i;
  });
}

document.querySelector('.close').addEventListener('click', function() {
  modal.style.display = "none";
});

function changeImage(n) {
  currentIndex += n;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  modalImg.src = images[currentIndex].querySelector('img').src;
}
