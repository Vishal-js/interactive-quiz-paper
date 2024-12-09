let idfeild = document.querySelector('#usermatchid');
const idstored = localStorage.getItem("id");

let otpsbox = document.querySelector('.otpbox');
let otpstext = document.querySelector('.otptext');

let btns = document.querySelector('#btnotp');
let submitbtn = document.querySelector('#btnforget');
let generatedOTP; // Declare a global variable to store the generated OTP

btns.addEventListener('click', function (g) {
    g.preventDefault();

    const idfilledout = idfeild.value.trim();

    if (idfilledout !== idstored) {
        alert("ID did not match");
    } else {
        // Generate a 6-digit OTP
        let min = 111111;
        let max = 999999;

        generatedOTP = Math.floor(Math.random() * (max - min + 1)) + min;

        // Display the OTP
        otpstext.textContent = `Your OTP is ${generatedOTP}`;

        // Show the OTP box and hide the button
        if (otpsbox.classList.contains('hide')) {
            otpsbox.classList.remove('hide'); // Show OTP box
        }
        btns.classList.add('hide'); // Hide the button
        submitbtn.classList.remove('hide'); // Show the submit button
    }
});

let otpfeild = document.querySelector('#otparea');

submitbtn.addEventListener('click', function (h) {
    h.preventDefault();

    const enteredOTP = otpfeild.value.trim();

    if (enteredOTP === generatedOTP.toString()) {
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 100);
    } else {
        alert("Invalid OTP");
    }
});