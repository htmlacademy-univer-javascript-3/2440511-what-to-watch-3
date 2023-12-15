import {AddReviewForm} from './form/add-review-form.tsx';
import {useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {FilmInfo} from '../../api/interfaces.ts';
import {getFilmInfo} from '../../redux/api-action.ts';
import {useMyDispatch} from '../../redux/hooks.ts';
import {UserSignBlock} from '../user-sign-block/user-sign-block.tsx';


export function AddReview(){
  const {id} = useParams<{id: string}>();
  const [filmInfo, setFilmInfo] = useState<FilmInfo>();
  const dispatch = useMyDispatch();
  const navigate = useNavigate();

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

  return (
    <section className="film-card film-card--full" style={{backgroundColor: filmInfo?.backgroundColor}}>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmInfo?.backgroundImage} alt={filmInfo?.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <a href="film-page.html" className="breadcrumbs__link">{filmInfo?.name}</a>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
          <UserSignBlock/>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={filmInfo?.posterImage} alt={filmInfo?.name} width="218" height="327"/>
        </div>
      </div>

      <AddReviewForm filmId={id ?? ''}/>

    </section>
  );
}
