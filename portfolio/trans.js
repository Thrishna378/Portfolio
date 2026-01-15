document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = "running";
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default jump behavior
            
            let targetId = this.getAttribute("href"); // Get the section ID
            let targetSection = document.querySelector(targetId); // Find the section
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 60, // Adjust for header height
                    behavior: "smooth" // Enable smooth scrolling
                });
            }
        });
    });
});


