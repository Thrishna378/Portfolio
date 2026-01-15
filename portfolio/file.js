// Animate Technical Skills
document.addEventListener("DOMContentLoaded", function () {
    let progressBars = document.querySelectorAll(".progress");

    progressBars.forEach((bar) => {
        let width = bar.style.width;
        bar.style.width = "0"; // Reset width
        setTimeout(() => {
            bar.style.width = width; // Animate to original width
        }, 500);
    });
});

// Animate Circular Professional Skills
document.addEventListener("DOMContentLoaded", function () {
    let circles = document.querySelectorAll(".circle");

    circles.forEach((circle) => {
        let percent = circle.getAttribute("data-percent");
        let angle = (percent / 100) * 360;
        circle.style.background = `conic-gradient(#64FFDA ${angle}deg, #1f3a56 ${angle}deg)`;
    });
});

