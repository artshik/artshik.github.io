function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo img");
  let mainTitle = document.querySelector("#gallery-info h3");
  let mainDescription = document.querySelector("#gallery-info p");

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
      mainImage.setAttribute("alt", thumbnail.alt);
      mainTitle.innerHTML = thumbnail.dataset.title;
      mainDescription.innerHTML = thumbnail.dataset.description;

      document.querySelector(".current").classList.remove("current");
      thumbnail.parentNode.classList.add("current");
    });
  });
}
