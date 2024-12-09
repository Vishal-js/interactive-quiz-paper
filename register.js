const idField = document.querySelector('#idfield');
const passwordField = document.querySelector('#passwordfield');
const confirmField = document.querySelector('#confirm-field');
const namearea = document.querySelector('#namefeild');
const phone = document.querySelector('#phonefield');

let extrabox = document.querySelector('.extra');
let extratext = document.querySelector('.extratext');

document.querySelector('#regbtns').addEventListener('click', function (f) {
    f.preventDefault();

    const inputs = document.querySelectorAll('.inputs'); // Select all fields with class "inputs"
    let allFilled = true; // Assume all fields are filled

    // Check if all input fields are filled
    inputs.forEach(input => {
        if (input.value.trim() === "") {
            allFilled = false;
            input.classList.add('error'); // Add error highlight to empty fields
        } else {
            input.classList.remove('error'); // Remove error highlight if filled
        }
    });

    if (!allFilled) {
        alert("Please fill out all fields");
        return; // Stop further execution
    }

    const feildsec = passwordField.value.trim();
    const fieldthird = confirmField.value.trim();

    if (feildsec !== fieldthird) {
        extratext.textContent = "Passwords didn't match!";
        extrabox.classList.remove('hide');
        return; // Stop further execution
    }

    // If all validations pass
    extratext.textContent = "You have successfully registered!";
    extrabox.classList.remove('hide');

    // Save data to localStorage
    localStorage.setItem("id", idField.value.trim());
    localStorage.setItem("password", fieldthird);
    localStorage.setItem("name", namearea.value.trim());
    localStorage.setItem("phone", phone.value.trim());

    // Redirect after success
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
});
