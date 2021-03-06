import { createCharacterCard } from './components/character/character'; //?????
import './style.css';
import { createElement } from './utils/createElement';
import { Character } from './types';
import { getCharacters } from './utils/api';

const characters: Character[] = await getCharacters();

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

console.log(await getCharacters());

const app = document.querySelector<HTMLDivElement>('#app');
if (app !== null) {
  app.append(mainElement);
}
// document.querySelector<HTMLDivElement>('#app')?append(mainElement):
