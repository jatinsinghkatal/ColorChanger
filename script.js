const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach(function (button) {
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    let c = e.target.id;
    switch (c) {
      case 'grey':
        body.style.backgroundColor = c;
        break;
      case 'white':
        body.style.backgroundColor = c;
        break;
      case 'blue':
        body.style.backgroundColor = c;
        break;
      case 'yellow':
        body.style.backgroundColor = c;
        break;
      case 'purple':
        body.style.backgroundColor = c;
        break;
      default:
        exit;
    }
  });
});
