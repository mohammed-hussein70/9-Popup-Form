function openForm() {
  let openBtn = document.querySelector(".open");
  let closeBtn = document.querySelector(".close");
  let form = document.querySelector(".container");
  openBtn.addEventListener("click", function () {
    form.style.display = "block";
    openBtn.style.display = "none";
  });
  closeBtn.addEventListener("click", function () {
    form.style.display = "none";
    openBtn.style.display = "block";
  });
}
window.onload = openForm;
