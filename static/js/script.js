 // Active navbar

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})



const food1s = document.getElementById('food1');
const food2s = document.getElementById('food2');
const foods = document.getElementById('food');

if (food1s) {
    food1s.addEventListener('click', () => {
        foods.style.backgroundImage = "url('/static/images/food1.jpg')";

    })
}
if (food2s) {
    food2s.addEventListener('click', () => {
        foods.style.backgroundImage = "url('/static/images/food2.jpg')";
    })
}

const form1 = document.getElementById('form');
if (form1) {
    // Attach event listener to form submit
    form1.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get the input values
        const name = document.getElementById('name').value;
        const secondName = document.getElementById('secondName').value;
        const email = document.getElementById('email').value;
        const number = document.getElementById('number').value;
        const message = document.getElementById('message').value;

        const subject = 'Form Submission';
        const body = `
      Name: ${name}
      Second Name: ${secondName}
      Email: ${email}
      Number: ${number}
      Message: ${message}
    `;

        // Create the mailto link
        const mailtoLink = `mailto:sschmiro@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open the user's email client
        window.location.href = mailtoLink;
    });
}



const form = document.getElementById('form');
const username = document.getElementById('name');
const sName = document.getElementById('secondName');
const email = document.getElementById('email');
const number = document.getElementById('number');
const text1 = document.getElementById('message');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        validateInputs();
    });
}
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const sNameValue = sName.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const text1Value = text1.value.trim();

    if (usernameValue === '') {
        setError(username, 'Name is required and cannot be left blank');
    } else {
        setSuccess(username);
    }

    if (sNameValue === '') {
        setError(sName, 'Sacond Name is required and cannot be left blank');
    } else {
        setSuccess(sName);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (numberValue === '') {
        setError(number, 'Number is required');
    } else {
        setSuccess(number);
    }

    if (text1Value === '') {
        setError(text1, 'Please confirm your text');
    } else {
        setSuccess(text1);
    }

};
