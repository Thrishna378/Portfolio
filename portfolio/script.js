// Function to add 'reveal' class when elements are in viewport
function revealOnScroll() { 
    let elements = document.querySelectorAll(".fade-in, .slide-up, .slide-left, .slide-right");
    let windowHeight = window.innerHeight;
    
    elements.forEach((el) => {
        let elementTop = el.getBoundingClientRect().top;
        let elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("reveal");
        }
    });
}

// Scroll event listener
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Run on load

// Form Submission Alert
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Your message has been submitted!");
});