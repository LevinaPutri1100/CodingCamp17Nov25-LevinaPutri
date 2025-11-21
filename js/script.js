// 1. Welcoming text
let userName = prompt("Masukkan nama kamu:");
document.getElementById("welcome").innerText = "Hi " + userName + ", Welcome To Website";

// 2. Form validation
const form = document.getElementById("messageForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const msg = document.getElementById("msg").value;

  if (!name || !email || !phone || !msg) {
    alert("Semua field harus diisi!");
    return;
  }

  result.innerHTML = `
    <h3>Data Terkirim:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${msg}</p>
  `;
});