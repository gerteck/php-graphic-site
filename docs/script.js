document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide-in");

    function checkPosition() {
        elements.forEach((el) => {
            let position = el.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (position < windowHeight - 50) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkPosition);
    checkPosition();
});
