$(document).ready(function () {

  $("#sendMessage").click(function () {
    var currentDate = new Date();
    console.log(currentDate);
    $.ajax({
      url: 'http://localhost:3000/contact/send',
      type: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({
        name: $("#textName").val(),
        email: $("#textEmail").val(),
        message: $("#textMessage").val(),
        date: currentDate
      }),
      success: function (data) {
        showNotification('success', 'success');
        $("#textName").val("");
        $("#textEmail").val("");
        $("#textMessage").val("");
      },
      error: function (xhr, status, error) {
        console.error('Error:', error);
      }
    });
  })

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