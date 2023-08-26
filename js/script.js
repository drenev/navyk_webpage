// FORM SWITCH
const studentButton = document.getElementById("contactFormStudentButton");
const parentButton = document.getElementById("contactFormParentButton");
const studentName = document.getElementById("studentName");
const studentPhoneNumber = document.getElementById("studentPhoneNumber");

parentButton.addEventListener("change", () => {
  if (this.checked) {
    studentName.style.display = "inline";
    studentPhoneNumber.style.display = "inline";
  } else {
    studentName.style.display = "none";
    studentPhoneNumber.style.display = "none";
  }
});

studentButton.addEventListener("change", () => {
  if (this.checked) {
    studentName.style.display = "none";
    studentPhoneNumber.style.display = "none";
  } else {
    studentName.style.display = "inline";
    studentPhoneNumber.style.display = "inline";
  }
});

let coll = document.getElementsByClassName("courses__item");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.style.border = "#e0caf0 0px solid";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.border = "#e0caf0 4px solid";
    }
  });
}
