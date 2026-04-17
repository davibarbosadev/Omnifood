const body = document.querySelector("body");
const navToggle = document.querySelector(".nav__toggle");
const nav = document.querySelector(".nav");
const yearElement = document.querySelector("#year");

navToggle.addEventListener("click", () => {
    nav.classList.toggle("nav--open");

    body.classList.toggle("no-scroll");

});

const allLinks = document.querySelectorAll("a:any-link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        // scroll para voltar para o topo
        if (href === "#") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            // scroll para outras seções
        } else if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
        }

        // fechar menu mobile
        if (link.classList.contains("nav__link")) {
            nav.classList.remove("nav--open");

            body.classList.remove("no-scroll");
        }
    });
});

//////////////////////////////////////////////////////////////////
// fixar(grudar) header na viewport
const sectionHeroEl = document.querySelector(".section--hero");

const observer = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);
        console.log("seção hero sumiu!!!");

        if (ent.isIntersecting === false) {
            document.querySelector(".header").classList.add("sticky");
        } else if (ent.isIntersecting === true) {
            document.querySelector(".header").classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold: 0,
        rootMargin: "-64px",
    },
);

observer.observe(sectionHeroEl);

const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
