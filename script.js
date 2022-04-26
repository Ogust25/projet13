/* Version Fonctionnelle mais sans fermeture auto */

let acc = document.querySelectorAll(".accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let boxAcc = this.nextElementSibling;
    if (boxAcc.style.maxHeight) {
      boxAcc.style.maxHeight = null;
    } else {
      boxAcc.style.maxHeight = boxAcc.scrollHeight + "px";
    } 
  });
}


/* Version rire */

/* let acc = document.querySelectorAll(".accordion");

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    let boxAcc = document.querySelectorAll(".boxAcc")
    boxAcc.forEach(e => {
      e.classList.remove("active");
      this.classList.toggle("active");
      if (e.style.maxHeight) {
        e.style.maxHeight = null;
      } else {
        e.style.maxHeight = e.scrollHeight + "px";
      }
    }); 
  });
} */