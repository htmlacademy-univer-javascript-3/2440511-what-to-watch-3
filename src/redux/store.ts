import {configureStore} from '@reduxjs/toolkit';
import {updateStore} from './reducer.ts';


export const store = configureStore({reducer: updateStore});
