import {VideoPlayer} from '../video-player/video-player.tsx';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';


interface Props {
  filmId: string;
  filmTitle: string;
  imgName: string;
  previewVideoLink: string;
  onMouseEnter: (key: string) => void;
}

export function FilmCard({filmId, filmTitle, imgName, previewVideoLink, onMouseEnter}: Props) {
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  const navigate = useNavigate();


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

  const onClick = () => {
    navigate(`/films/${ filmId}`);
  };

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={onMouseEnterInternal}
      onMouseLeave={onMouseLeaveInternal} onClick={onClick}
    >
      {!isPlayerVisible &&
        <>
          <div className="small-film-card__image">
            <img src={imgName} alt={filmTitle} width="280" height="175"/>
          </div>
          <h3 className="small-film-card__title">
            <a className="small-film-card__link">{filmTitle}</a>
          </h3>
        </>}
      {isPlayerVisible && <VideoPlayer height={175} width={260} sourceSrc={previewVideoLink}/>}
    </article>
  );
}
