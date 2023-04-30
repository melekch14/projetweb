
$('html, body').animate({
    scrollTop: $('#gallerySection').offset().top
  }, 'slow');

$(".aboutus").click(function () {
    window.location.href = "about.html";
});

$(".contactus").click(function () {
    window.location.href = "contact.html";
});

var menulist = document.getElementById('menulist');
menulist.style.maxHeight = "0px";

function menutoggle() {
    if (menulist.style.maxHeight == "0px") {
        menulist.style.maxHeight = "100vh";
    } else {
        menulist.style.maxHeight = "0px";
    }
}

$(".aboutus").click(function () {
    window.location.href = "about.html";
});

$(".contactus").click(function () {
    window.location.href = "contact.html";
});

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel-gallery');
    const carouselSlide = document.querySelector('.carousel-slide-gallery');
    const carouselItems = document.querySelectorAll('.carousel-item-gallery');
    let currentIndex = 0;
    const visibleItems = 5;
    const totalItems = carouselItems.length - visibleItems;

    function moveToNextItem() {
        currentIndex++;
        if (currentIndex > totalItems) {
            currentIndex = 0;
        }
        updateCarouselTransform();
    }

    function updateCarouselTransform() {
        const transformValue = `translateX(-${currentIndex * (100 / visibleItems)}%)`;
        carouselSlide.style.transform = transformValue;
    }

    setInterval(moveToNextItem, 2000); // Change item every 3 seconds
});