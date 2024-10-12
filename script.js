// My Market open/close functionality
let openStoreBtn = document.getElementById("arrow-down");
let storeContainer = document.getElementById("store-search");

function openStore() {
    storeContainer.style.visibility = "visible";
}

function closeStore() {
    storeContainer.style.visibility = "hidden";
}

// All Categories open/close functionality
let openBurgerBtn = document.getElementById("open-burger");
let allCatCont = document.getElementById("all-categ-cont");
let opacityCont = document.querySelector(".opacity-container");

function openBurger() {
    allCatCont.style.visibility = "visible";
    opacityCont.style.visibility = "visible";
    clickaway([allCatCont, openBurgerBtn], closeAll);
}

function closeAll() {
    allCatCont.style.visibility = "hidden";
    opacityCont.style.visibility = "hidden";
}

// Function to handle clickaway functionality
function clickaway(excludeElements, callback) {
    function handleClickOutside(event) {
        // Check if the click is outside the excluded elements
        let isClickOutside = excludeElements.every(element => !element.contains(event.target));
        
        if (isClickOutside) {
            callback();  // Execute the callback (closeAll)
            document.removeEventListener('click', handleClickOutside); // Remove the event listener
        }
    }

    // Add the click event listener to the document
    document.addEventListener('click', handleClickOutside);
}

// Add click event listener to open burger button
openBurgerBtn.addEventListener('click', openBurger);


