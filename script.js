const form = document.getElementById("feedback-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("reviewer-name").value;
  const rating = document.getElementById("rating").value;
  const comments = document.getElementById("comments").value;

  console.log(name, rating, comments);
});