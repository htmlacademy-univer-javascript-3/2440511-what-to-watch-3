import {useSelector} from 'react-redux';
import {StoreState} from '../../../redux/reducer.ts';
import {FilmShortInfo} from '../../../api/interfaces.ts';
import {useState} from 'react';
import {useMyDispatch} from '../../../redux/hooks.ts';
import {setMyFilmStatus} from '../../../redux/api-action.ts';
import {useLocation, useNavigate} from 'react-router-dom';


interface Props {
  filmId: string;
}

export function AddToMyListButton({filmId}: Props){
  const isAuth = useSelector<StoreState, boolean>(x => !!x.authInfo);
  const myList = useSelector<StoreState, FilmShortInfo[]>(x => x.myList);
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useMyDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isFilmInMyList = () => !!myList.find(x => x.id === filmId);

  const onClick = () => {
    async function func(){
      if (!isAuth) {
        navigate(`/login?referer=${location.pathname}`);
      }

      setIsDisabled(true);
      await dispatch(setMyFilmStatus({filmId: filmId, isFavorite: !isFilmInMyList()}));
      setIsDisabled(false);
    }

    void func();
  };

  return (
    <button className="btn btn--list film-card__button" type="button" disabled={isDisabled} onClick={onClick}>
      <span style={{width: 20, height:20, fontSize:32, marginRight:5}}>
        {isFilmInMyList() ? '✓' : '+'}
      </span>
      <span>My list</span>
      {isAuth && <span className="film-card__count">{myList.length}</span>}
    </button>
  );
}
