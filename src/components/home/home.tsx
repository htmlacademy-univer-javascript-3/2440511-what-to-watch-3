import {useNavigate} from 'react-router-dom';
import {FilmsByGenrePanel} from './films-by-genre-panel/films-by-genre-panel.tsx';
import {useSelector} from 'react-redux';
import {StoreState} from '../../redux/reducer.ts';
import {PromoFilm} from '../../api/interfaces.ts';
import {UserSignBlock} from '../user-sign-block/user-sign-block.tsx';
import {AddToMyListButton} from '../my-list/add-to-my-list-button/add-to-my-list-button.tsx';


export function Home(){
  const navigate = useNavigate();
  const promoFilm = useSelector<StoreState, PromoFilm | undefined>((x) => x.promoFilm);


  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm?.backgroundImage} alt={promoFilm?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserSignBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm?.posterImage} alt={promoFilm?.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm?.genre}</span>
                <span className="film-card__year">{promoFilm?.released}</span>
              </p>

              <div className="film-card__buttons">
                {promoFilm &&
                  <button className="btn btn--play film-card__button" type="button" onClick={() => navigate(`/player/${promoFilm.id}`)}>
                    <svg viewBox="0 0 19 19" width="19" height="19">
                      <use xlinkHref="#play-s"></use>
                    </svg>
                    <span>Play</span>
                  </button>}
                {promoFilm && <AddToMyListButton filmId={promoFilm.id}/>}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">

        <FilmsByGenrePanel />

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
