import './style.css';
import { createElement } from './utils/createElement';

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      innerText: 'Rick and Morty',
      className: 'app__title',
    }),
    createElement('input', {
      placeholder: 'Enter Text',
      className: 'app__input',
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');

if (app !== null) {
  app.append(mainElement);
}

// const mainElement = document.createElement('main');
// const title = document.createElement('h1');
// title.innerText = 'Rick and Morty';
// title.className = 'app__title';
// const input = document.createElement('input');
// input.placeholder = 'Enter Text';
// input.className = 'app__input';
// mainElement.append(title, input); // appenden, damit es auf Seite sichtbar wird
