import {FilmsList} from '../../films-list/films-list.tsx';
import {useEffect, useState} from 'react';
import cn from 'classnames';
import {changeGenreAction} from '../../../redux/action.ts';
import {useSelector} from 'react-redux';
import {FilmPreview} from '../../../api/interfaces.ts';
import {StoreState} from '../../../redux/reducer.ts';
import {ALL_GENRES_NAME} from '../../../constants/genres-constants.ts';
import {getAllFilms} from '../../../redux/api-action.ts';
import {useMyDispatch} from '../../../redux/hooks.ts';


export function FilmsByGenrePanel(){
  const [activeGenre, setActiveGenre] = useState<string>('');
  const [genres, setGenres] = useState<string[]>([]);
  const [activeFilms, setActiveFilms] = useState<FilmPreview[]>([]);
  const [filmsCount, setFilmsCount] = useState(8);

  const dispatch = useMyDispatch();
  const storeState = useSelector<StoreState, StoreState>((x) => x);

  const updateGenreAndFilmsFromStore = () => {
    setActiveGenre(storeState.selectedGenre);
    setActiveFilms(storeState.filmsByGenre);
  };

  const onGenreTabClick = (genre: string) => {
    dispatch(changeGenreAction(genre));
    updateGenreAndFilmsFromStore();
  };

  useEffect(() => {
    async function setup(){
      await dispatch(getAllFilms());
      onGenreTabClick(ALL_GENRES_NAME);
    }

    void setup();
  }, []);

  useEffect(() => {
    setGenres(storeState.allGenres);
    updateGenreAndFilmsFromStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storeState]);

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
