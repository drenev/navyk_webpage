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

// COURSE SWITCH
// const coursesAnimation = document.querySelectorAll(".courses__item");

// for (let i = 0; i < coursesAnimation.length; i++) {
//   coursesAnimation[i].onmouseover = function (event) {
//     coursesAnimation[i].style.display = "none";
//     coursesBlock[i].style.display = "flex";
//   };

//   coursesBlock[i].onmouseout = function (event) {
//     coursesAnimation[i].style.display = "flex";
//     coursesBlock[i].style.display = "none";
//   };
// }
