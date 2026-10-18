const form = document.getElementById("feedback-form");

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
});

