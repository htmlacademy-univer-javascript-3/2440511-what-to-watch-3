import {createAsyncThunk} from '@reduxjs/toolkit';
import {setAllFilmsAction, setAuthInfoAction, setPromoFilmAction} from './action.ts';
import {store} from './store.ts';
import {AuthInfo, FilmPreview, PromoFilm} from '../api/interfaces.ts';
import {AxiosInstance} from 'axios';
import {routes} from '../api/routes.ts';
import {StoreState} from './reducer.ts';


interface Config {
  dispatch: typeof store.dispatch;
  state: StoreState;
  extra: AxiosInstance;
}

export const getAllFilms = createAsyncThunk<void, undefined, Config>('get-all-films',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<FilmPreview[]>(routes.AllFilms);
    dispatch(setAllFilmsAction(data));
  }
);

export const getPromoFilm = createAsyncThunk<void, undefined, Config>('get-promo-film',
  async (_, {dispatch, extra: api}) => {
    const {data} = await api.get<PromoFilm>(routes.PromoFilm);
    dispatch(setPromoFilmAction(data));
  }
);

export const login = createAsyncThunk<boolean, { email: string; password: string }, Config>('get-promo-film',
  async (args, {dispatch, extra: api}) => {
    const data = (await api.post<AuthInfo>(routes.Login, args).catch(() => undefined))?.data;
    dispatch(setAuthInfoAction(data));
    return data !== undefined;
  }
);
