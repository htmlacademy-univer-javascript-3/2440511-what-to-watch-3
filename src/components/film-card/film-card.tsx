import {VideoPlayer} from '../video-player/video-player.tsx';
import {useState} from 'react';


interface Props {
  filmTitle: string;
  imgName: string;
  onMouseEnter: (key: string) => void;
}

export function FilmCard({filmTitle, imgName, onMouseEnter}: Props) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();


  const onMouseEnterInternal = () => {
    onMouseEnter(filmTitle);
    setTimeoutId(setTimeout(() => {
      setIsPlayerVisible(true);
      setTimeoutId(undefined);
    }, 1000));
  };

  const onMouseLeaveInternal = () => {
    clearTimeout(timeoutId);
    setIsPlayerVisible(false);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnterInternal} onMouseLeave={onMouseLeaveInternal}>
      {!isPlayerVisible &&
        <>
          <div className="small-film-card__image">
            <img src={`img/${imgName}`} alt={filmTitle} width="280" height="175"/>
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link" href="film-page.html">{filmTitle}</a>
          </h3>
        </>}
      {isPlayerVisible && <VideoPlayer/>}
    </article>
  );
}
