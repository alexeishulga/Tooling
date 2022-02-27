import _ from 'lodash';
import './style.css';
import JS from './javascript.svg';

function addElement() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello,', 'World'], ' ');

  element.classList.add('image');
  const Icon = new Image();
  Icon.src = JS;
  element.appendChild(Icon);
  return element;
}

document.body.appendChild(addElement());