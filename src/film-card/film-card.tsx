

interface Props {
  filmTitle: string;
  imgName: string;
}

export function FilmCard({filmTitle, imgName}: Props) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={`img/${imgName}`} alt={filmTitle} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{filmTitle}</a>
      </h3>
    </article>
  );
}
