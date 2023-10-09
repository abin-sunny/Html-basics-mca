// validation.js

function validateForm() {
  let x = document.myForm.fname.value;
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var dob = document.getElementById("dob").value;
  var mobno = document.getElementById("mobno").value;
  var guardian = document.getElementById("guardian").value;
  var addr = document.getElementById("addr").value;
  var paddr = document.getElementById("paddr").value;
  var hobbies = document.getElementById("hobbies").value;
  var course = document.getElementById("course").value;

  // Check if First Name is empty
  if (fname === "") {
    alert("First Name must be filled out");
    return false;
  }

  // Check if Last Name is empty
  if (lname === "") {
    alert("Last Name must be filled out");
    return false;
  }

  // Check if Email is empty
  if (email === "") {
    alert("Email must be filled out");
    return false;
  } else if (!validateEmail(email)) {
    alert("Invalid Email Address");
    return false;
  }

  // Check if Dob is empty
  if (dob === "") {
    alert("Date of Birth must be filled out");
    return false;
  }

  // Check if Phone number is empty
  if (mobno === "") {
    alert("Phone Number must be filled out");
    return false;
  } else if (!validatePhone(mobno)) {
    alert("Invalid Phone Number");
    return false;
  }

  // Check if Guardian Nam
  if (guardian === "") {
    alert("Guardian Name must be filled out");
    return false;
  }

  // Check if Present Address is empty
  if (addr === "") {
    alert("Present Address must be filled out");
    return false;
  }

  // Check if Permanent Address
  if (!document.getElementById("samepaddrss").checked && paddr === "") {
    alert("Permanent Address must be filled out");
    return false;
  }

  // Check if Hobbies is empty
  if (hobbies === "") {
    alert("Hobbies must be filled out");
    return false;
  }

  // Check if Course is selected
  if (course === "") {
    alert("Please select a course");
    return false;
  }
  return true;
}

// Email validation function
function validateEmail(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Phone number validation
function validatePhone(phone) {
  var phonePattern = /^[0-9]{10}$/;
  return phonePattern.test(phone);
}

function sameAddress() {
  let checkbox = document.getElementById("same");
  taddress = document.getElementById("addr");
  paddress = document.getElementById("paddr");
  if (checkbox.checked) {
    paddress.value = taddress.value;
  } else if (checkbox.checked == false) {
    paddress.value = "";
  }
}
