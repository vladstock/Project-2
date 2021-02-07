const header = document.querySelector("nav");
const sectionOne = document.querySelector("#first");

const sectionOneOptions = {
    rootMargin: "-20px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver 
    (function(
        entries,
        sectionOneObserver
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.add("nav-scrolled");
            } else {
                header.classList.remove("nav-scrolled");
            }
        });
    },
    sectionOneOptions);
    sectionOneObserver.observe(sectionOne);
