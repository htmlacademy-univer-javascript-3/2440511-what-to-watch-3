import {Navigate} from 'react-router-dom';


interface Props {
  isAuthenticated: boolean;
  children: JSX.Element;
}

export function PrivateRoute({isAuthenticated, children}: Props){
  return (
    isAuthenticated ? children : <Navigate to='/login'/>
  );
}
