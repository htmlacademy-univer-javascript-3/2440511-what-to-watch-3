import {createAsyncThunk} from '@reduxjs/toolkit';
import {setAllFilmsAction, setAuthInfoAction, setPromoFilmAction} from './action.ts';
import {store} from './store.ts';
import {AuthInfo, FilmComment, FilmInfo, FilmPreview, PromoFilm, SimilarFilmInfo} from '../api/interfaces.ts';
import {AxiosInstance} from 'axios';
import {ApiRoutes} from '../api/apiRoutes.ts';
import {StoreState} from './reducer.ts';


interface Config {
  dispatch: typeof store.dispatch;
  state: StoreState;
  extra: AxiosInstance;
}

export const getAllFilms = createAsyncThunk<void, undefined, Config>('get-all-films',
  async (_, {dispatch, getState, extra: api}) => {
    if (getState().allFilms.length > 0) {
      return;
    }
    const {data} = await api.get<FilmPreview[]>(ApiRoutes.AllFilms);
    dispatch(setAllFilmsAction(data));
  }
);

export const getPromoFilm = createAsyncThunk<void, undefined, Config>('get-promo-film',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoFilm>(ApiRoutes.PromoFilm);
    dispatch(setPromoFilmAction(data));
  }
);

export const login = createAsyncThunk<boolean, { email: string; password: string }, Config>('login',
  async (args, {dispatch, extra: api}) => {
    const data = (await api.post<AuthInfo>(ApiRoutes.Login, args).catch(() => undefined))?.data;
    dispatch(setAuthInfoAction(data));
    return data !== undefined;
  }
);

export const getFilmInfo = createAsyncThunk<FilmInfo | undefined, string, Config>('get-film-info',
  async (arg, { extra: api})=>
    (await api.get<FilmInfo | undefined>(`${ApiRoutes.FilmInfo}/${arg}`).catch(() => undefined))?.data
);

export const getFilmComments = createAsyncThunk<FilmComment[], string, Config>('get-film-comments',
  async (arg, { extra: api})=> {
    const { data } = await api.get<FilmComment[]>(`${ApiRoutes.Comments}/${arg}`);
    return data;
  }
);

export const postComment = createAsyncThunk<boolean, {filmId: string; comment: string; rating: number}, Config>('post-film-comment',
  async ({filmId, comment, rating}, { extra: api, getState})=> {
    const userToken = getState().authInfo?.token;
    if (!userToken) {
      return false;
    }
    const response = await api.post(`${ApiRoutes.Comments}/${filmId}`, {comment: comment, rating: rating},
      {headers: {'X-Token': userToken}}).catch(() => undefined);

    return response !== undefined;
  }
);

export const getSimilarFilms = createAsyncThunk<SimilarFilmInfo[], string, Config>('get-similar-films',
  async (filmId, {extra: api}) => {
    const {data} = await api.get<SimilarFilmInfo[]>(`${ApiRoutes.FilmInfo}/${filmId}/similar`);
    return data;
  }
);
