export interface FilmPreview {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export interface PromoFilm {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  videoLink: string;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export interface AuthInfo {
  name: string;
  avatarUrl: string;
  email: string;
  token: string;
}

export interface FilmInfo {
  id: string;
  name: string;
  posterImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export interface FilmComment {
  id: string;
  date: string;
  user: string;
  comment: string;
  rating: number;
}
