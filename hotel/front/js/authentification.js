$(document).ready(function(){

    $("#login").click(function(){
        $.ajax({
            url: 'http://localhost:3000/api/login',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
              email: $("#email").val(),
              password: $("#password").val()
            }),
            success: function(data) {
              if(data.user)
                localStorage.setItem('sessionData',JSON.stringify(data.user))
              window.location.href = "home.html";
            },
            error: function(xhr, status, error) {
              console.error('Error:', error);
            }
          });    
    })
  
  });