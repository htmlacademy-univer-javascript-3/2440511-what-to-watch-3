import {FilmShortInfo} from '../../api/interfaces.ts';
import {useSelector} from 'react-redux';
import {StoreState} from '../../redux/reducer.ts';
import {useNavigate} from 'react-router-dom';
import {UserSignBlock} from '../user-sign-block/user-sign-block.tsx';


export function MyList(){
  const filmsData = useSelector<StoreState, FilmShortInfo[]>((x) => x.myList);
  const navigate = useNavigate();

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{filmsData.length}</span></h1>
        <UserSignBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          {
            filmsData.map((film) =>
              (
                <article key={film.name} className="small-film-card catalog__films-card"
                  onClick={() => navigate(`/films/${film.id}`)}
                >
                  <div className="small-film-card__image">
                    <img src={film.previewImage}
                      alt={film.name} width="280" height="175"
                    />
                  </div>
                  <h3 className="small-film-card__title">
                    <a className="small-film-card__link">
                      {film.name}
                    </a>
                  </h3>
                </article>
              )
            )
          }
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
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
  );
}
