$(document).ready(function () {

  if (localStorage.length != 0) {
    var obj = JSON.parse(localStorage.sessionData);
    if (obj.email == "admin@admin.com") {
      window.location.href = "admin.html"
    }
  } else {
    $(".errorMessage").css("display", "none");

  $("#login").on('click',function () {
    $.ajax({
      url: 'http://localhost:3000/api/login',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        email: $("#email").val(),
        password: $("#password").val()
      }),
      success: function (data) {
        if (data.user)
          localStorage.setItem('sessionData', JSON.stringify(data.user))
        if (data.user.email == "admin@admin.com") {
          window.location.href = "admin.html";
        }
        else {
          window.location.href = "home.html";
        }
      },
      error: function (xhr, status, error) {
        $(".errorMessage").css("display", "block");
      }
    });
  });
  }
});
