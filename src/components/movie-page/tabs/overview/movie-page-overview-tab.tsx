import {FilmInfo} from '../../../../api/interfaces.ts';


export function MoviePageOverviewTab({rating, director, scoresCount, starring, description}: FilmInfo){

  const ratingToString = () => {
    if (rating >= 8) {
      return 'Very good';
    } else if (rating >= 4) {
      return 'Normal';
    }
    return 'Bad';
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{ratingToString()}</span>
          <span className="film-rating__count">{scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{description}</p>

        <p className="film-card__director"><strong>Director: {director}</strong></p>

        <p className="film-card__starring">
          <strong>
            Starring: {starring.join(', ')}
          </strong>
        </p>
      </div>
    </>
  );
}
