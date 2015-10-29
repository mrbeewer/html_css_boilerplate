// Wait until the window has loaded
window.onload = function() {
  //alert('hey hey hey');
  statusReport("hey hey hey");

  var username = prompt("What is your name?");
  var mission = prompt("What is your mission?");

  var contentContainer = document.getElementById("content");

  contentContainer.innerHTML = username + " is on a mission to " + mission;

}

// Send up messages
function statusReport(message) {
  console.log(message);
  return message;
}
