function openLoginModal() {
    // Your logic to open the login modal goes here
    alert("Login modal opened!");
}

function openGetStartedModal() {
    // Your logic to open the get started modal goes here
    alert("Get Started modal opened!");
}

    // document.addEventListener('DOMContentLoaded', function () {
    //     var navbarIcon = document.querySelector('.navbar-icon');
    //     var navList = document.querySelector('nav ul');

    //     navbarIcon.addEventListener('click', function () {
    //         // Toggle the visibility of the navigation items
    //         navList.style.display = (navList.style.display === 'block' || navList.style.display === '') ? 'none' : 'block';
    //         // navList.style.marginTop=(navList.style.display==='block')?'100px':"0px";
    //     });
    // });

    var toggle = false;
var sideBar = document.getElementsByClassName('side-bar')[0];
var closeBtn = document.getElementsByClassName('close-btn')[0];

function closeBtnClicked() {
    
    sideBar.style.display = 'none';
    toggle = false;
}

function iconClicked() {
    if (!toggle) {
        sideBar.style.display = 'block';
    } 
    toggle = !toggle;
}


// for section 3: countedown time
// Replace the target date with your desired countdown end date
const countdownDate = new Date('February 28, 2024 23:59:59').getTime();

// Update the countdown every 1 second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${hours}h : ${minutes}m : ${seconds}s`;

    // If the countdown is over, display a message or take additional actions
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
        // You can add additional actions here when the countdown reaches zero
    }
}

// Function to be called when the "Order now" button is clicked
function placeOrder() {
    // Add your logic for placing the order here
    alert('Order placed with $20 discount!');
}
// call to action for section
// Function to be called when the "Explore Snacks" button is clicked
function exploreSnacks() {
    // Add your logic for redirecting to the snacks page or performing other actions
    window.location.href = '/snacks'; // Replace with the actual URL or action
}
//  bottom up form animation section
// Function to open the slide-up form after 15 seconds
setTimeout(openSlideUpForm, 15000);

function openSlideUpForm() {
    const slideUpForm = document.getElementById('slideUpForm');
    slideUpForm.style.display = 'block';
    setTimeout(() => {
        slideUpForm.style.transform = 'translateY(-100%)';
    }, 10);
}

// Function to close the slide-up form
function closeSlideUpForm() {
    const slideUpForm = document.getElementById('slideUpForm');
    slideUpForm.style.transform = 'translateY(0)';
    setTimeout(() => {
        slideUpForm.style.display = 'none';
    }, 300);
}

