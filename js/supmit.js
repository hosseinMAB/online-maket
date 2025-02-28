const scriptUrl =
  "https://script.google.com/macros/s/AKfycbyvBnd6sge85gXy2iBJyZYzTufuRHevkGgxA5gXLB2pbqa-EhZ8gqTBe7QfpxKE95U6/exec";

let form = document.getElementById("from_id");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptUrl, {
    mode: "no-cors",
    method: "POST",
    body: new FormData(form),
  }).catch((error) => console.error("error", error.message));
});
