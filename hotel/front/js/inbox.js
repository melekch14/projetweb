$(document).ready(function () {

  if(localStorage.length != 0){
    var obj = JSON.parse(localStorage.sessionData);
    if(obj.email !="admin@admin.com"){
        window.location.href="index.html";
      }
}else {
    window.location.href="index.html";
}

$('html, body').animate({
  scrollTop: $('#inboxmessage').offset().top
}, 'slow');

$(".aboutus").click(function () {
  window.location.href = "about.html";
});

$(".contactus").click(function () {
  window.location.href = "contact.html";
});

  $.ajax({
    url: "http://localhost:3000/contact/get",
    type: "GET",
    dataType: "json",
    success: function (data) {
      $.each(data, function (index, item) {
        var row = $("<tr>");
        $("<td>").text(item.name).appendTo(row);
        $("<td>").text(item.email).appendTo(row);
        $("<td>").text(item.message).appendTo(row);
        row.appendTo("#contactTable tbody");
      });
    }
  });

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