import { createCharacterCard } from './components/character/character'; //?????
import './style.css';
import { createElement } from './utils/createElement';
import { Character } from './types';

const characters: Character[] = [
  {
    name: 'Rick Sanchez',
    status: '💚 Alive & Human',
    location: 'Last known location',
    where: 'Earth',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  },
  {
    name: 'Morty Smith',
    status: '💚 Alive & Human',
    location: 'Last known location',
    where: 'Earth',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
];

const mainElement = createElement('main', {
  childElements: [
    createElement('h1', {
      className: 'main-title',
      innerText: 'Rick and Morty',
    }),
    createElement('input', {
      className: 'main-input',
      placeholder: 'Search for a character',
    }),
    createElement('div', {
      className: 'characterContainer',
      childElements: characters.map((character) =>
        createCharacterCard(character)
      ),
    }),
  ],
});

const app = document.querySelector<HTMLDivElement>('#app');
if (app !== null) {
  app.append(mainElement);
}
// document.querySelector<HTMLDivElement>('#app')?append(mainElement):
