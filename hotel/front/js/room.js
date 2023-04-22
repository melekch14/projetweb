$(document).ready(function () {

  if (localStorage.length != 0) {
    var obj = JSON.parse(localStorage.sessionData);
    if (obj.email == "" || obj.email == "admin@admin.com") {
      window.location.href = "index.html";
    }
  } else {
    window.location.href = "index.html";
  }

  $(".aboutus").click(function () {
    window.location.href = "about.html";
  });

  $(".contactus").click(function () {
    window.location.href = "contact.html";
  });

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
      $("#st").val("");
      $("#ed").val("");
      $("#ad").val("");
      $("#ch").val("");
      $("#rms").html("");
    }
  });

  function checknegative(inputValue) {
    if (inputValue < 0) {
      // input value is negative
      return true;
    }
    return false;
  }

  $('#bn').css('background-color', 'red');
  $('#bn').prop('disabled', true);

  $("#checkres").click(function () {
    var start_date = $("#st").val();
    var end_date = $("#ed").val();
    var adult = $("#ad").val();
    var child = $("#ch").val();
    if (start_date == "" || end_date == "" || checknegative(adult) || checknegative(child) || adult == "" || child == "" || start_date > end_date) {
      showNotification('error', 'error');
      console.log("error");
    } else {
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
          } else {
            $("#rms").html("Unvailable");
            $('#bn').prop('disabled', true);
            $('#bn').css('background-color', 'red');
          }

        },
        error: function (xhr, status, error) {
          console.error('Error:', error);
        }
      });
    }

  });

  $("#bn").click(function () {
    var obj = JSON.parse(localStorage.sessionData)
    var username = obj.email.split("@")[0];
    var sdate = new Date($("#st").val());
      var edate = new Date($("#ed").val());
      sdate.setHours(10);
      sdate.setMinutes(30);
      sdate.setSeconds(15);
      edate.setHours(14);
      edate.setMinutes(30);
      edate.setSeconds(15);
      var startdate = sdate.toISOString();
      var enddate = edate.toISOString();
    $.ajax({
      url: 'http://localhost:3000/reservation/booknow',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        start_date: startdate,
        end_date: enddate,
        title: username,
        adult: $("#ad").val(),
        child: $("#ch").val(),
        room: $(".rmn").html(),
      }),
      success: function (data) {
        console.log('Login successful:', data);
        $("#myModal").css("display", "none");
        showNotification('success', 'success');
        $("#st").val("");
        $("#ed").val("");
        $("#ad").val("");
        $("#ch").val("");
        $(".rmn").html("");
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

document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel-room');
  const carouselItems = document.querySelectorAll('.carousel-item-room');
  let currentIndex = 0;
  const totalItems = 3;

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

var menulist = document.getElementById('menulist');
menulist.style.maxHeight = "0px";

function menutoggle() {
  if (menulist.style.maxHeight == "0px") {
    menulist.style.maxHeight = "100vh";
  } else {
    menulist.style.maxHeight = "0px";
  }
}