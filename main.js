let btn = document.querySelector('#btnsubmit');
btn.addEventListener('click', function (e) {
    e.preventDefault();

    let user = document.querySelector('#userid').value.trim();
    let password = document.querySelector('#userpassword').value.trim();

    let errorbox = document.querySelector('.error');
    let errortext = document.querySelector('.error-text');

    // Get stored credentials from localStorage
    const idstored = localStorage.getItem("id");
    const passwordstored = localStorage.getItem("password");

    if (user === "" || password === "") {
        errortext.textContent = "Please enter ID and Password";
        if (errorbox.classList.contains('hide')) {
            errorbox.classList.remove('hide');
        }
    } else if (user !== idstored || password !== passwordstored) {
        errortext.textContent = "You have entered the wrong ID or Password";
        if (errorbox.classList.contains('hide')) {
            errorbox.classList.remove('hide');
        }
    } else {
        // Clear error box before redirecting
        errorbox.classList.add('hide');
        window.location.href = 'paper.html';  // Redirect to another page (e.g., a user dashboard)
    }
});
