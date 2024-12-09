// Function to display user information from localStorage
function displayUserInfo(selector, storageKey) {
    const element = document.querySelector(selector);
    const storedValue = localStorage.getItem(storageKey);
    if (element && storedValue) {
        element.textContent = storedValue;
    }
}

// Function to toggle visibility of question sets and user info
// Function to toggle visibility of question sets and user info
function toggleVisibility(triggerSelector, showSelector, hideSelectors) {
    const triggerElement = document.querySelector(triggerSelector);
    const showElement = document.querySelector(showSelector);
    const hideElements = hideSelectors.map(selector => document.querySelector(selector));

    if (triggerElement && showElement && hideElements.length) {
        triggerElement.addEventListener('click', (event) => {
            event.preventDefault();
            
            // If the paper to show is already visible, do nothing
            if (showElement.classList.contains('hide')) {
                showElement.classList.remove('hide');
                hideElements.forEach(hideElement => hideElement.classList.add('hide'));
            } else {
                // If the paper is visible and clicked again, don't do anything
                return;
            }
        });
    }
}


// Display user details
displayUserInfo('#userid', 'name');
displayUserInfo('.username', 'name');
displayUserInfo('.useremail', 'id');
displayUserInfo('.userphone', 'phone');

// Toggle visibility for questions and user dashboard
toggleVisibility('#html', '.question-set1', ['.question-set2', '.user-info']);
toggleVisibility('#css', '.question-set2', ['.question-set1', '.user-info']);

// Toggle visibility for the user dashboard
const userDashboard = document.querySelector('#dasharea');
const userInfo = document.querySelector('.user-info');
const questionSets = ['.question-set1', '.question-set2'].map(selector => document.querySelector(selector));

if (userDashboard && userInfo && questionSets.length) {
    userDashboard.addEventListener('click', () => {
        if (userInfo.classList.contains('hide')) {
            userInfo.classList.remove('hide');
            questionSets.forEach(set => set.classList.add('hide'));
        }
    });
}






// Define answers for each paper
// Define answers for each paper
let htmlans = ["<div>", "<head>", "<section>", "text", "password", "submit", "<table>", "<tr>", "<td>", "<div>", "<footer>"];
let cssans = ["color", "background-color", "border", "padding", "margin", "font-size", "width", "height"];

// Store user answers
let collectedAnswers = [];

// Generalize the answer validation function
function validatePaper(paperType) {
    let answersArray;

    // Select the correct answers array based on the paper type
    if (paperType === "html") {
        answersArray = htmlans;
    } else if (paperType === "css") {
        answersArray = cssans;
    } else {
        console.log("Invalid paper type.");
        return;
    }

    // Collect answers only for the selected paper type
    let selector = document.querySelectorAll(`.ans.${paperType}`);
    collectedAnswers = []; // Reset collected answers on each submission

    selector.forEach(checkbox => {
        if (checkbox.checked) {
            const label = checkbox.nextElementSibling.textContent.trim();
            collectedAnswers.push(label);
        }
    });

    // Filter correct and incorrect answers
    let correctAnswers = collectedAnswers.filter(answer => answersArray.includes(answer));
    let incorrectAnswers = collectedAnswers.filter(answer => !answersArray.includes(answer));

    // Display the results
    alert(`Correct answers: ${correctAnswers.length} out of ${answersArray.length}`);
    console.log("Correct answers: ", correctAnswers);
    console.log("Incorrect answers: ", incorrectAnswers);

    // Reset the checkboxes after the alert
    resetPaper(paperType);
}

// Function to reset the paper by unchecking all checkboxes
function resetPaper(paperType) {
    let selector = document.querySelectorAll(`.ans.${paperType}`);
    selector.forEach(checkbox => {
        checkbox.checked = false;  // Uncheck the checkbox
    });
}

// Add event listeners for the submit buttons for both forms
document.querySelector("#btna").addEventListener('click', function (event) {
    event.preventDefault();
    if (document.querySelector(".question-set1")) {
        validatePaper("html");  // Validate HTML paper
    } else if (document.querySelector(".question-set2")) {
        validatePaper("css");  // Validate CSS paper
    } else {
        console.log("No valid paper selected.");
    }
});
