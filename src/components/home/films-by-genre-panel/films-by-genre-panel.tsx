import {FilmsList} from '../../films-list/films-list.tsx';
import {useEffect, useState} from 'react';
import {store} from '../../../redux/store.ts';
import cn from 'classnames';
import {changeGenreAction} from '../../../redux/action.ts';


interface Props {
  genres: string[];
}

export function FilmsByGenrePanel({genres}: Props){
  const [activeGenre, setActiveGenre] = useState<string>('');
  const [activeFilms, setActiveFilms] = useState<{filmTitle: string; imgName: string}[]>([]);
  const [filmsCount, setFilmsCount] = useState(8);

  const updateGenreAndFilmsFromStore = () => {
    const state = store.getState();
    setActiveGenre(state.genre);
    setActiveFilms(state.films);
  };

  useEffect(updateGenreAndFilmsFromStore, []);

  const onGenreTabClick = (genre: string) => {
    store.dispatch(changeGenreAction(genre));
    updateGenreAndFilmsFromStore();
  };

  const onShowMoreButtonClick = () => {
    setFilmsCount(filmsCount + 8);
  };

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>

      <ul className="catalog__genres-list">
        {genres.map((x) =>
          (
            <li key={x} className={cn('catalog__genres-item', {'catalog__genres-item--active': activeGenre === x})}
              onClick={() => onGenreTabClick(x)}
            >
              <a className="catalog__genres-link">{x}</a>
            </li>)
        )}
      </ul>

      <FilmsList filmsData={activeFilms} filmsCount={filmsCount}/>

      {activeFilms.length > filmsCount &&
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={onShowMoreButtonClick}>Show more</button>
        </div>}
    </section>
  );
}
