const button = document.querySelector('button');
const html = document.querySelector('html');

button.addEventListener('click', function () {
  if (html.dataset.theme === 'light') {
    html.dataset.theme = 'dark';

    // this mengacu pada button yg di klik
    this.textContent = 'Light Mode';
  }
  else if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    this.textContent = 'Dark Mode';
  }

})

// box control
const padding = document.querySelector('#padding');
const box = document.querySelector('.box');

padding.addEventListener('mousemove', function () { 
  // cara mengubah variabel menggunakan js
  document.documentElement.style.setProperty('--box-padding', this.value + 'px');

  // memberi css pada element tertentu pada html
  // box.style.padding = this.value + 'px';
})

const color = document.querySelector('#color');

color.addEventListener('change', function () { 
  document.documentElement.style.setProperty('--box-color', this.value);
})