import {Link} from 'react-router-dom';
import {AppRoutes} from '../../constants/app-routse.ts';


export function NotFound(){
  return (
    <>
      <h1>Page not found :(</h1>
      <Link to={AppRoutes.Home}>Вернуться на главную</Link>
    </>
  );
}
