import {Home} from './home/home.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from './sign-in/sign-in.tsx';
import {MyList} from './my-list/my-list.tsx';
import {MoviePage} from './movie-page/movie-page.tsx';
import {Player} from './player/player.tsx';
import {NotFound} from './not-found/not-found.tsx';
import {PrivateRoute} from './private-route/private-route.tsx';
import {useEffect} from 'react';
import {getAllFilms, getMyFilms, getPromoFilm} from '../redux/api-action.ts';
import {useMyDispatch} from '../redux/hooks.ts';
import {Loader} from '@skbkontur/react-ui';
import {useSelector} from 'react-redux';
import {StoreState} from '../redux/reducer.ts';
import {setIsLoadingAction} from '../redux/action.ts';
import {AddReview} from './add-review/add-review.tsx';
import {AppRoutes} from '../constants/app-routse.ts';

export function App() {
  const dispatch = useMyDispatch();
  const isLoading = useSelector<StoreState, boolean>((x) => x.isLoading);

  useEffect(() => {
    async function setup() {
      dispatch(setIsLoadingAction(true));
      await dispatch(getAllFilms());
      await dispatch(getPromoFilm());
      await dispatch(getMyFilms());
      dispatch(setIsLoadingAction(false));
    }

    void setup();
  }, []);

  return (
    <Loader active={isLoading} type={'big'} caption={'Загружаем фильмы...'}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path={AppRoutes.Login} element={<SignIn/>}/>
          <Route path={AppRoutes.MyList} element={<PrivateRoute><MyList/></PrivateRoute>}/>
          <Route path={`${AppRoutes.Films}/:id`} element={<MoviePage/>}/>
          <Route path={`${AppRoutes.Films}/:id${AppRoutes.Review}`} element={<PrivateRoute><AddReview/></PrivateRoute>}/>
          <Route path={`${AppRoutes.Player}/:id`} element={<Player/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Loader>
  );
}
