import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/home.component";
import About from "./components/about.component";
import Categories from "./components/categories.component";
import Register from "./components/register.component";
import CategoriesSession from './components/categoriessession.component'
import CategoriesSubSession from './components/categoriessubsession.component'
import Thank from "./components/thank";

import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/categories">Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container"></div>
      <div className="App"></div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/thank" element={<Thank />} />
        <Route path='/categories' element={<Categories/>}>
            <Route path=':sessions' element={<CategoriesSession/>}>
              <Route path=':subsessions' element={<CategoriesSubSession/>} />
            </Route>
          </Route>
        <Route path="/register" element={<Register />} />

        
      </Routes>
    </Router>
  );
}

export default App;