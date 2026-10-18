const form = document.getElementById("feedback-form");

const savedName = localStorage.getItem("reviewerName");
if (savedName) {
  document.getElementById("welcome-box").textContent =
    "Welcome back, " + savedName + "! Ready to submit another wonderful review?";
  document.getElementById("reviewer-name").value = savedName;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("reviewer-name").value;
  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value;

  console.log(name, rating, comments);

  const errorBox = document.getElementById("error-box");
  errorBox.innerHTML = "";

  const errors = [];

  if (name.trim() === "") {
    errors.push("Please provide your name.");
  }
  if (rating != 5) {
    errors.push("Our company standard requires a 5-star rating.");
  }
  if (!comments.toLowerCase().includes("wonderful")) {
    errors.push("Comments must include the word 'wonderful'.");
  }

  if (errors.length > 0) {
    errorBox.innerHTML = errors.join("<br>");
    return;
  }

  document.getElementById("success-box").textContent =
    "Thank you, " + name.trim() + "! Your glowing review has been recorded.";
  localStorage.setItem("reviewerName", name.trim());
  form.style.display = "none";
});

