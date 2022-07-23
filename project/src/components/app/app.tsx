import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  titleFilm: string;
  genre: string;
  releaseDate: number;
  posterFilm: string;
}

function App ({titleFilm, genre, releaseDate, posterFilm}: AppScreenProps): JSX.Element {
  return(
    <MainScreen titleFilm = {titleFilm} genre = {genre} releaseDate = {releaseDate} posterFilm = {posterFilm} />
  );
}

export default App;
