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

const newsPostForm = document.getElementById('news-post-form');
const newsPostsContainer = document.getElementById('news-posts');

newsPostForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const date = document.getElementById('date').value;
  const  
 description = document.getElementById('description').value;

  // Create a new news item element
  const newsItem = document.createElement('div');
  newsItem.className = 'news-item';
  newsItem.innerHTML = `
    <h3>${title}</h3>
    <p>${date}</p>
    <p>${description}</p>
  `;

  // Append the news item to the container
  newsPostsContainer.appendChild(newsItem);

  // Clear the form fields
  document.getElementById('title').value = '';
  document.getElementById('date').value = '';
  document.getElementById('description').value = '';
});

    function navigateToPage(page) {
      window.location.href = page;
    }

    function updateDropdown() {
      var currentPage = window.location.pathname.split('/').pop(); // Extract the filename from the path
      var teamSelect = document.getElementById('team-select');
      
      // Set the dropdown value to match the current page
      for (var i = 0; i < teamSelect.options.length; i++) {
        if (teamSelect.options[i].value === currentPage) {
          teamSelect.selectedIndex = i;
          break;
        }
      }
    }

    // Call the function to set the dropdown value on page load
    updateDropdown();

    // Optionally, you can add an event listener to handle browser navigation
    window.addEventListener('popstate', updateDropdown);