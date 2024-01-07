import {useState} from 'react';
import {useMyDispatch} from '../../../redux/hooks.ts';
import {useNavigate} from 'react-router-dom';
import {postComment} from '../../../redux/api-action.ts';

interface RatingStarProps {
  indexNumber: number;
  currentRating: number;
  onClick: () => void;
}

function RatingStar({indexNumber, currentRating, onClick}: RatingStarProps){
  return (
    <>
      <input className="rating__input" id={`star-${indexNumber}`} type="radio" name="rating" value={indexNumber} checked={indexNumber === currentRating} onClick={onClick} readOnly/>
      <label className="rating__label" htmlFor={`star-${indexNumber}`}>Rating {indexNumber}</label>
    </>
  );
}

interface Props {
  filmId: string;
}

export function AddReviewForm({filmId}: Props){
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');
  const dispatch = useMyDispatch();
  const navigate = useNavigate();

  const onSubmit = () => {
    dispatch(postComment({filmId: filmId, comment: text, rating: rating}))
      .then((x) => {
        if (x.payload) {
          navigate(`/films/${ filmId}`);
        } else {
          // eslint-disable-next-line no-alert
          alert('error, try again');
        }
      });
  };

  const isButtonDisabled = () => text.length < 50 || text.length > 400;

  return (
    <div className="add-review">
      <div className="add-review__form">
        <div className="rating">
          <div className="rating__stars">
            {
              Array.from(Array(10).keys()).reverse().map((x) =>
                (<RatingStar key={x} indexNumber={x + 1} currentRating={rating} onClick={() => setRating(x + 1)}/>))
            }
          </div>
        </div>

        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" value={text} onChange={(event) => setText(event.target.value)}></textarea>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit" onClick={onSubmit} disabled={isButtonDisabled()}>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
