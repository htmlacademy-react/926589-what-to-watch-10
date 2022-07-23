import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const changeableHeaderData = {
  TITLE_FILM: 'The Grand Budapest Hotel',
  GENRE: 'Drama',
  RELEASE_DATE: 2010,
  POTER_FILM: 'img/the-grand-budapest-hotel-poster.jpg',
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      titleFilm = {changeableHeaderData.TITLE_FILM}
      genre= {changeableHeaderData.GENRE}
      releaseDate= {changeableHeaderData.RELEASE_DATE}
      posterFilm= {changeableHeaderData.POTER_FILM}
    />
  </React.StrictMode>,
);
