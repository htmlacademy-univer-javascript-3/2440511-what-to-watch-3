import {FilmCard} from '../film-card/film-card.tsx';
import {useState} from 'react';

export interface FilmsListProps {
  filmsData: {filmTitle: string; imgName: string}[];
}

export function FilmsList({filmsData}: FilmsListProps){
  const [, setActiveCard] = useState<string>();

  return (
    <div className="catalog__films-list">
      {
        filmsData.map((x) =>
          <FilmCard key={x.filmTitle} filmTitle={x.filmTitle} imgName={x.imgName} onMouseEnter={setActiveCard}/>)
      }
    </div>
  );
}
