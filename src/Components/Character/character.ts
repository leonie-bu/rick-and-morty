import styles from './character.module.css';
import { createElement } from '../../utils/createElement';
import { Character } from '../../types';

export function createCharacterCard({
  name,
  status,
  location,
  thumbnail,
}: Character): HTMLElement {
  return createElement('div', {
    className: styles.card,
    childElements: [
      createElement('img', {
        className: styles.image,
        src: thumbnail,
        alt: 'Head of character',
      }),
      createElement('article', {
        className: styles.info,
        childElements: [
          createElement('h2', {
            className: styles.name,
            innerText: name,
          }),
          createElement('p', {
            className: styles.status,
            innerText: status,
            childElements: [
              createElement('h4', {
                innerText: 'Last known location',
              }),
              createElement('p', {
                innerText: location,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
