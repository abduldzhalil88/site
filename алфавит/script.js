let a = document.querySelectorAll('li');

for (let index = 0; index < a.length; index++) {
    const b = a[index];
    b.addEventListener("click", function (e) {
        b.classList.add('_active');

    });
};