import {FilmPreview, PromoFilm, AuthInfo} from '../api/interfaces.ts';

export interface StoreState {
  selectedGenre: string;
  allGenres: string[];
  filmsByGenre: FilmPreview[];
  allFilms: FilmPreview[];
  promoFilm?: PromoFilm;
  isLoading: boolean;
  authorizationStatus: AuthorizationStatus;
  authInfo?: AuthInfo;
}

export enum AuthorizationStatus {
  Authorized,
  Unauthorized,
}

