import {useEffect, useState} from 'react';
import {SimilarFilmInfo} from '../../../api/interfaces.ts';
import {useMyDispatch} from '../../../redux/hooks.ts';
import {getSimilarFilms} from '../../../redux/api-action.ts';
import {useNavigate} from "react-router-dom";


interface Props {
  filmId: string;
}

export function SimilarFilms({filmId}: Props){
  const [films, setFilms] = useState<SimilarFilmInfo[]>([]);
  const dispatch = useMyDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    async function setup() {
      const filmsData = (await dispatch(getSimilarFilms(filmId))).payload as SimilarFilmInfo[];
      setFilms(filmsData);
    }

    void setup();
  }, []);

  const goToFilm = (id: string) => {
    navigate(`/films/${id}`);
  };

  return (
    <section className="catalog catalog--like-this">
      <h2 className="catalog__title">More like this</h2>

      <div className="catalog__films-list">
        {
          films.map(film => (
            <article key={film.id} className="small-film-card catalog__films-card" onClick={() => goToFilm(film.id)}>
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
