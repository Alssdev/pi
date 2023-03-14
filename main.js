const pi = `1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938`;

const buttons = document.getElementsByClassName('num');
const result = document.getElementById('result');

let i = 0;
let error = false;
for (const button of buttons) {
  button.addEventListener('click', () => {
    const num = button.querySelectorAll('span')[0].innerHTML;

    if (!error) {
      if (pi[i++] === num) {
        result.innerHTML += num;
      } else {
        result.style.color = 'red';
        button.style.color = 'white';
        button.style.backgroundColor = 'red';
        error = true;
      }
    }
  });
}


document.addEventListener('keydown', (e) => {
    const num = e.key;

    if (!error) {
      if (pi[i++] === num) {
        result.innerHTML += num;
      } else {
        result.style.color = 'red';
        button.style.color = 'white';
        button.style.backgroundColor = 'red';
        error = true;
      }
    }
})
