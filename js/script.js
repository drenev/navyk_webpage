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
