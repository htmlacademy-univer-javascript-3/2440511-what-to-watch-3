import {createReducer} from '@reduxjs/toolkit';
import {changeGenreAction, setAllFilmsAction, setPromoFilm} from './action.ts';
import {FilmPreview, PromoFilm} from '../api/interfaces.ts';

export interface StoreState {
  selectedGenre: string;
  allGenres: string[];
  filmsByGenre: FilmPreview[];
  allFilms: FilmPreview[];
  promoFilm?: PromoFilm;
}

const initialState: StoreState = {
  selectedGenre: '',
  allGenres: [],
  filmsByGenre: [],
  allFilms: [],
};

export const updateStore = createReducer<StoreState>(initialState, (builder) => {
  builder
    .addCase(changeGenreAction, (state, action) => {
      state.selectedGenre = action.payload;
      state.filmsByGenre = state.allFilms.filter((x) => x.genre === action.payload || action.payload === 'All genres');
    })
    .addCase(setAllFilmsAction, (state, action) => {
      state.allFilms = action.payload;
      state.allGenres = ['All genres'].concat(Array.from(new Set(action.payload.map((x) => x.genre))));
    })
    .addCase(setPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});
