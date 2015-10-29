// Wait until the window has loaded
window.onload = function() {
  //alert('hey hey hey');
  statusReport("hey hey hey");

  var word1 = prompt("Input a NOUN");
  var word2 = prompt("Input a VERB");
  var word3 = prompt("Input a pural NOUN");
  var word4 = prompt("Input an ADJECTIVE");
  var word5 = prompt("Input a VERB");
  var word6 = prompt("Input a NAME");
  var word7 = prompt("Input YOUR NAME");
  var word8 = prompt("Input a NOUN");

  var contentContainer = document.getElementById("content");

  contentContainer.innerHTML = "MadLibs: Performance-Enhancing Drugs Apology <br><br> I would like to take this <i><u>" +  word1 + "</u></i> to say that I am truly sorry for <i><u>" + word2 + "ing</u></i> the trust of my coaches, <i><u>" + word3 + "</u></i>, family and, most <i><u>" + word4 + "ly</u></i>, my fans. While I am not at liberty to discuss exactly what I am <i><u>" + word5 + "ing</u></i> for, or why I have decided to fire <i><u>" + word6 + "</u></i>, as my trainer, I can, in fact, make comment on the on the <i><u>" + word7 + "</u></i> Foundation, which is a charitable <i><u>" + word8 + "</u></i> I just so happen to be starting."

  //contentContainer.innerHTML = username + " is on a mission to " + mission;

}

// Send up messages
function statusReport(message) {
  console.log(message);
  return message;
}
