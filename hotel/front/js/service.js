
$('html, body').animate({
    scrollTop: $('#serviceSection').offset().top
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



