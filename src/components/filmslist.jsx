import { Component } from "react";

class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((films) => this.setState({ list: films }))
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    this.getFilms();
  }
  render() {
    return (
      <ul>
        {this.state.list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
  }
}

export default FilmsList;
