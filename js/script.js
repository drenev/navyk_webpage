const studentButton = document.getElementById("contactFormStudentButton");
const parentButton = document.getElementById("contactFormParentButton");
const studentName = document.getElementById("studentName");
const studentPhoneNumber = document.getElementById("studentPhoneNumber");

// я не знаю что это :D
document.addEventListener("DOMContentLoaded", () => {
  parentButton.checked = true;
  studentName.style.display = "none";
  studentPhoneNumber.style.display = "none";
});

// переключение по кнопке РОДИТЕЛЬ
parentButton.addEventListener("change", () => {
  if (this.checked) {
    studentName.style.display = "inline";
    studentPhoneNumber.style.display = "inline";
  } else {
    studentName.style.display = "none";
    studentPhoneNumber.style.display = "none";
  }
});

// переключение по кнопке УЧЕНИК
studentButton.addEventListener("change", () => {
  if (this.checked) {
    studentName.style.display = "none";
    studentPhoneNumber.style.display = "none";
  } else {
    studentName.style.display = "inline";
    studentPhoneNumber.style.display = "inline";
  }
});

// разворачивающийся блок
// let coll = document.getElementsByClassName("courses__item");
// for (let i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     let content = this.nextElementSibling;

//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

const buttons = document.querySelector(".contact-form__button");
const chekedPersonalData = document.querySelector(".custom-checkbox");
const parentName = document.querySelector("#parentName");
const parentPhoneNumber = document.querySelector("#parentPhoneNumber");

// функция отправки данных из формы в бота
function SendFormInfo() {
  let klientInformation = document.querySelectorAll(".contact-form__info-line");
  let klientClass = document.querySelector(".contact-form__select");
  let order = JSON.stringify({
    parent_name: klientInformation[0].value,
    parent_number: klientInformation[1].value,
    student_name: klientInformation[2].value,
    student_number: klientInformation[3].value,
    student_comment: klientInformation[4].value,
    student_class: klientClass.value
  });
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
    });
  klientInformation.forEach((e) => {
    e.value = "";
  });
  alert("Заявка успешно отправлена!");
}

// отправка формы
buttons.addEventListener("click", (e) => {
  e.preventDefault();
  // проверка полей при заполнение РОДИТЕЛЕМ
  if (parentButton.checked) {
    if (
      // проверка чекбокса и полей родителя (когда всё заполнено)
      chekedPersonalData.checked &&
      parentName.value != "" &&
      parentPhoneNumber.value != "" 
    ) {
      SendFormInfo();
    } else if (
      // проверка полей родителя (когда не заполнены поля)
      parentName.value == "" ||
      parentPhoneNumber.value == ""
    ) {
      alert("Заполнены не все обязательные поля");
    } else if (!chekedPersonalData.checked) {
      // проверка чекбокса (когда он не нажат)
      alert("Вы не приняли условия обработки персональных данных");
    }

    // проверка полей при заполнение УЧЕНИКОМ
  } else if (studentButton.checked) {
    if (
      // проверка чекбокса и полей родителя (когда всё заполнено)
      chekedPersonalData.checked &&
      parentName.value != "" &&
      parentPhoneNumber.value != "" &&
      studentName.value != "" &&
      studentPhoneNumber.value != ""
    ) {
      SendFormInfo();
    } else if (
      // проверка полей родителя (когда не заполнены поля)
      parentName.value == "" ||
      parentPhoneNumber.value == "" ||
      studentName.value == "" ||
      studentPhoneNumber.value == ""
    ) {
      alert("Заполнены не все обязательные поля");
    } else if (!chekedPersonalData.checked) {
      // проверка чекбокса (когда он не нажат)
      alert("Вы не приняли условия обработки персональных данных");
    }
  }
});
