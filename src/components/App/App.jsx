import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Home from "../Home/Home";
import NotFound from '../../Pages/NotFound';
import "./App.scss";




function App() {

  return (
    <div className="App">
      <NavLink to="/">
        <div className="container-logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
