var noon = 12;
var evening = 17;
var wakeupTime = 8;
var lunchTime = 12;
var napTime = lunchTime + 2;
var partyTime = 19;

var updateClock = function() {

    var time = new Date().getHours();
    var timedMessage = document.getElementById("timeEvent");
    var messageText;
    // getting the image element:
    var lolcatImage = document.getElementById("lolcat");
    // create a variable for & defining your default image:
    var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

    // CHANGING THE MESSAGES & IMAGES:
    if (time < noon) {
      messageText = "Good morning!";
    }
    else if (time >= evening) {
      messageText = "Good evening!";
    }
    else if (time == wakeupTime) {
      messageText = "Rise and shine!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg"
    }
    else if (time == lunchTime) {
      messageText = "Time for lunch!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    }
    else if (time == napTime) {
      messageText = "Power nap!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    }
    else if (time == partyTime) {
      messageText = "Woohoo! It's party time!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    }  
    else {
      messageText = "Have a great day!";
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
    }

    console.log(time);
    console.log(messageText);

    // connecting the message text to the correct tag in the html:
    timedMessage.innerText = messageText; 

    // link to your image variable with the variable that connects to the HTML ID, while getting at the source attribute of that image element:
    lolcatImage.src = image;

    // MAKING THE CLOCK:
    var showCurrentTime = function() {
        // display the string on the webpage
        var clock = document.getElementById("clock");
     
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
     
        // Set hours 
        if (hours >= noon) { 
            meridian = "PM"; 
        }  
        if (hours > noon) { 
            hours = hours - 12; 
        }
     
        // Set Minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
     
        // Set Seconds
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
     
        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
     
        clock.innerText = clockTime;
    };
      
    showCurrentTime();
 
};

updateClock();

var oneSecond = 1000; 
setInterval(updateClock, oneSecond);