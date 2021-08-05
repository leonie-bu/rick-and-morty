export type Character = {
  name: string;
  status: string;
  location: string;
  where: string;
  thumbnail: string;
};

export type CharacterFromAPI = {
  id: number;
  name: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type AllCharactersFromAPI = {
  name: string;
  status: string;
  location: string;
  where: string;
  image: string;
};
