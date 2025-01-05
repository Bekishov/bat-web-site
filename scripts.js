// Функция для кнопки "Наверх"
window.addEventListener("scroll", function() {
    const toTopButton = document.getElementById("toTop");

    if (window.scrollY > 200) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
});

document.getElementById("toTop").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});




