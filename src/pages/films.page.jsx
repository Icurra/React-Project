import { useState, useEffect } from "react";
import {
  filterFlimsByDirector,
  getListOf,
  getFilmStats,
} from "../helpers/film.helpers";
import { Link } from "react-router-dom";

function FilmsPage(props) {
  let [list, setList] = useState([]);
  let [searchDirector, setSearchDirector] = useState("");

  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((films) => setList(films))
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getFilms();
  }, []);

  let filmsByDirector = filterFlimsByDirector(list, searchDirector);
  let directors = getListOf(list, "director");
  let { avg_score, latest, total } = getFilmStats(filmsByDirector);

  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <label htmlFor="searchDirector">Filter By Director</label>
        <select
          name="searchDirector"
          id="searchDirector"
          value={searchDirector}
          onChange={(e) => setSearchDirector(e.target.value)}
        >
          <option value="">All</option>
          {directors.map((director, idx) => {
            return (
              <option key={director + idx} value={director}>
                {director}
              </option>
            );
          })}
        </select>
      </form>
      <div>
        <div>
          <span># Of Films</span>
          <span>{total}</span>
        </div>
        <div>
          <span>Average Rating</span>
          <span>{avg_score.toFixed(2)}</span>
        </div>
        <div>
          <span>Latest Film</span>
          <span>{latest}</span>
        </div>
      </div>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilmsPage;
