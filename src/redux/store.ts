import {configureStore} from '@reduxjs/toolkit';
import {updateStore} from './reducer.ts';
import {createApi} from '../api/api.ts';


export const store = configureStore({
  reducer: updateStore,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: createApi()
    }
  })
});
