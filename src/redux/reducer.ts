import {createReducer} from '@reduxjs/toolkit';
import {changeGenreAction} from './action.ts';
import {filmsData} from '../mocks/films.ts';


const getAllFilms = () => filmsData.map((x) => ({
  filmTitle: x.filmTitle,
  imgName: x.imgName,
}));

export const initialState = {
  genre: 'All genres',
  films: getAllFilms()
};

export const updateStore = createReducer(initialState, (builder) => {
  builder.addCase(changeGenreAction, (state, action) => {
    state.genre = action.payload;
    state.films = action.payload !== 'All genres' ? filmsData.filter((x) => x.genre === action.payload)
      .map((x) => ({
        filmTitle: x.filmTitle,
        imgName: x.imgName,
      })) : getAllFilms();
  });
});
