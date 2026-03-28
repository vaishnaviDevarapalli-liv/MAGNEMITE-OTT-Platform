
window.addEventListener("scroll", function() {
  var navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
      navbar.style.background = "black"; // Solid background
  } else {
      navbar.style.background = "transparent"; // Transparent background
  }
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.carousel-container').forEach(carouselContainer => {
        const carousel = carouselContainer.querySelector('.movie-carousel');
        const leftArrow = carouselContainer.querySelector('.nav-left');
        const rightArrow = carouselContainer.querySelector('.nav-right');
        
        const scrollAmount = 500; // Pixels to scroll
        
        rightArrow.addEventListener('click', function() {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        leftArrow.addEventListener('click', function() {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });
    });
});
// Function to switch between Login and Signup forms
function toggleAuth() {
    const login = document.getElementById('loginSection');
    const signup = document.getElementById('signupSection');
    if (login.style.display === "none") {
        login.style.display = "block";
        signup.style.display = "none";
    } else {
        login.style.display = "none";
        signup.style.display = "block";
    }
}

// Function to handle the actual "Logging In" or "Signing Up"
function handleAuth(type) {
    let name, email;

    if (type === 'signup') {
        name = document.getElementById('signupName').value;
        email = document.getElementById('signupEmail').value;
    } else {
        // For login, we'll use a placeholder name or the email prefix
        email = document.getElementById('loginEmail').value;
        name = email.split('@')[0]; // Takes 'user' from 'user@mail.com'
    }

    if (!email) {
        alert("Please enter your details!");
        return;
    }

    // Save to browser memory (Simulation)
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("userName", name);
    sessionStorage.setItem("userEmail", email);

    // Close the modal
    const modalElement = document.getElementById('authModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    // Update the navigation bar immediately
    updateNavbar();
}

// Function to change the button to a Profile Icon
function updateNavbar() {
    const authArea = document.getElementById("auth-area");
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const userName = sessionStorage.getItem("userName");

    if (isLoggedIn === "true" && authArea) {
        authArea.innerHTML = `
            <a href="profile.html" class="nav-link p-0 d-flex align-items-center">
                <span class="me-2 d-none d-lg-inline small text-white">${userName}</span>
                <div class="profile-circle">
                    <i class="fa-solid fa-user text-white"></i>
                </div>
            </a>
        `;
    }
}

// Run check on page load
document.addEventListener("DOMContentLoaded", function() {
    updateNavbar();
    
    // Auto-prompt if not logged in
    if (!sessionStorage.getItem("isLoggedIn")) {
        setTimeout(() => {
            const modal = new bootstrap.Modal(document.getElementById('authModal'));
            modal.show();
        }, 1000);
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const authArea = document.getElementById("auth-area");
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    const userName = sessionStorage.getItem("userName");

    if (isLoggedIn === "true" && authArea) {
        authArea.innerHTML = `
            <a href="profile.html" class="nav-link d-flex align-items-center text-white">
                <span class="me-2 fw-bold d-none d-md-block">${userName}</span>
                <div style="width:35px; height:35px; background:red; border-radius:50%; display:flex; align-items:center; justify-content:center;">
                    <i class="fa-solid fa-user small"></i>
                </div>
            </a>
        `;
    }
});
window.addEventListener("scroll", function() {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("solid");
        navbar.classList.remove("transparent");
    } else {
        navbar.classList.remove("solid");
        navbar.classList.add("transparent");
    }
});

// Re-run your profile update function so the icon shows up on movies.html
document.addEventListener("DOMContentLoaded", function() {
    updateNavbar(); 
});
function addToWatchlist(title, imgSrc) {
    // Get existing list or start a new one
    let watchlist = JSON.parse(localStorage.getItem('myWatchlist')) || [];

    // Check if movie already exists
    const exists = watchlist.find(movie => movie.title === title);
    
    if (!exists) {
        watchlist.push({ title: title, image: imgSrc });
        localStorage.setItem('myWatchlist', JSON.stringify(watchlist));
        alert(title + " added to My List!");
    } else {
        alert("Already in your Watchlist");
    }
}

// Function to simulate playing (useful for tracking retention data)
function playMovie(title) {
    console.log("User started watching: " + title);
    // Redirect to your movie.html video player
    window.location.href = "movie.html";
}
function addToWatchlist(title, imgSrc) {
    // Retrieve existing list or start new array
    let list = JSON.parse(localStorage.getItem('myWatchlist')) || [];
    
    // Check for duplicates
    if (!list.find(movie => movie.title === title)) {
        list.push({ title: title, image: imgSrc });
        localStorage.setItem('myWatchlist', JSON.stringify(list));
        alert(`${title} has been added to your list!`);
    } else {
        alert("This movie is already in your list.");
    }
}