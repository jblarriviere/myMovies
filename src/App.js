import './App.css';
import { Container, Row } from 'reactstrap';
import Menu from './components/Menu';
import Movie from './components/Movie';


function App() {

  const moviesData = [
    {
      name: "Star Wars: L'ascension de Skywalker",
      desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette ...",
      img: '/img/starwars.jpg',
      note: 6,
      votes: 5
    },
    {
      name: "Maléfique : Le pouvoir du mal",
      desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un coeur...",
      img: '/img/maleficent.jpg',
      note: 5,
      votes: 3
    },
    {
      name: "Jumanji: The Next Level",
      desc: "L'équipe est de retour, mais le jeu a changé. Alors qu'ils retournent dans Jumanji pour scourir ...",
      img: '/img/jumanji.jpg',
      note: 8,
      votes: 2
    },
    {
      name: "BadBoy 3",
      desc: "La conclusion de la saga Skywalker. De nouvelles légendes vont naître dans cette ...",
      img: '/img/badboy3.jpg',
      note: 6,
      votes: 5
    },
    {
      name: "La reine des neiges",
      desc: "Plusieurs années après avoir découvert pourquoi la plus célèbre méchante Disney avait un coeur...",
      img: '/img/frozen.jpg',
      note: 5,
      votes: 8
    },
    {
      name: "Terminator",
      desc: "Dolor irure reprehenderit eu ex duis commodo non tempor occaecat. Sint ex Lorem elit irure magna veniam sit nisi eiusmod. In in labore magna do enim irure excepteur labore occaecat est fugiat. Minim pariatur dolore laborum duis. Et ut fugiat pariatur veniam excepteur officia ea proident ex aute. Dolore do elit tempor reprehenderit in ipsum exercitation velit ut. Exercitation amet nisi cupidatat commodo.",
      img: '/img/terminator.jpg',
      note: 8,
      votes: 3
    },
  ]


  let myMovies = moviesData.map((movie, i) =>
    <Movie key={i} movieName={movie.name} movieDesc={movie.desc} movieImg={movie.img} globalRating={movie.note} globalCountRating={movie.votes} />
  );

  return (
    <Container className="App" style={{ backgroundColor: '#343a40' }} fluid>
      <Row>
        <Menu />
      </Row>
      <Row>
        {myMovies}
      </Row>
    </Container>
  );
}

export default App;
