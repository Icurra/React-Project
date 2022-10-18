import "./App.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { HomePage, FilmsPage } from "./pages";

function App(props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="films">Films</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="films" element={<FilmsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
