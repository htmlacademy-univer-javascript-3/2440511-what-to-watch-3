import {useEffect, useState} from 'react';
import {FilmShortInfo} from '../../../api/interfaces.ts';
import {useMyDispatch} from '../../../redux/hooks.ts';
import {getSimilarFilms} from '../../../redux/api-action.ts';
import {useMyNavigate} from '../../../helpers/my-navigate.ts';


interface Props {
  filmId: string;
}

export function SimilarFilms({filmId}: Props){
  const [films, setFilms] = useState<FilmShortInfo[]>([]);
  const dispatch = useMyDispatch();
  const navigate = useMyNavigate();

  useEffect(() => {
    async function setup() {
      const filmsData = (await dispatch(getSimilarFilms(filmId))).payload as FilmShortInfo[];
      setFilms(filmsData);
    }

    void setup();
  }, [filmId]);

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {
          films.map(film => (
            <article key={film.id} className="small-film-card catalog__films-card" onClick={() => navigate.toFilm(film.id)}>
              <div className="small-film-card__image">
                <img src={film.previewImage} alt={film.name} width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link">
                  {film.name}
                </a>
              </h3>
            </article>
          ))
        }
      </div>
    </section>
  );
}
