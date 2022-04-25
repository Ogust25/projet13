/* const boxTxt = document.querySelector(".boxTxt");
const testTxt = document.querySelector(".testTxt");
const titleTxt = document.querySelector(".titleTxt")

let counter = 0;
boxTxt.addEventListener("click", function(){
    counter++;
    switch (counter % 2) {
        case 0:
            testTxt.classList.add("hidden");
            titleTxt.classList.remove("font-bold");
            break;
    
        default:
            testTxt.classList.remove("hidden");
            titleTxt.classList.add("font-bold");
            break;
    }
 
}) */

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