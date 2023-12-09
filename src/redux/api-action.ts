import {createAsyncThunk} from '@reduxjs/toolkit';
import {setAllFilmsAction, setPromoFilm} from './action.ts';
import {store} from './store.ts';
import {FilmPreview, PromoFilm} from '../api/interfaces.ts';
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
    dispatch(setPromoFilm(data));
  }
);
