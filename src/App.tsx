import {Home, HomeProps} from './Home/Home.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {SignIn} from './SignIn/SignIn.tsx';
import {MyList} from './MyList/MyList.tsx';
import {MoviePage} from './MoviePage/MoviePage.tsx';
import {MoviePageReviews} from './MoviePage/Reviews/MoviePageReviews.tsx';
import {Player} from './Player/Player.tsx';
import {NotFound} from './NotFound/NotFound.tsx';
import {PrivateRoute} from "./PrivateRoute/PrivateRoute.tsx";


type Props = HomeProps

export function App(props: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home {...props}/>}/>
        <Route path='/login' element={<SignIn/>}/>
        <Route path='/mylist' element={<PrivateRoute isAuthenticated={false}><MyList/></PrivateRoute>}/>
        <Route path='/films/:id' element={<MoviePage/>}>
          <Route path='review' element={<MoviePageReviews/>}/>
        </Route>
        <Route path='/player/:id' element={<Player/>}/>

        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}
