// ================= TYPING ANIMATION =================

const typingText = document.getElementById("typing");

const texts = [
    "Java Full Stack Developer",
    "Frontend Developer",
    "Java Developer",
    "Problem Solver"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent = currentText.substring(0, charIndex++);
    }
    else {

        typingText.textContent = currentText.substring(0, charIndex--);
    }

    let speed = deleting ? 60 : 120;

    if (!deleting && charIndex === currentText.length + 1) {

        speed = 1500;
        deleting = true;
    }

    if (deleting && charIndex === 0) {

        deleting = false;
        textIndex++;

        if (textIndex >= texts.length) {
            textIndex = 0;
        }
    }

    setTimeout(typeEffect, speed);
}

typeEffect();


// ================= MOBILE MENU =================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

});


// ================= CLOSE MENU AFTER CLICK =================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

    });

});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ================= ACTIVE NAVBAR =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================= HEADER BACKGROUND =================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,23,42,0.97)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";

    }
    else {

        header.style.background = "rgba(15,23,42,0.85)";
        header.style.boxShadow = "none";

    }

});


// ================= BACK TO TOP =================

const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "auto";

    }
    else {

        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";

    }

});


// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(
".education-card,.skill-card,.project-card,.about-card,.resume-container,.contact-container"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});