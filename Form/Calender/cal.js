var date = new Date(), userDate = null;

const months = [
  "January",
  "February",
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

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    // what if next month lies in next year
    date.getFullYear() + (date.getMonth() == 11) ? 1 : 0,
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    // what if previous month lies in previous year
    date.getFullYear() - (date.getMonth() == 0) ? 1 : 0,
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = (date.getDay() + 6) % 7;

  const lastDayIndex = new Date(
    // what if next month lies in next year
    date.getFullYear() + (date.getMonth() == 11) ? 1 : 0,
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 42 - firstDayIndex - lastDay;

  // show current year as well
  document.querySelector(".date h1").innerHTML = months[date.getMonth()] + " - " + date.getFullYear().toString();

  // new Date() will give today's date and not use the changed date
  // document.querySelector(".date p").innerHTML = new Date().toDateString();

  // show user's selected date if any else 'Select a date'
  document.querySelector(".date p").innerHTML = userDate != null ? userDate.toDateString() : "Select a date";

  // a total of 7 * 6 -> 42 days : end of previous month + current month + start of next month
  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    let day = prevLastDay - x + 1;

    if (
      day === new Date().getDate() &&
      (date.getMonth() + 11) % 12 === new Date().getMonth() &&
      (date.getFullYear() - ((date.getMonth() == 0) ? 1 : 0)) === new Date().getFullYear()
    ) {
      days += `<div class="today prev-date">${day}</div>`;
    } else {
      days += `<div class="prev-date">${day}</div>`;
    }
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear()
    ) {
      days += `<div class="today">${i}</div>`;
    } else if (
      userDate != null &&
      i === userDate.getDate() &&
      date.getMonth() === userDate.getMonth() &&
      date.getFullYear() === userDate.getFullYear()
    ) {
      days += `<div class="user-date">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    if (
      j === new Date().getDate() &&
      (date.getMonth() + 1) % 12 === new Date().getMonth() &&
      (date.getFullYear() + ((date.getMonth() == 11) ? 1 : 0)) === new Date().getFullYear()
    ) {
      days += `<div class="today next-date">${j}</div>`;
    } else {
      days += `<div class="next-date">${j}</div>`;
    }
  }

  monthDays.innerHTML = days;
};

document.querySelector(".prev").addEventListener("click", () => {
  userDate = null;

  if (date.getMonth() > 0) {
    date.setMonth(date.getMonth() - 1);
  }
  else {
    date.setMonth(11);
    date.setFullYear(date.getFullYear() - 1);
  }

  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  userDate = null;

  if (date.getMonth() < 11) {
    date.setMonth(date.getMonth() + 1);
  }
  else {
    date.setMonth(0);
    date.setFullYear(date.getFullYear() + 1);
  }

  renderCalendar();
});

document.querySelector('.days').addEventListener('click', (event) => {
  const selectedDate = parseInt(event.target.innerHTML);
  const dMonth = event.target.className == "prev-date" ? -1 : event.target.className == "next-date" ? 1 : 0;

  if (!isNaN(selectedDate)) {
    userDate = new Date(date.getFullYear(), date.getMonth() + dMonth, selectedDate);
    date.setDate(selectedDate);
    renderCalendar();
  }
});

renderCalendar();
