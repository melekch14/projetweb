$(document).ready(function () {

  $(".aboutus").click(function () {
    window.location.href = "about.html";
  });

  $(".contactus").click(function () {
    window.location.href = "contact.html";
  });

  function checknegative(inputValue) {
    if (inputValue < 0) {
      // input value is negative
      return true;
    }
    return false;
  }


  // When the user clicks on the button, open the modal
  $("#reservation").click(function () {
    
      var adult = $("#adult").val();
      var child = $("#child").val();
      var room = $("#roomName").val();

      if ($("#startdate").val() == "" || $("#enddate").val() == "" || checknegative(adult) || checknegative(child) ||
        adult == "" || child == "" || ($("#startdate").val() > $("#enddate").val())) {
        showNotification('error', 'error');
      } else {
        $("#myModal").css("display", "block");
        var sdate = new Date($("#startdate").val());
        var edate = new Date($("#enddate").val());
        sdate.setHours(10);
        sdate.setMinutes(30);
        sdate.setSeconds(15);
        edate.setHours(14);
        edate.setMinutes(30);
        edate.setSeconds(15);
        var startdate = sdate.toISOString();
        var enddate = edate.toISOString();
        $.ajax({
          url: 'http://localhost:3000/reservation/check',
          type: 'POST',
          contentType: 'application/json',
          data: JSON.stringify({
            start_date: startdate,
            end_date: enddate,
            room: room
          }),
          success: function (data) {
            $("#st").html(startdate);
            $("#ed").html(enddate);
            $("#ad").html(adult);
            $("#ch").html(child);
            $("#rm").html(room);
            if (data.number == 0) {
              $("#stt").html("Available");
              $('#bookn').prop('disabled', false);
              $('#bookn').css('background-color', '#7fc142');
            } else {
              $("#stt").html("Unvailable");
              $('#bookn').prop('disabled', true);
              $('#bookn').css('background-color', 'red');
            }

          },
          error: function (xhr, status, error) {
            console.error('Error:', error);
          }
        });
      }


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

  $("#subs").click(function (event) {
    if ($("#emailsubs").val() == "") {
      showNotification('error', 'error');
    }
    else {
      showNotification('success', 'Thank you');
    }
  });

  $("#bookn").click(function () {
  
    $.ajax({
      url: 'http://localhost:3000/reservation/booknow',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        start_date: $("#st").html(),
        end_date: $("#ed").html(),
        title: $("#resvName").val(),
        adult: $("#ad").html(),
        child: $("#ch").html(),
        room: $("#rm").html(),
      }),
      success: function (data) {
        console.log('Login successful:', data);
        $("#myModal").css("display", "none");
        showNotification('success', 'success');
      },
      error: function (xhr, status, error) {
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
function createNotifInner(title, body) {
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

var menulist = document.getElementById('menulist');
menulist.style.maxHeight = "0px";

function menutoggle() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "100vh";
  } else {
    menulist.style.maxHeight = "0px";
  }
}

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