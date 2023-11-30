
export const filmsData = [
  {
    filmTitle: 'Fantastic Beasts: The Crimes of Grindelwald',
    imgName: 'fantastic-beasts-the-crimes-of-grindelwald.jpg',
    genre: 'Comedies'
  },
  {
    filmTitle: 'Bohemian Rhapsody',
    imgName: 'bohemian-rhapsody.jpg',
    genre: 'Crime'
  },
  {
    filmTitle: 'Macbeth',
    imgName: 'macbeth.jpg',
    genre: 'Documentary'
  },
  {
    filmTitle: 'Aviator',
    imgName: 'aviator.jpg',
    genre: 'Dramas'
  },
  {
    filmTitle: 'We need to talk about Kevin',
    imgName: 'we-need-to-talk-about-kevin.jpg',
    genre: 'Horror'
  },
  {
    filmTitle: 'What We Do in the Shadows',
    imgName: 'what-we-do-in-the-shadows.jpg',
    genre: 'Kids & Family'
  },
  {
    filmTitle: 'Revenant',
    imgName: 'revenant.jpg',
    genre: 'Romance'
  },
  {
    filmTitle: 'Johnny English',
    imgName: 'johnny-english.jpg',
    genre: 'Sci-Fi'
  },
  {
    filmTitle: 'Shutter Island',
    imgName: 'shutter-island.jpg',
    genre: 'Thrillers'
  },
  {
    filmTitle: 'Pulp Fiction',
    imgName: 'pulp-fiction.jpg',
    genre: 'Comedies'
  },
  {
    filmTitle: 'No Country for Old Men',
    imgName: 'no-country-for-old-men.jpg',
    genre: 'Crime'
  },
  {
    filmTitle: 'Snatch',
    imgName: 'snatch.jpg',
    genre: 'Sci-Fi'
  },
  {
    filmTitle: 'Moonrise Kingdom',
    imgName: 'moonrise-kingdom.jpg',
    genre: 'Kids & Family'
  },
  {
    filmTitle: 'Seven Years in Tibet',
    imgName: 'seven-years-in-tibet.jpg',
    genre: 'Horror'
  },
  {
    filmTitle: 'Midnight Special',
    imgName: 'midnight-special.jpg',
    genre: 'Dramas'
  },
  {
    filmTitle: 'War of the Worlds',
    imgName: 'war-of-the-worlds.jpg',
    genre: 'Romance'
  },
  {
    filmTitle: 'Dardjeeling Limited',
    imgName: 'dardjeeling-limited.jpg',
    genre: 'Kids & Family'
  },
  {
    filmTitle: 'Orlando',
    imgName: 'orlando.jpg',
    genre: 'Dramas'
  },
];

export const allGenresNames = ['All genres'].concat(Array.from(new Set(filmsData.map((x) => x.genre)).values()));
