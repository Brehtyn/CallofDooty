
$(window).resize(function () {                                     // multiple nav state display issue fixes
  if ($(window).width() <= 1099) {
    document.getElementById("link_menu").style.display = "none";
    document.getElementById("nav_drop_menu").style.display = "none";
    $('.link_menu').css("position", "fixed");
    bool_mobile_nav_display = false;
    bool_mobile_nav_more_display = false;
    $('.link_menu').css("left", "50%");
    $('.link_menu').css("transform", "translate(-50%, 0)");
  }
  else {
    document.getElementById("link_menu").style.display = "flex";
    document.getElementById("nav_drop_menu").style.display = "none";
    bool_mobile_nav_more_display = false;
  }
  document.getElementById("mobile_nav_button_iconify").innerHTML = "<span class='iconify' data-icon='oi:menu' alt='Navigation Menu' data-inline='false'> </span>";
  document.getElementById("nav_drop_html").innerHTML = "Useful Links";
  document.getElementById("nav_drop_iconify").innerHTML = "<span class='iconify' width='15px' data-icon='oi:caret-bottom' data-inline='false'> </span>";
});

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