/*
// SIMPLE WAY - 1
// Showing / hiding content in the All Categories section
// No 1 Get the Elements
let hoverElement = document.getElementById("hover-element");
let hoverContent = document.getElementById("hover-content");

let hoverElement2 = document.getElementById("hover-element-2");
let hoverContent2 = document.getElementById("hover-content-2");

let hoverElement3 = document.getElementById("hover-element-3");
let hoverContent3 = document.getElementById("hover-content-3");

let hoverElement4 = document.getElementById("hover-element-4");
let hoverContent4 = document.getElementById("hover-content-4");

let hoverElement5 = document.getElementById("hover-element-5");
let hoverContent5 = document.getElementById("hover-content-5");

let hoverElement6 = document.getElementById("hover-element-6");
let hoverContent6 = document.getElementById("hover-content-6");

let hoverElement7 = document.getElementById("hover-element-7");
let hoverContent7 = document.getElementById("hover-content-7");

let hoverElement8 = document.getElementById("hover-element-8");
let hoverContent8 = document.getElementById("hover-content-8");

let hoverElement9 = document.getElementById("hover-element-9");
let hoverContent9 = document.getElementById("hover-content-9");

let hoverElement10 = document.getElementById("hover-element-10");
let hoverContent10 = document.getElementById("hover-content-10");

let hoverElement11 = document.getElementById("hover-element-11");
let hoverContent11 = document.getElementById("hover-content-11");

let hoverElement12 = document.getElementById("hover-element-12");
let hoverContent12 = document.getElementById("hover-content-12");

let hoverElement13 = document.getElementById("hover-element-13");
let hoverContent13 = document.getElementById("hover-content-13");

let hoverElement14 = document.getElementById("hover-element-14");
let hoverContent14 = document.getElementById("hover-content-14");

let hoverElement15 = document.getElementById("hover-element-15");
let hoverContent15 = document.getElementById("hover-content-15");

let hoverElement16 = document.getElementById("hover-element-16");
let hoverContent16 = document.getElementById("hover-content-16");

let hoverElement17 = document.getElementById("hover-element-17");
let hoverContent17 = document.getElementById("hover-content-17");

// No 2 Show the content when mouse is over the element
hoverElement.addEventListener('mouseover', () => {
    hoverContent.style.visibility = 'visible';
});

hoverElement2.addEventListener('mouseover', () => {
    hoverContent2.style.visibility = 'visible';
});

hoverElement3.addEventListener('mouseover', () => {
    hoverContent3.style.visibility = 'visible';
});

hoverElement4.addEventListener('mouseover', () => {
    hoverContent4.style.visibility = 'visible';
});

hoverElement5.addEventListener('mouseover', () => {
    hoverContent5.style.visibility = 'visible';
});

hoverElement6.addEventListener('mouseover', () => {
    hoverContent6.style.visibility = 'visible';
});

hoverElement7.addEventListener('mouseover', () => {
    hoverContent7.style.visibility = 'visible';
});

hoverElement8.addEventListener('mouseover', () => {
    hoverContent8.style.visibility = 'visible';
});

hoverElement9.addEventListener('mouseover', () => {
    hoverContent9.style.visibility = 'visible';
});

hoverElement10.addEventListener('mouseover', () => {
    hoverContent10.style.visibility = 'visible';
});

hoverElement11.addEventListener('mouseover', () => {
    hoverContent11.style.visibility = 'visible';
});

hoverElement12.addEventListener('mouseover', () => {
    hoverContent12.style.visibility = 'visible';
});

hoverElement13.addEventListener('mouseover', () => {
    hoverContent13.style.visibility = 'visible';
});

hoverElement14.addEventListener('mouseover', () => {
    hoverContent14.style.visibility = 'visible';
});

hoverElement15.addEventListener('mouseover', () => {
    hoverContent15.style.visibility = 'visible';
});

hoverElement16.addEventListener('mouseover', () => {
    hoverContent16.style.visibility = 'visible';
});

hoverElement17.addEventListener('mouseover', () => {
    hoverContent17.style.visibility = 'visible';
});


// No 3 Hide the content when mouse leaves the element
hoverElement.addEventListener('mouseout', () => {
    hoverContent.style.visibility = "hidden";
});

hoverElement2.addEventListener('mouseout', () => {
    hoverContent2.style.visibility = "hidden";
});

hoverElement3.addEventListener('mouseout', () => {
    hoverContent3.style.visibility = "hidden";
});

hoverElement4.addEventListener('mouseout', () => {
    hoverContent4.style.visibility = "hidden";
});

hoverElement5.addEventListener('mouseout', () => {
    hoverContent5.style.visibility = "hidden";
});

hoverElement6.addEventListener('mouseout', () => {
    hoverContent6.style.visibility = "hidden";
});

hoverElement7.addEventListener('mouseout', () => {
    hoverContent7.style.visibility = "hidden";
});

hoverElement8.addEventListener('mouseout', () => {
    hoverContent8.style.visibility = "hidden";
});

hoverElement9.addEventListener('mouseout', () => {
    hoverContent9.style.visibility = "hidden";
});

hoverElement10.addEventListener('mouseout', () => {
    hoverContent10.style.visibility = "hidden";
});

hoverElement11.addEventListener('mouseout', () => {
    hoverContent11.style.visibility = "hidden";
});

hoverElement12.addEventListener('mouseout', () => {
    hoverContent12.style.visibility = "hidden";
});

hoverElement13.addEventListener('mouseout', () => {
    hoverContent13.style.visibility = "hidden";
});

hoverElement14.addEventListener('mouseout', () => {
    hoverContent14.style.visibility = "hidden";
});

hoverElement15.addEventListener('mouseout', () => {
    hoverContent15.style.visibility = "hidden";
});

hoverElement16.addEventListener('mouseout', () => {
    hoverContent16.style.visibility = "hidden";
});

hoverElement17.addEventListener('mouseout', () => {
    hoverContent17.style.visibility = "hidden";
});
*/

// ADVANCED WAY - 2

const hoverElements = document.querySelectorAll('[id^="hover-element"]');
const hoverContents = document.querySelectorAll('[id^="hover-content"]');

// Helper function to show the content
function showContent(content) {
    if (content) {
        content.style.visibility = 'visible';
        opacityCont.style.visibility = "visible";
    }
}

// Helper function to hide the content after checking if the mouse is outside both elements
function hideContent(content) {
    if (content) {
        setTimeout(() => {
            if (!content.matches(':hover')) {
                content.style.visibility = 'hidden';
                opacityCont.style.visibility = "hidden";
            }
        }, 100); // Small delay to prevent flickering
    }
}

