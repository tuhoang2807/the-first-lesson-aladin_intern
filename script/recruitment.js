function addCandidate() {
  var fullName = document.getElementById("fullname");
  var gender = document.getElementById("gender");
  var dob = document.getElementById("dob");
  var phoneNumber = document.getElementById("phoneNumber");
  var email = document.getElementById("email");
  var address = document.getElementById("address");
  var education = document.getElementById("education");
  var experience = document.getElementById("experience");
  var goal = document.getElementById("goal");
  var referrer = document.getElementById("referrer");

  if (
    validateRequiredEnter([
      fullName,
      gender,
      dob,
      phoneNumber,
      email,
      address,
      education,
      experience,
      goal,
    ]) === false
  ) {
    return;
  }
  //  // SĐT
  if (!validatePhoneNumber(phoneNumber.value)) {
    showMessage(phoneNumber, "Vui lòng nhập số điện thoại hợp lệ (10 chữ số)");
    return;
  }

  //  // email
  if (!validateEmail(email.value)) {
    showMessage(email, "Vui lòng nhập email hợp lệ");
    return;
  }

  Swal.fire(
    "Thành công!",
    "Bạn đã gửi CV thành công, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất",
    "success"
  );
  clearFields();
}

function validateRequiredEnter(inputs) {
  document.querySelector;
  let isCheck = true;
  for (let index = 0; index < inputs.length; index++) {
    console.log({ v: inputs[index].name });
    if (!inputs[index].value || inputs[index].value?.trim() === "") {
      showMessage(inputs[index], `Vui lòng nhập ${inputs[index].name}`);
      isCheck = false;
      break;
    }
  }
  console.log({ isCheck });
  return isCheck;
}

function showMessage(input, message) {
  input.focus();
  const parent = input.parentElement;
  if (message) {
    const messageSpan = parent.querySelector(".message");
    messageSpan.textContent = message;
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}

function displayFileName() {
  var input = document.getElementById("upload-cv");
  var fileName = input.files[0].name;
  document.querySelector(".file-name").textContent = fileName;
}

function clearFields() {
  document.getElementById("fullname").value = "";
  document.getElementById("gender").value = "";
  document.getElementById("dob").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("email").value = "";
  document.getElementById("address").value = "";
  document.getElementById("education").value = "";
  document.getElementById("experience").value = "";
  document.getElementById("goal").value = "";
  document.getElementById("referrer").value = "";

  document.querySelector(".file-name").textContent = "Chưa có tệp được tải lên";

  const messages = document.querySelectorAll(".message");
  console.log({ messages });
  messages.forEach((item) => {
    item.textContent = "";
  });
}
