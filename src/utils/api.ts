export async function getCharacters() {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  const character = data.results;
  return character;
}
