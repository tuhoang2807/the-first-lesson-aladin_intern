function addCandidate() {
    var fullName = document.getElementById("fullname").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var goal = document.getElementById("goal").value;
    var referrer = document.getElementById("referrer").value;

    var candidate = {
        fullName: fullName,
        gender: gender,
        dob: dob,
        phoneNumber: phoneNumber,
        email: email,
        address: address,
        education: education,
        experience: experience,
        goal: goal,
        referrer: referrer
    };

    if (fullName === "" || gender === "" || dob === "" || phoneNumber === "" || email === "" || address === "" || education === "" || experience === "" || goal === "") {
        Swal.fire("Lỗi", "Đã có lỗi xảy ra, vui lòng kiểm tra lại !", "warning");
    } else {      
        Swal.fire("Thành công!", "Bạn đã gửi CV thành công, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất", "success");
        clearFields();
    }
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
}
