const formElements = document.querySelectorAll('.panel-right input, .submit-btn');

formElements.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
});
