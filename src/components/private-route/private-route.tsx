import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {StoreState} from '../../redux/state.ts';
import {AuthInfo} from '../../api/interfaces.ts';


interface Props {
  children: JSX.Element;
}

export function PrivateRoute({children}: Props){
  const isAuthenticated = useSelector<StoreState, AuthInfo | undefined>(x => x.authInfo);

  return (
    isAuthenticated ? children : <Navigate to='/login'/>
  );
}
