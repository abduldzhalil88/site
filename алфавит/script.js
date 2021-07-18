let a = document.querySelectorAll('li');

for (let index = 0; index < a.length; index++) {
    const b = a[index];
    b.addEventListener("click", function (e) {
        b.classList.add('_active');

    });
};

let arabicLanguage = document.querySelector('.language-content__arabic');
let englishLanguage = document.querySelector('.language-content__english');

let alphabetArabic = document.querySelector('.content__alphabet-arabic');
let alphabetEnglish = document.querySelector('.content__alphabet-english');

arabicLanguage.addEventListener("click", function (e) {
    alphabetEnglish.style.display = "none";
    alphabetArabic.style.display = "block";


});
englishLanguage.addEventListener("click", function (e) {
    alphabetArabic.style.display = "none";
    alphabetEnglish.style.display = "block";

});