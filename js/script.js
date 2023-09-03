// FORM SWITCH
const studentButton = document.getElementById("contactFormStudentButton");
const parentButton = document.getElementById("contactFormParentButton");
const studentName = document.getElementById("studentName");
const studentPhoneNumber = document.getElementById("studentPhoneNumber");

document.addEventListener("DOMContentLoaded", () => {
  parentButton.checked = true;
  studentName.style.display = "none";
  studentPhoneNumber.style.display = "none";
});

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
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const buttons = document.querySelector(".contact-form__button");

buttons.addEventListener("click", (e) => {
  e.preventDefault();

  const chekedPersonalData = document.querySelector(".custom-checkbox");
  if (chekedPersonalData.checked) {
    let klientInformation = document.querySelectorAll(
      ".contact-form__info-line"
    );
    let klientClass = document.querySelector(".contact-form__select");
    let order = JSON.stringify({
      parent_name: klientInformation[0].value,
      parent_number: klientInformation[1].value,
      parent_mail: klientInformation[2].value,
      student_name: klientInformation[3].value,
      student_number: klientInformation[4].value,
      student_class: klientClass.value,
    });
    console.log(order);
    fetch("/api/callback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: order,
    })
      .then((response) => response.json())
      .then((result) => {
        document.dispatchEvent(new CustomEvent("modalclose"));
        //console.log(result)
      });
  }
});
