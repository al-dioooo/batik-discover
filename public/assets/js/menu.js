const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-responsive");
const opener = document.querySelector(".menu-open");
const closer = document.querySelector(".menu-close");



function openMenu() {
    // navbar.classList.remove("difference");
    menu.classList.add("showing");
    opener.style.display = "none";
    closer.style.display = "flex";
    body.style.overflow = "hidden";
    app.style.opacity = ".5";
    app.animate(
        [
            {
            transform: 'translate3d(0, 2%, 0)'
            }
        ],
        {
            duration: 1000,
            easing: 'ease',
        }
    );
}

function closeMenu() {
    // navbar.classList.add("difference");
    menu.classList.remove("showing");
    opener.style.display = "flex";
    closer.style.display = "none";
    body.style.overflow = "auto";
    app.style.opacity = "1";
    app.animate(
        [
            {
                transform: 'translate3d(0, 2%, 0)'
            },
            {
                transform: 'translate3d(0, 0, 0)'
            }
        ],
        {
            duration: 1000,
            easing: 'ease',
        }
    );
}