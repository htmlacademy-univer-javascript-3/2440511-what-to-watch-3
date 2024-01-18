import {useParams} from 'react-router-dom';
import {useMyDispatch} from '../../redux/hooks.ts';
import {useEffect, useState} from 'react';
import {FilmInfo} from '../../api/interfaces.ts';
import {getFilmInfo} from '../../redux/api-action.ts';
import {useMyNavigate} from '../../helpers/my-navigate.ts';


const playerId = 'player';
const getPlayerHtmlElement = () => document.getElementById(playerId) as HTMLMediaElement;

const formatLeftTime = (leftTimeInSeconds: number) => {
  const leftSeconds = leftTimeInSeconds % 60;
  const leftMinutes = Math.floor(leftTimeInSeconds / 60) % 60;
  const leftHours = Math.floor(leftTimeInSeconds / 3600);

  const formatToNotSingleDigit = (number: number) => number < 10 ? `0${number}` : `${number}`;

  const formattedSeconds = formatToNotSingleDigit(leftSeconds);
  const formattedMinutes = formatToNotSingleDigit(leftMinutes);

  if (leftHours > 0) {
    const formattedHours = formatToNotSingleDigit(leftHours);
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  return `${formattedMinutes}:${formattedSeconds}`;
};

export function Player(){
  const [progressBarValue, setProgressBarValue] = useState(50);
  const [leftTime, setLeftTime] = useState('00:00');
  const {id} = useParams<{id: string}>();
  const [filmInfo, setFilmInfo] = useState<FilmInfo>();
  const dispatch = useMyDispatch();
  const navigate = useMyNavigate();

  useEffect(() => {
    async function setup(){
      const info = (await dispatch(getFilmInfo(id ?? ''))).payload as (FilmInfo | undefined);
      setFilmInfo(info);
    }

    void setup();
  }, []);

  const onPlayButtonClick = () => {
    const player = getPlayerHtmlElement();
    if (player.paused || player.ended) {
      void player.play();
    } else {
      void player.pause();
    }
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const onPlayerTimeUpdate = (event) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const player = event.target as HTMLMediaElement;

    const percentage = Math.floor((100 / player.duration) * player.currentTime);
    setProgressBarValue(percentage);

    const leftTimeInSeconds = Math.floor(player.duration - player.currentTime);
    setLeftTime(formatLeftTime(leftTimeInSeconds));
  };

  const onFullScreenButtonClick = () => {
    const player = getPlayerHtmlElement();
    if (document.fullscreenElement) {
      void document.exitFullscreen();
    } else {
      void player.requestFullscreen();
    }
  };

  const onExitButtonClick = () => {
    navigate.toFilm(id ?? '');
  };

  return (
    filmInfo ?
      <div className="player">
        <video id={playerId} className="player__video" poster={filmInfo?.backgroundImage} onTimeUpdate={onPlayerTimeUpdate}>
          <source src={filmInfo?.videoLink}/>
        </video>

        <button type="button" className="player__exit" onClick={onExitButtonClick}>Exit</button>

        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progressBarValue} max={100}></progress>
              <div className="player__toggler" style={{left: `${progressBarValue}%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{leftTime}</div>
          </div>

          <div className="player__controls-row">
            <button type="button" className="player__play" onClick={onPlayButtonClick}>
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <div className="player__name">{filmInfo.name}</div>

            <button type="button" className="player__full-screen" onClick={onFullScreenButtonClick}>
              <svg viewBox="0 0 27 27" width="27" height="27">
                <use xlinkHref="#full-screen"></use>
              </svg>
              <span>Full screen</span>
            </button>
          </div>
        </div>
      </div>
      : <div/>
  );
}
