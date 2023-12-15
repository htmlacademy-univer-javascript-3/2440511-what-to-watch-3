import {useEffect, useState} from 'react';
import {useMyDispatch} from '../../../../redux/hooks.ts';
import {getFilmComments} from '../../../../redux/api-action.ts';
import {FilmComment} from '../../../../api/interfaces.ts';


interface Props {
  filmId: string;
}

export function MoviePageReviewsTab({filmId}: Props){
  const [comments, setComments] = useState<FilmComment[]>([]);
  const dispatch = useMyDispatch();

  useEffect(() => {
    dispatch(getFilmComments(filmId))
      .then(x => setComments(x.payload as FilmComment[]));
  }, []);

  const renderReviewCard = (comment: FilmComment) => (
    <div className="review" key={comment.id}>
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{comment.user}</cite>
          <time className="review__date" dateTime={comment.date}>{new Date(comment.date).toLocaleString()}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  );

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, Math.trunc(comments.length / 2) + 1).map(x => renderReviewCard(x))}
      </div>
      {comments.length > 1 &&
        <div className="film-card__reviews-col">
          {comments.slice(Math.trunc(comments.length / 2) + 1).map(x => renderReviewCard(x))}
        </div>}
    </div>
  );
}
