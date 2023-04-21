$(document).ready(function () {
 /*
  $('.bookbn').click(function() {
    var name = $(this).closest('.carousel-item-room').find('.suitname').html();
    
    console.log("Name: " + name);
  });*/
  


  // When the user clicks on the button, open the modal
  $(".bookn").click(function () {
    var name = $(this).closest('.carousel-item-room').find('.suitname').html();
    $(".rmn").html(name);
    $("#myModal").css("display", "block");
  });

  // When the user clicks on <span> (x), close the modal
  $(".close").click(function () {
    $("#myModal").css("display", "none");
  });

  // When the user clicks anywhere outside of the modal, close it
  $(window).click(function (event) {
    if (event.target == $("#myModal")[0]) {
      $("#myModal").css("display", "none");
    }
  });

  
  $("#checkres").click(function () {
    $.ajax({
      url: 'http://localhost:3000/reservation/check',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        start_date: $("#st").val(),
        end_date: $("#ed").val(),
        room: $(".rmn").html()
      }),
      success: function (data) {
        console.log(data);
        if (data.number == 0) {
          $("#rms").html("Available");
          $('#bn').prop('disabled', false);
          $('#bn').css('background-color', 'green');
      }else{
        $("#rms").html("Unvailable");
        $('#bn').prop('disabled', true);
        $('#bn').css('background-color', 'red');
      }

      },
      error: function (xhr, status, error) {
        console.error('Error:', error);
      }
    });
  });

  $("#bn").click(function () {
    $.ajax({
      url: 'http://localhost:3000/reservation/booknow',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        start_date: $("#st").val(),
        end_date: $("#ed").val(),
        title: "melek",
        adult: $("#ad").val(),
        child: $("#ch").val(),
        room: $(".rmn").html(),
      }),
      success: function(data) {
        console.log('Login successful:', data);
        $("#myModal").css("display", "none");
        showNotification('success','success');
      },
      error: function(xhr, status, error) {
        console.error('Error:', error);
      }
    });   
  });

});

function showNotification(title, body) {
  console.log('showNotification')
  let notifContainer = document.getElementById('notification-container');
  let notifDiv = this.createNotifDiv(title);
  let [notifTitle, notifBody] = this.createNotifInner(title, body);
  let notifBtn = this.createNotifCloseBtn(notifDiv);
  notifContainer?.appendChild(notifDiv)
  notifDiv?.appendChild(notifTitle)
  notifDiv?.appendChild(notifBody)
  notifDiv?.appendChild(notifBtn)
  setTimeout(() => {
    notifDiv.remove()
  }, 3500)
}
function createNotifDiv(title) {
  let notificationDiv = document.createElement('div');
  notificationDiv.classList.add(...['notification', title.toLowerCase()]);
  return notificationDiv;
}
function createNotifInner(title, body){
  let notificationTitle = document.createElement('h3');
  notificationTitle.classList.add('title');
  notificationTitle.innerText = title;
  let notificationBody = document.createElement('p');
  notificationBody.classList.add('body');
  notificationBody.innerText = body;
  return [notificationTitle, notificationBody];
}
function createNotifCloseBtn(notifDiv) {
  let notifBtn = document.createElement('i');
  notifBtn.classList.add(...['fa', 'fa-times', 'btn']);
  notifBtn.addEventListener("click", (event) => {
    notifDiv.remove()
  })
  return notifBtn;
}