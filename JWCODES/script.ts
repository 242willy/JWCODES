/* =========================================
   JWCODES JAVASCRIPT
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* Close mobile menu after clicking a link */

document.querySelectorAll("#navMenu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const backTop = document.getElementById("backTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backTop.classList.add("show");
    } else {
        backTop.classList.remove("show");
    }

});

backTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".service-card, .advantage, .project-card, .section-heading"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* =========================================
   NUMBER COUNTER
========================================= */

const stats = document.querySelectorAll(".stats strong");

const counterObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const element = entry.target;
            const original = element.textContent;

            let number = parseInt(original);

            if (isNaN(number)) return;

            let current = 0;

            const increment = Math.ceil(number / 40);

            const counter = setInterval(() => {

                current += increment;

                if (current >= number) {

                    current = number;

                    clearInterval(counter);

                }

                element.textContent =
                    current + original.replace(/[0-9]/g, "");

            }, 30);

            counterObserver.unobserve(element);

        });

    },
    {
        threshold: 0.7
    }
);


stats.forEach(stat => {
    counterObserver.observe(stat);
});


/* =========================================
   HERO PARALLAX
========================================= */

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", (event) => {

    if (window.innerWidth < 900) return;

    const x = (window.innerWidth / 2 - event.clientX) / 60;
    const y = (window.innerHeight / 2 - event.clientY) / 60;

    heroVisual.style.transform =
        `translateY(-45%) translate(${x}px, ${y}px)`;

});


/* =========================================
   CURRENT YEAR
========================================= */

const copyright = document.querySelector(".copyright");

if (copyright) {

    const year = new Date().getFullYear();

    copyright.innerHTML =
        `© ${year} JWCODES&lt;/&gt; — All rights reserved.`;

}