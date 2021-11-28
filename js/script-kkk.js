var ac = document.getElementsByClassName("accordion");
var i;

// accordion-elemendile klikkimisel muudetakse küsimuse vastus nähtavaks, kui ta ei ole nähtav ja vastupidi
for (i = 0; i < ac.length; i++) {
  ac[i].addEventListener("click", function() {
    var vastus = this.nextElementSibling;
    if (vastus.style.display === "block") {
      vastus.style.display = "none";
    } else {
      vastus.style.display = "block";
    }
  });
}