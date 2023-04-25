if (localStorage.length != 0) {
    var obj = JSON.parse(localStorage.sessionData);
    if (obj.email == "" || obj.email == "admin@admin.com") {
        window.location.href = "index.html";
    }
} else {
    window.location.href = "index.html";
}

$('html, body').animate({
    scrollTop: $('#eventSection').offset().top
  }, 'slow');

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
    const carousel = document.querySelector('.carousel');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const totalItems = carouselItems.length;

    function moveToNextItem() {
        currentIndex++;
        if (currentIndex >= totalItems) {
            currentIndex = 0;
        }
        updateCarouselTransform();
    }

    function updateCarouselTransform() {
        const transformValue = `translateX(-${currentIndex * 100}%)`;
        carouselItems.forEach((item) => {
            item.style.transform = transformValue;
        });
    }

    setInterval(moveToNextItem, 3000); // Change slide every 3 seconds
});
