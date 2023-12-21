import {setAuthInfoAction} from '../../redux/action.ts';
import {useSelector} from 'react-redux';
import {StoreState} from '../../redux/reducer.ts';
import {AuthInfo} from '../../api/interfaces.ts';
import {useMyDispatch} from '../../redux/hooks.ts';
import {useLocation, useNavigate} from 'react-router-dom';


export function UserSignBlock(){
  const authInfo = useSelector<StoreState, AuthInfo | undefined>(x => x.authInfo);
  const dispatch = useMyDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ul className="user-block">
      {authInfo &&
        <li className="user-block__item">
          <div className="user-block__avatar">
            <img src={authInfo.avatarUrl} alt="User avatar" width="63" height="63"/>
          </div>
        </li>}
      <li className="user-block__item" onClick={() => {
        if (authInfo) {
          dispatch(setAuthInfoAction(undefined));
        }
        navigate(`/login?referer=${location.pathname}`);
      }}
      >
        <a className="user-block__link">Sign {authInfo ? 'out' : 'in'}</a>
      </li>
    </ul>
  );
}
