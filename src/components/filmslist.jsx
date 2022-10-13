import { useState, useEffect } from "react";

function FilmsList (props) {
  let [list, setList] = useState([])

 function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((films) => setList(films))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getFilms();
  }, [])
 
    return (
      <ul>
        {list.map((film) => {
          return <li key={film.id}>{film.title}</li>;
        })}
      </ul>
    );
}

export default FilmsList;
