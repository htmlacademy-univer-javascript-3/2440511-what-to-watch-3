import {useState} from 'react';

interface RatingStarProps {
  indexNumber: number;
  currentRating: number;
  onClick: () => void;
}

function RatingStar({indexNumber, currentRating, onClick}: RatingStarProps){
  return (
    <>
      <input className="rating__input" id={`star-${indexNumber}`} type="radio" name="rating" value={indexNumber} checked={indexNumber === currentRating} onClick={onClick}/>
      <label className="rating__label" htmlFor={`star-${indexNumber}`}>Rating {indexNumber}</label>
    </>
  );
}

export function AddReviewForm(){
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
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
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
}
