import {Home} from './home/home.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from './sign-in/sign-in.tsx';
import {MyList} from './my-list/my-list.tsx';
import {MoviePage} from './movie-page/movie-page.tsx';
import {Player} from './player/player.tsx';
import {NotFound} from './not-found/not-found.tsx';
import {PrivateRoute} from './private-route/private-route.tsx';
import {useEffect} from 'react';
import {getAllFilms, getPromoFilm} from '../redux/api-action.ts';
import {useMyDispatch} from '../redux/hooks.ts';
import {Loader} from '@skbkontur/react-ui';
import {useSelector} from 'react-redux';
import {StoreState} from '../redux/reducer.ts';
import {setIsLoadingAction} from '../redux/action.ts';
import {AddReview} from './add-review/add-review.tsx';

export function App() {
  const dispatch = useMyDispatch();
  const isLoading = useSelector<StoreState, boolean>((x) => x.isLoading);

  useEffect(() => {
    async function setup() {
      dispatch(setIsLoadingAction(true));
      await dispatch(getAllFilms());
      await dispatch(getPromoFilm());
      dispatch(setIsLoadingAction(false));
    }

    void setup();
  }, []);

  return (
    <Loader active={isLoading} type={'big'} caption={'Загружаем фильмы...'}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/mylist' element={<PrivateRoute><MyList/></PrivateRoute>}/>
          <Route path='/films/:id' element={<MoviePage/>}/>
          <Route path='/films/:id/review' element={<PrivateRoute><AddReview/></PrivateRoute>}/>
          <Route path='/player/:id' element={<Player/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </Loader>
  );
}
