var modalImg = document.getElementById("img01");
// images

const images = document.querySelectorAll(".hover-shadow.cursor");
images.forEach(function(image, index) {
  image.addEventListener("click", function() {
    openModal();
    currentSlide(index + 1);
  });
});

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {

  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var slides = document.getElementsByClassName("hover-shadow cursor");
  var modalImg = document.getElementById("img01");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  modalImg.src = slides[slideIndex - 1].src;
  modalImg.style.width = "700px";
  modalImg.style.height = "500px";
  if(window.innerWidth >= 1024 && window.innerWidth <= 1440) {
    modalImg.style.width = "500px";
    modalImg.style.height = "350px";
  }
  if(window.innerWidth >= 768 && window.innerWidth <= 1024) {
    modalImg.style.width = "350px";
    modalImg.style.height = "250px";
  }
  if(window.innerWidth < 768 && window.innerWidth > 320) {
    modalImg.style.width = "250px";
    modalImg.style.height = "200px";
  }
}



