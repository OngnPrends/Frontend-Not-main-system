
const formElements = document.querySelectorAll('.submit-btn0, .submit-btn1, .submit-btn2, .submit-btn3, .submit-btn4');

formElements.forEach((item, i) => {
    setTimeout(() => {
        item.style.opacity = 1;
    }, i * 100);
});

var dropdown = document.querySelector('.dropdown');

dropdown.addEventListener('click', function() {
  dropdown.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});

