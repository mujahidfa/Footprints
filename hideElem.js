// Runs the first thing before any user input is done
// Used mainly to manage visibility of elements as user interacts with the app
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('footerLoad').style.display = "none";
  document.getElementById('hourglass').style.display = "none";
  document.getElementById('milesContainer').style.display = "none";
  document.getElementById('equivalentResult').style.display = "none";
  document.getElementById('footerEnd').style.display = "none";
  document.getElementById('notDriving').style.display = "none";
});