var button = document.querySelector('.rename-button')

button.addEventListener('click', function () {
  changeTitleText();
});

function changeTitleText() {
  var nameInput = document.getElementById('input');
  var titleText = document.querySelector('.rename');
  titleText.innerHTML = nameInput.value;
};