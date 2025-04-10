// logout.js
const logoutBtn = document.getElementById("logout");

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user"); // clear the session
  window.location.href = "login.html"; // redirect to login
});
