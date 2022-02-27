import _ from 'lodash';
import './style.css';
import JS from './javascript.svg';
import alertCheck from './check.js';

function addElement() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello,', 'World'], ' ');

  element.classList.add('image');
  const Icon = new Image();
  Icon.src = JS;
  element.appendChild(Icon);
  btn.innerHTML = 'Click!';
  btn.onclick = alertCheck;

  element.appendChild(btn);


  return element;
}
document.body.appendChild(component());
let element = component(); 
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./check.js', function() {
    console.log(' updated  module!');
    document.body.removeChild(element);
    element = component()
    document.body.appendChild(element);
  })
} 