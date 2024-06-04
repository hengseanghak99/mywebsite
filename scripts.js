// JavaScript to update the time
function updateTime() {
  const timeContainer = document.getElementById('time');
  if (timeContainer) {
      const now = new Date();
      const hours = String(now.getHours()).padStart(2, '0');
      const minutes = String(now.getMinutes()).padStart(2, '0');
      const seconds = String(now.getSeconds()).padStart(2, '0');
      timeContainer.textContent = `${hours}:${minutes}:${seconds}`;
  } else {
      console.error('Element with ID "time" not found.');
  }
}

setInterval(updateTime, 1000);
updateTime();

// jQuery to handle modal
$(document).ready(function() {
console.log("jQuery is working!"); // Check if this message appears in the console
$("#brandsLink").click(function(event) {
  event.preventDefault(); // Prevent the default action
  $("#brandModal").modal('show');
});
});
