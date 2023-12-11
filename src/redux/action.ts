import {createAction} from '@reduxjs/toolkit';
import {AuthInfo, FilmPreview, PromoFilm} from '../api/interfaces.ts';


export const changeGenreAction = createAction<string>('CHANGE_GENRE');

export const setAllFilmsAction = createAction<FilmPreview[]>('SET_ALL_FILMS');

export const setPromoFilmAction = createAction<PromoFilm>('SET_PROMO_FILM');

export const setIsLoadingAction = createAction<boolean>('SET_IS_LOADING');

export const setAuthInfoAction = createAction<AuthInfo | undefined>('SET_AUTH_INFO');


