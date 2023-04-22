$(document).ready(function () {

    if(localStorage.length != 0){
        var obj = JSON.parse(localStorage.sessionData);
        if(obj.email != "admin@admin.com"){
            window.location.href="index.html";
          }
    }else {
        window.location.href="index.html";
    }

    $(".aboutus").click(function () {
        window.location.href = "about.html";
      });
    
      $(".contactus").click(function () {
        window.location.href = "contact.html";
      });

    $.ajax({
        url: 'http://localhost:3000/reservation/allreservations',
        type: 'GET',
        success: function (data) {

            var events = [];
            for (var i = 0; i < data.length; i++) {
                events.push({
                    title: data[i].title,
                    start: data[i].start_date,
                    end: data[i].end_date,
                    adult: data[i].adult,
                    child: data[i].child,
                    room: data[i].room,
                });
            }
            console.log(events);
            $('#calendar').fullCalendar({
                events: events,
                eventClick: function (event, jsEvent, view) {
                    var sdate = new Date(event.start);
                    var edate = new Date(event.end);
                    $('#event-title').text("Reservation name: " + event.title);
                    $('#event-start').text('Start: ' + sdate.toLocaleDateString('en-GB'));
                    $('#event-end').text('End: ' + edate.toLocaleDateString('en-GB'));
                    $('#adult').text('Adult: ' + event.adult);
                    $('#child').text('Child: ' + event.child);
                    $('#room').text('Room: ' + event.room);
                    $('#event-modal').show();
                },
                eventRender: function (event, element) {
                    var eventTitle = $('<div>').text(event.title);
                    element.html(eventTitle);
                }
            });
        }
    });

    $('#event-modal').click(function () {
        $('#event-modal').hide();
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