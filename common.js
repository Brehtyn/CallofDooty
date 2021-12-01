function validateForm() {
  var k = document.forms["generalcontactform"]["name"].value;
  if (k == "") {
    alert("Please provide your name.");
    return false;
  }
  var k = document.forms["generalcontactform"]["phone"].value;
  if (k == "") {
    alert("Please provide your phone number.");
    return false;
  }
  var k = document.forms["generalcontactform"]["email"].value;
  if (k == "") {
    alert("Please provide your email address.");
    return false;
  }
  var k = document.forms["generalcontactform"]["message"].value;
  if (k == "") {
    alert("Please include your desired comment.");
    return false;
  }
}
