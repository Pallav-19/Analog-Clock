function seconds() {
  const date = new Date();
  const second = date.getSeconds();
  const secondAngles = 6*second;
  const secondHand = document.querySelector(".second");
  secondHand.style.transform = `rotate(${secondAngles + 90}deg)`;
//   console.log(second);
}
function minutes() {
  const date = new Date();
  const minute = date.getMinutes();
  const minuteAngles = 6 * minute;
  const minuteHand = document.querySelector(".minute");
  minuteHand.style.transform = `rotate(${minuteAngles + 90}deg)`;
//   console.log(minute);
}
function hours() {
  const date = new Date();
  const hour = date.getHours();
  const hourAngles = 30 * hour;
  const hourHand = document.querySelector(".hour");
  hourHand.style.transform = `rotate(${hourAngles + 90}deg)`;
//   console.log(hour);
}



setInterval(seconds, 1000);
setInterval(minutes,1000);
setInterval(hours,1000);

