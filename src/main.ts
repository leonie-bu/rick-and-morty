import './style.css';

const app = document.querySelector<HTMLDivElement>('#app');

const mainElement = document.createElement('main');

const title = document.createElement('h1');
title.innerText = 'Rick and Morty';

mainElement.append(title);

const input = document.createElement('input');
input.placeholder = 'Enter Text';

if (app !== null) {
  app.append(mainElement);
}
