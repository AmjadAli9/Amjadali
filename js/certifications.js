const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const images = document.querySelectorAll(".certificate-img");
const closeModal = document.querySelector(".close");

images.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

closeModal.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