hoverElements.forEach((hoverElement, index) => {
    const hoverContent = hoverContents[index];

    if (hoverContent) {
        // Show content when hovering over hoverElement
        hoverElement.addEventListener('mouseover', () => showContent(hoverContent));

        // Keep content visible when hovering over hoverContent
        hoverContent.addEventListener('mouseover', () => showContent(hoverContent));

        // Hide content when mouse leaves both hoverElement and hoverContent
        hoverElement.addEventListener('mouseout', () => hideContent(hoverContent));
        hoverContent.addEventListener('mouseout', () => hideContent(hoverContent));
    }
});

// Show/hide main login container
// Step 1 - Get the elements
let mainSignIn = document.getElementById("sign-in-open");
let showLogIn = document.getElementById("show-login");
let hideLogIn = document.getElementById("hide-login");
let showCurrent = document.getElementById("current-customer");
let hideCurrent = document.getElementById("hide-current");
let showLoginBtn = document.getElementById("login-show-cont");
let showRegisterCont = document.getElementById("show-registration-container");
let closeRegisterCont = document.getElementById("register-close");
let backBtn = document.getElementById("back-to-signin-page");
let registerCta = document.querySelector(".register-now-CTA");
let loginCta = document.querySelector(".login-here-CTA");
let verificationCont = document.querySelector(".verification-container");
let verificationNext = document.querySelector("#next-verification");
let sendCodeCta = document.getElementById("send-code-CTA");
let dataContainer = document.querySelector(".data-container");
let registerNowCta = document.getElementById("register-now-CTA");
let successContainer = document.querySelector(".registration-success-container");
let greenCta = document.querySelector(".green-CTA");
let myProfileCont = document.querySelector(".customer-container-final");
let logoutCta = document.querySelector(".logout-CTA");
let exitMyProfile = document.querySelector(".right-x-part");



// Step 2 - Make functions to show and hide the main login container

// PART 1 - SHOWING
function openSignIn() {
    showLogIn.style.visibility = "visible";
};


function openCurrentLogin() {
    showCurrent.style.visibility = "visible";
};

function openRegistrationForm() {
    showRegisterCont.style.visibility = "visible";
};

function backToMainLogin() {
    showRegisterCont.style.visibility = "hidden";
};

function goToRegister() {
    showRegisterCont.style.visibility = "visible";
};

function goToLogin() {
    showRegisterCont.style.visibility = "hidden";
};

function toVerificationCont() {
    verificationCont.style.visibility = "visible";
};

function goToDataContainer() {
    dataContainer.style.visibility = "visible";
};

function goToSuccessCont() {
    successContainer.style.visibility = "visible";
};

function goToMyProfile() {
    myProfileCont.style.visibility = "visible";
};

function goToLoginFirst() {
    myProfileCont.style.visibility = "hidden";
    successContainer.style.visibility = "hidden";
    dataContainer.style.visibility = "hidden";
    verificationCont.style.visibility = "hidden";
    showRegisterCont.style.visibility = "hidden";
    showLogIn.style.visibility = "visible";
}

// PART 2 - HIDING
function closeSignIn() {
    showLogIn.style.visibility = "hidden";
};

function closeRegister() {
    showRegisterCont.style.visibility = "hidden";
}

function closeCurrentLogin() {
    showCurrent.style.visibility = "hidden";
};


// SHOW / HIDE PASSWORDS

let passwordHiddenInput = document.querySelector(".password-input");
let iconHidden = document.querySelector(".eye-icon");
let iconShown = document.querySelector(".eye-icon-show");

// Show password and switch icons

iconHidden.addEventListener('click', function () {
    passwordHiddenInput.type = "text";
    iconHidden.style.visibility = "hidden";
    iconShown = style.visibility = "visible";
});

// Hide password and switch icons
iconShown.addEventListener('click', function() {
    passwordHiddenInput.type = "password";  
    iconHidden.style.visibility = "visible";  
    iconShown.style.visibility = "hidden";  
});

console.log(passwordHiddenInput);
console.log(iconHidden);
console.log(iconShown);