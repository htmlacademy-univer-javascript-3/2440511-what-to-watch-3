import {Link} from 'react-router-dom';
import {AppRoutes} from '../../../constants/app-routse.ts';


export function FooterLogo() {
  return (
    <div className="logo">
      <Link to={AppRoutes.Home} className="logo__link logo__link--light">
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
}
