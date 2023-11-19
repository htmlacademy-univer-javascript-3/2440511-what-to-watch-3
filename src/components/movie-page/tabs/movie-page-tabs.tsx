import {MoviePageTabType} from './movie-page-tab-type.tsx';
import {useState} from 'react';
import * as classNames from 'classnames';


interface Props {
  onTabClickCallback: (type: MoviePageTabType) => void;
  defaultTab: MoviePageTabType;
}

const tabStyles = {
  cursor: 'default'
};

export function MoviePageTabs({onTabClickCallback, defaultTab}: Props){
  const [activeTab, setActiveTab] = useState(defaultTab);

  const onTabClick = (type: MoviePageTabType) => {
    setActiveTab(type);
    onTabClickCallback(type);
  };

  return (
    <nav className="film-nav film-card__nav">
      <ul className="film-nav__list">
        <li style={tabStyles} className={classNames('film-nav__item', {'film-nav__item--active': activeTab === MoviePageTabType.Overview})}>
          <a className="film-nav__link" onClick={() => onTabClick(MoviePageTabType.Overview)}>Overview</a>
        </li>
        <li style={tabStyles} className={classNames('film-nav__item', {'film-nav__item--active': activeTab === MoviePageTabType.Details})}>
          <a className="film-nav__link" onClick={() => onTabClick(MoviePageTabType.Details)}>Details</a>
        </li>
        <li style={tabStyles} className={classNames('film-nav__item', {'film-nav__item--active': activeTab === MoviePageTabType.Reviews})}>
          <a className="film-nav__link" onClick={() => onTabClick(MoviePageTabType.Reviews)}>Reviews</a>
        </li>
      </ul>
    </nav>
  );
}
