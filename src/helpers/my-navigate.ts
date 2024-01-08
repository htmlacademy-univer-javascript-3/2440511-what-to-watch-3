import {useNavigate} from 'react-router-dom';
import {AppRoutes} from '../constants/app-routse.ts';


type empty = () => void;
type byFilmId = (filmId: string) => void;

export interface MyNavigateFunction {
  to: (path: string) => void;
  toHome: empty;
  toLogin: (referer: string | undefined) => void;
  toMyList: empty;
  toFilm: byFilmId;
  toFilmReview: byFilmId;
  toPlayer: byFilmId;
  toNotFound: empty;
}

export const useMyNavigate = () => {
  const navigate = useNavigate();

  const toInternal = (path: string) => {
    navigate(path);
  };

  const toHomeInternal = () => {
    navigate(AppRoutes.Home);
  };

  const toLoginInternal = (referer: string | undefined = undefined) => {
    navigate(`${AppRoutes.Login}${referer ? `?referer=${referer}` : ''}`);
  };

  const toMyListInternal = () => {
    navigate(AppRoutes.MyList);
  };

  const toFilmInternal = (filmId: string) => {
    navigate(`${AppRoutes.Films}/${filmId}`);
  };

  const toFilmReviewInternal = (filmId: string) => {
    navigate(`${AppRoutes.Films}/${filmId}${AppRoutes.Review}`);
  };

  const toPlayerInternal = (filmId: string) => {
    navigate(`${AppRoutes.Player}/${filmId}`);
  };

  const toNotFoundInternal = () => {
    navigate(AppRoutes.NotFound);
  };

  const myNavigateFunction: MyNavigateFunction = {
    to: toInternal,
    toHome: toHomeInternal,
    toLogin: toLoginInternal,
    toMyList: toMyListInternal,
    toFilm: toFilmInternal,
    toFilmReview: toFilmReviewInternal,
    toPlayer: toPlayerInternal,
    toNotFound: toNotFoundInternal
  };

  return myNavigateFunction;
};
