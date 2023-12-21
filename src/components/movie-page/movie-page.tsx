import {MoviePageTabs} from './tabs/movie-page-tabs.tsx';
import {useEffect, useState} from 'react';
import {MoviePageTabType} from './tabs/movie-page-tab-type.tsx';
import {MoviePageOverviewTab} from './tabs/overview/movie-page-overview-tab.tsx';
import {MoviePageDetailsTab} from './tabs/details/movie-page-details-tab.tsx';
import {MoviePageReviewsTab} from './tabs/reviews/movie-page-reviews-tab.tsx';
import {useNavigate, useParams} from 'react-router-dom';
import {FilmInfo} from '../../api/interfaces.ts';
import {useMyDispatch} from '../../redux/hooks.ts';
import {getFilmInfo} from '../../redux/api-action.ts';
import {UserSignBlock} from '../user-sign-block/user-sign-block.tsx';


export function MoviePage(){
  const [activeTab, setActiveTab] = useState(MoviePageTabType.Overview);
  const [filmInfo, setFilmInfo] = useState<FilmInfo>();
  const {id} = useParams<{id: string}>();
  const navigate = useNavigate();
  const dispatch = useMyDispatch();

  useEffect(() => {
    dispatch(getFilmInfo(id ?? '')).then(x => {
      const data = x.payload as (FilmInfo | undefined);
      if (data) {
        setFilmInfo(data);
      } else {
        navigate('/not-found');
      }
    });
  }, []);

  const onAddReviewButtonClick = () => {
    if (!filmInfo) {
      return;
    }
    navigate(`/films/${filmInfo.id}/review`);
  };

  return (
    <>
      <section className="film-card film-card--full" style={{backgroundColor: filmInfo?.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmInfo?.backgroundImage} alt={filmInfo?.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="main.html" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <UserSignBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmInfo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmInfo?.genre}</span>
                <span className="film-card__year">{filmInfo?.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <a className="btn film-card__button" onClick={onAddReviewButtonClick}>Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={filmInfo?.posterImage} alt={filmInfo?.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <MoviePageTabs defaultTab={activeTab} onTabClick={setActiveTab}/>
              {activeTab === MoviePageTabType.Overview && filmInfo && <MoviePageOverviewTab {...filmInfo}/>}
              {activeTab === MoviePageTabType.Details && filmInfo && <MoviePageDetailsTab {...filmInfo}/>}
              {activeTab === MoviePageTabType.Reviews && filmInfo && <MoviePageReviewsTab filmId={filmInfo.id}/>}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Fantastic Beasts: The Crimes of
                  Grindelwald
                </a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Bohemian Rhapsody</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Macbeth</a>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175"/>
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">Aviator</a>
              </h3>
            </article>
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
    </>
  );
}
