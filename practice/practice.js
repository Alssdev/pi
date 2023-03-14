const pi = `1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938`;


console.log(pi.length);
const boxes = document.getElementById('boxes');
for (let i = 0; i < pi.length; i += 4) {
  boxes.innerHTML += `<div class="column num box is-2">${pi.substring(i,i+4)}</div>`;
}