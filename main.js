const fact = document.querySelector('.content');
const factText = document.getElementById('facts');

fact.style.display = 'none';

const inputNum = document.getElementById('numbers');
inputNum.addEventListener('input', getFactFetch);

function getFactFetch() {
  let number = inputNum.value;

  fetch(`http://numbersapi.com/${number}/math`)
  .then(response => response.text())
  .then(data => {
    if(number != '') {
      fact.style.display = 'block';
      factText.textContent = data;
    }
  })
  .catch(err => alert(err));
}