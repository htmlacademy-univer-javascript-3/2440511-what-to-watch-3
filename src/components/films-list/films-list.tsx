import {FilmCard} from '../film-card/film-card.tsx';
import {useState} from 'react';
import {FilmPreview} from '../../api/interfaces.ts';

export interface FilmsListProps {
  filmsData: FilmPreview[];
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
          <FilmCard key={x.name} filmTitle={x.name} imgName={x.previewImage} previewVideoLink={x.previewVideoLink} onMouseEnter={setActiveCard}/>)
      }
    </div>
  );
}
