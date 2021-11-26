var acd = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acd.length; i++) {
  acd[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var alumine = this.nextElementSibling;
    if (alumine.style.display === "block") {
      alumine.style.display = "none";
    } else {
      alumine.style.display = "block";
    }
  });
}