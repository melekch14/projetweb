$(document).ready(function () {

  $(".errorMessage").css("display", "none");

  $("#login").click(function () {
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
  })

  

  $("#signup").click(function () {

    var email = $("#inputEmail").val();
    var username = email.split("@")[0];
    if($("#inputPassword").val() != $("#inputPassword2").val()){
      $(".errorMessage").css("display", "block");
    }else{
      $.ajax({
        url: 'http://localhost:3000/api/signup',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
          name: username,
          email: email,
          password: $("#inputPassword").val()
        }),
        success: function (data) {
          if (data.id!='0'){
            $(".errorMessage").css("display", "none");
            window.location.href = "admin.html"
          }
            
        },
        error: function (xhr, status, error) {
          $(".errorMessage").css("display", "block");
        }
      });
    }
    
  })

});
