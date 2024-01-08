import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenreAction,
  setAllFilmsAction,
  setAuthInfoAction,
  setIsLoadingAction, setMyFilmsAction,
  setPromoFilmAction
} from './action.ts';
import {AuthInfo, FilmPreview, FilmShortInfo, PromoFilm} from '../api/interfaces.ts';
import {ALL_GENRES_NAME} from '../constants/genres-constants.ts';

export interface StoreState {
  selectedGenre: string;
  allGenres: string[];
  filmsByGenre: FilmPreview[];
  allFilms: FilmPreview[];
  promoFilm?: PromoFilm;
  isLoading: boolean;
  authInfo?: AuthInfo;
  myList: FilmShortInfo[];
}

const initialState: StoreState = {
  selectedGenre: '',
  allGenres: [],
  filmsByGenre: [],
  allFilms: [],
  isLoading: false,
  myList: []
};

export const updateStore = createReducer<StoreState>(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.selectedGenre = action.payload;
      state.filmsByGenre = state.allFilms.filter((x) => x.genre === action.payload || action.payload === ALL_GENRES_NAME);
    })
    .addCase(setAllFilmsAction, (state, action) => {
      state.allFilms = action.payload;
      state.allGenres = [ALL_GENRES_NAME].concat(Array.from(new Set(action.payload.map((x) => x.genre))));
    })
    .addCase(setIsLoadingAction, (state, action) => {
      state.isLoading = action.payload;
    })
    .addCase(setAuthInfoAction, (state, action) => {
      state.authInfo = action.payload;
    })
    .addCase(setMyFilmsAction, (state, action) => {
      state.myList = action.payload;
    })
    .addCase(setPromoFilmAction, (state, action) => {
      state.promoFilm = action.payload;
    });
});
