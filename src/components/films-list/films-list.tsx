import {FilmCard} from '../film-card/film-card.tsx';
import {useState} from 'react';

export interface FilmsListProps {
  filmsData: {filmTitle: string; imgName: string}[];
}

interface Props {
  filmsCount: number;
}

export function FilmsList({filmsData, filmsCount}: FilmsListProps & Props){
  const [, setActiveCard] = useState<string>();

  return (
    <div className="catalog__films-list">
      {
        filmsData.slice(0, filmsCount).map((x) =>
          <FilmCard key={x.filmTitle} filmTitle={x.filmTitle} imgName={x.imgName} onMouseEnter={setActiveCard}/>)
      }
    </div>
  );
}
