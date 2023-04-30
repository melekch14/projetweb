$(document).ready(function () {

    if (localStorage.length == 0) {
        window.location.href = "login.html";
      }
      else {
        $('html, body').animate({
            scrollTop: $('#admin').offset().top
          }, 'slow');
    
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
                    header: {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'month,agendaWeek,agendaDay'
                      },
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
      }    
});


