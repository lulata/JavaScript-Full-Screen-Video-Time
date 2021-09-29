// DOM Elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//Options
const showAmPm = true;
//Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  //Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  //12h format
  //hour = hour % 12 || 12;

  //Output time
  time.innerHTML = ` ${hour}<span>:</span>${addZero(min)}`;
  //To add seconds and am pm
  //<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}` ;

  setTimeout(showTime, 1000);
}
//Add zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//Set background
function setBg() {
  let today = new Date(),
    hour = today.getHours();

  if (6 >= hour < 12) {
    //Moring
    document.body.style.backgroundVideo = "url('day.mp4')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'norepeat';
    greeting.textContent = 'Good Morning';
  } else if (12 >= hour < 18) {
    //Afternoon
    document.body.style.backgroundVideo = "url('afternoon.mp4')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'norepeat';
    greeting.textContent = 'Good Afternoon';
  } else if (18 >= hour < 6) {
    //Evenging
    document.body.style.backgroundVideo = "url('night.mp4')";
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'norepeat';
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = 'white';
  }
}

//Get name
function setName(e) {
  if (e.type === 'keypress') {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]'
  } else {
    name.textContent = localStorage.getItem('name')
  }
}

//GEt focus
function setFocus(e) {
  if (e.type === 'keypress') {
    //Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]'
  } else {
    focus.textContent = localStorage.getItem('focus')
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


//Run
showTime();
setBg();
getName();
getFocus();