var testimony_slideshow_array = [
  "Great value, very responsive, and quality work. Will use again.",
  "Amazing service and affordable pricing. It took about 20 mins to respond to the repair I needed.",  
  "Highly knowledgeable and intelligent in solving the problem better than an engineer can.",
  "Responded quickly to my plumbing emergency. He diagnosed and repaired my plumbing issues to my complete satisfaction!",  
  "Was a life saver, thank you David!!",
  "David saved the day and for a better price than we discussed. I highly recommend and will be calling him again if there’s ever a need. 10/10 five stars 2 thumbs up.",
  "David and his crew were great. Excellent service at a good price, highly recommended."
]

var testimony_author_slideshow_array = [
  "Sarà B, Thumbtack.com",  
  "Gabriel William Nassif, Google",  
  "Len W., Thumbtack.com",
  "Luisa Martinez Aguilar, Google",  
  "Danielle Leleu, Google",
  "Danny P., Thumbtack.com",
  "Eduardo Flores, Google"
]

testimony_slideshow_autoscroll = true;

var testimony_slideshow_counter = 0;

function testimony_slideshow_counter_auto_increase() {        // scroll right on testimony slideshow
  testimony_slideshow_counter++;
  if (testimony_slideshow_counter >= testimony_slideshow_array.length) {
    testimony_slideshow_counter = 0;
  }
  sync_slideshow();
}

if (testimony_slideshow_autoscroll == true) {                 // autoscroll testimony slideshow
  setInterval(testimony_slideshow_counter_auto_increase, 4200);
}
else {
}

function sync_slideshow() {

  document.getElementById('testimony-slideshow').textContent = testimony_slideshow_array[testimony_slideshow_counter];
  document.getElementById('testimony-author-slideshow').textContent = testimony_author_slideshow_array[testimony_slideshow_counter];

}

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
  var k = document.forms["generalcontactform"]["service"].value;
  if (k == "") {
    alert("Please include your desired service.");
    return false;
  }
  var k = document.forms["generalcontactform"]["message"].value;
  if (k == "") {
    alert("Please include your desired comment.");
    return false;
  }
}
