import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerText = 'Rick and Morty';
title.className = 'app__title';

const input = document.createElement('input');
input.placeholder = 'Enter Text';

mainElement.append(title, input); // appenden, damit es auf Seite sichtbar wird

if (app !== null) {
  app.append(mainElement);
}
