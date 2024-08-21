const banner = document.querySelector('.interactive-banner');

banner.addEventListener('click', () => {
  // Add some animation or effect here
  console.log('Banner clicked!');
});

banner.addEventListener('mouseover', () => {
  // Add some animation or effect here
  console.log('Banner hovered!');
});

banner.addEventListener('mouseout', () => {
  // Add some animation or effect here
  console.log('Banner mouseout!');
});

function generateCalendar() {
  const calendarBody = document.getElementById('calendar-body');
  const date = new Date();
  date.setDate(1);
  const month = date.getMonth();
  const year = date.getFullYear();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const firstDay = date.getDay();
  
  let html = '<tr>';
  
  // Empty cells before the first day
  for (let i = 0; i < firstDay; i++) {
      html += '<td></td>';
  }
  
  for (let day = 1; day <= lastDay; day++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      html += `<td class="event" id="${dateStr}" onclick="showEvent('${dateStr}')">${day}</td>`;
      if ((day + firstDay) % 7 === 0) {
          html += '</tr><tr>';
      }
  }
  
  html += '</tr>';
  calendarBody.innerHTML = html;
}

function addEvent() {
  const dateInput = document.getElementById('date').value;
  const teamInput = document.getElementById('team').value;
  if (!dateInput || !teamInput) {
      alert('Please enter both a date and a team name.');
      return;
  }

  const eventCell = document.getElementById(dateInput);
  if (eventCell) {
      eventCell.innerHTML += `<div>${teamInput}</div>`;
      document.getElementById('date').value = '';
      document.getElementById('team').value = '';
  } else {
      alert('Invalid date. Please ensure the date is in the current month.');
  }
}

function showEvent(dateStr) {
  const cell = document.getElementById(dateStr);
  if (cell) {
      alert('Events on ' + dateStr + ':\n' + cell.innerText.replace(/\n/g, ', '));
  }
}

window.onload = generateCalendar;

const selectElement = document.querySelector('.button');
const currentPage = window.location.pathname;

selectElement.value = currentPage;