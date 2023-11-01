import ReactDOM from 'react-dom/client';
import {App} from './app.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <App
    promoFilmName={'The Grand Budapest Hotel'}
    promoFilmGenre={'Drama'}
    promoFilmReleaseDate={'2014'}
  />
);
