const btnHamburger = document.querySelector(".hamburger");
const hiddenNav = document.querySelector(".hidden-nav");
const toggle = document.querySelectorAll(".toggle");

toggle.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const clicked = e.target.closest(".toggle");
        const hiddenText = clicked.nextElementSibling;
        
        if (hiddenText.classList.contains("active")) {
            (hiddenText.classList.remove("active"));
        }
        else {
            toggle.forEach( togg => {
                const a = togg.closest(".toggle");
                const b = a.nextElementSibling;
                b.classList.remove("active");
            })
            hiddenText.classList.add("active");
        }
        
    })
})

btnHamburger.addEventListener('click', () => {
    btnHamburger.classList.toggle("active")
    hiddenNav.classList.toggle("active")
})