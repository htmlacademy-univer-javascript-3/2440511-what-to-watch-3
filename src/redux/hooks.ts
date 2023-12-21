import {useDispatch} from 'react-redux';
import {store} from './store.ts';


export const useMyDispatch = () => useDispatch<typeof store.dispatch>();
