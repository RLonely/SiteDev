document.addEventListener("DOMContentLoaded", function () {
    const openBurger = document.querySelector(".burger");
    const menu = document.querySelector(".header-menu");
    const closeBurger = document.querySelector(".header-menu__close");

    openBurger.addEventListener('click', function () {
        menu.style.display = "flex";
    })

    closeBurger.addEventListener('click', function () {
        menu.style.display = "none";
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const success__button = document.querySelector(".success__button");
    const success = document.querySelector(".success");
    const success__close = document.querySelector(".success__close");

    success__button.addEventListener('click', function () {
        success.style.display = "none";
    })
    success__close.addEventListener('click', function () {
        success.style.display = "none";
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll("button.open__form");
    const form = document.querySelector(".modal");
    const closeForm = document.querySelector(".form__close");
    const button = document.getElementById("submit")
    const inputs = document.querySelectorAll('.input-required');

    openButtons.forEach((openButton) => {
        openButton.addEventListener('click', function () {
            form.style.display = "flex";
            inputs.forEach(input => input.value = '');
            button.classList.remove('active');
        })
    });

    closeForm.addEventListener('click', function () {
        form.style.display = "none";
        inputs.forEach(input => input.value = '');
        button.classList.remove('active');
    })
});

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;

    const nameErr = document.getElementById("name-error");
    const emailErr = document.getElementById("email-error");
    const numberErr = document.getElementById("number-error");
    const textErr = document.getElementById("text-error");
    const success = document.querySelector(".success");
    const form = document.querySelector(".modal");


    nameErr.textContent = "";
    emailErr.textContent = "";
    numberErr.textContent = "";

    let isValid = true;

    if (name === "" || /\d/.test(name)) {
        nameErr.textContent = "This field is required.";
        isValid = false;
    }

    if (email === "" || !email.includes("@") || !email.includes(".")) {
        emailErr.textContent = "This field is required.";
        isValid = false;
    }

    if (number === "") {
        numberErr.textContent = "This field is required.";
        isValid = false;
    }

    if (name === "" || email === "" || number === "") {
        textErr.textContent = "Please fill in all required fields";
        isValid = false;
    }

    if (isValid) {
        form.style.display = "none";
        success.style.display = "flex"
        return true;
    }
    else {
        return false;
    }
}

function resetForm() {
    document.getElementById('Form').reset();
}

function resetErrors() {
    document.getElementById("name-error").textContent = "";
    document.getElementById("email-error").textContent = "";
    document.getElementById("number-error").textContent = "";
}

const form = document.getElementById("Form");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


document.addEventListener("DOMContentLoaded", function () {
    const phoneInput = document.getElementById("number")
    const button = document.getElementById("submit")
    const mask = new IMask(phoneInput, {
        mask: "+{7}(000)000-00-00",
    })
});

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('.input-required');
    const button = document.querySelector(".modal__button");

    inputs.forEach((input) => {
        input.addEventListener('input', function(e) {
            const inp = e.target.value;
            if (inp) {
                button.classList.add('active');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const closeButtons = document.querySelectorAll(".cookie__buttons button");
    const cookie = document.querySelector(".cookie");
    const cookie__close = document.querySelector(".cookie__close");

    closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click', function () {
            cookie.style.display = 'none';
        })
    });

    cookie__close.addEventListener('click', function () {
        cookie.style.display = 'none';
    })
});


document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector('.header')

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
});
