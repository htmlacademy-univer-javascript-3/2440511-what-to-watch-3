import {FilmInfo} from '../../../../api/interfaces.ts';

const convertRatingToString = (rating: number) => {
  if (rating >= 10) {
    return 'Awesome';
  } else if (rating >= 8) {
    return 'Very good';
  } else if (rating >= 5) {
    return 'Good';
  } else if (rating >= 3) {
    return 'Normal';
  }
  return 'Bad';
};

export function MoviePageOverviewTab({rating, director, scoresCount, starring, description}: FilmInfo){

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{rating.toFixed(1)}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{convertRatingToString(rating)}</span>
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
