function changeMode(size, weight, transform, background, color) {

    http://document.body.style.fontSize = size + 'px';

    http://document.body.style.fontWeight = weight;

    http://document.body.style.textTransform = transform;

    http://document.body.style.backgroundColor = background;

    http://document.body.style.color = color;

  }

  function main() {

    const spookyBtn = document.getElementById('spookyBtn');

    const darkModeBtn = document.getElementById('darkModeBtn');

    const screamModeBtn = document.getElementById('screamModeBtn');

    spookyBtn.addEventListener('click', function () {

      changeMode(9, 'bold', 'uppercase', 'pink', 'green');

    });

    darkModeBtn.addEventListener('click', function () {

      changeMode(12, 'bold', 'capitalize', 'black', 'white');

    });

    screamModeBtn.addEventListener('click', function () {

      changeMode(12, 'normal', 'lowercase', 'white', 'black');

    });

  }

  main();