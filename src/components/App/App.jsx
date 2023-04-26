import { Routes, Route, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import NotFound from '../../Pages/NotFound';
import "./App.scss";
import Auth from "../../Auth/Auth";


function App() {

  return (
    <div className="App">
      <NavLink to="/">
        <div className="container-logo">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <h2>Companion App</h2>
      </NavLink>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
