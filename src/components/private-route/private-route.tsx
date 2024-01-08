import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AuthInfo} from '../../api/interfaces.ts';
import {StoreState} from '../../redux/reducer.ts';
import {AppRoutes} from "../../constants/app-routse.ts";


interface Props {
  children: JSX.Element;
}

export function PrivateRoute({children}: Props){
  const isAuthenticated = useSelector<StoreState, AuthInfo | undefined>(x => x.authInfo);

  return (
    isAuthenticated ? children : <Navigate to={AppRoutes.Login}/>
  );
}
