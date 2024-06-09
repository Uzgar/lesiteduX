document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => {
        const imgContainer = carousel.querySelector(".img-container");
        const images = imgContainer.querySelectorAll("img");
        let counter = 0;
        setInterval(() => {
            counter = (counter + 1) % images.length;
            imgContainer.style.transform = `translateX(-${counter * 100}%)`;
        }, 3000); // Changer l'intervalle de défilement en millisecondes selon votre préférence
    });
});
