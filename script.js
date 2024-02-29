const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get cuurent date and time
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();

//Set deadline day
let deadline = new Date("mar 31, 2024 16:20:00");
let deadlineYear = deadline.getFullYear();
let deadlineMonth = deadline.getMonth();
let deadlineDay = deadline.getDate();
let deadlineHour = deadline.getHours();
let deadlineMinute = deadline.getMinutes();
let month = months[deadlineMonth];
let day = days[deadline.getDay()];

// set superscript for date
let attach = "th";
if (deadlineDay == 1 || deadlineDay == 21 || deadlineDay == 31) {
  attach = "st";
} else if (deadlineDay == 2 || deadlineDay == 22) {
  attach = "nd";
} else if (deadlineDay == 3 || deadlineDay == 23) {
  attach = "rd";
}

//Push values to HTML
let text = document.getElementById("giveaway");
text.innerHTML = `Giveaway ends ${day} ${deadlineDay}${attach} ${month} ${deadlineYear} by ${deadlineHour}:${deadlineMinute}`;

// Countdown
function countdownTimer() {
  const deadlineTime = deadline.getTime();
  const currentTime = new Date().getTime();
  const countdown = deadlineTime - currentTime;

  let days = formatNumber(Math.floor(countdown / (1000 * 60 * 60 * 24)));
  let hours = formatNumber(
    Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  let minutes = formatNumber(
    Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60))
  );
  let seconds = formatNumber(Math.floor((countdown % (1000 * 60)) / 1000));

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  if (countdown <= 0) {
    document.getElementById("days").style.display = "none";
    document.getElementById("hours").style.display = "none";
    document.getElementById("minutes").style.display = "none";
    document.getElementById("seconds").style.display = "none";
    document.getElementById("d").style.display = "none";
    document.getElementById("hrs").style.display = "none";
    document.getElementById("mins").style.display = "none";
    document.getElementById("secs").style.display = "none";
    document.getElementById("expired").style.display = "block";
    document.getElementById("expired").innerHTML = "This Giveaway has ended";
  }
}

//To put number in double digits
function formatNumber(n) {
  if (n < 10) {
    return `0${n}`;
  }

  return n;
}

//Set Interval
let countdownInterval = setInterval(countdownTimer, 1000);

//Callling the function
countdownTimer();
