export interface FilmPreview {
  id: string;
  name: string;
  previewImage: string;
  previewVideoLink: string;
  genre: string;
}

export interface FilmDetails {
  id: string;
  name: string;
  posterImage: string;
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
