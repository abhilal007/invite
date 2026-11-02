// Wedding ceremony: 10 December 2026 at 11:30 AM, India Standard Time.
const weddingDate = new Date('2026-12-10T11:30:00+05:30').getTime();
const fields = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds')
};

function updateCountdown() {
  const remaining = weddingDate - Date.now();
  if (remaining <= 0) {
    document.getElementById('count-title').innerHTML = 'Today, we begin <em>forever</em>';
    Object.values(fields).forEach((field) => { field.textContent = '00'; });
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  const minutes = Math.floor((remaining % 3600000) / 60000);
  const seconds = Math.floor((remaining % 60000) / 1000);
  fields.days.textContent = String(days).padStart(3, '0');
  fields.hours.textContent = String(hours).padStart(2, '0');
  fields.minutes.textContent = String(minutes).padStart(2, '0');
  fields.seconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
