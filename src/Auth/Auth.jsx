import axios from "axios";
import { useState, useCallback, useRef, useEffect } from "react";

import Home from "../components/Home/Home";

const api = axios.create({
  baseURL: "https://killteamcompanionappback-production.up.railway.app",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

function Auth() {
  const email = useRef("");
  const password = useRef("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("access_token");
    setIsAuthenticated(false);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    api
      .post("/auth/login", {
        email: `${email.current}`,
        password: `${password.current}`,
      })
      .then((response) => {
        const token = response.data.data.access_token; // Récupération du token
       
      
        localStorage.setItem("access_token", token); // Stockage du token dans le local storage
        api.defaults.headers.common.Authorization = `Bearer ${token}`;
        setIsAuthenticated(true);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleEmailChange = useCallback(
    (event) => {
      email.current = event.target.value.trim();
    },
    []
  );

  const handlePasswordChange = useCallback(
    (event) => {
      password.current = event.target.value.trim();
    },
    []
  );

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>
            Utilisateur{" "}
            {(localStorage.getItem("access_token"))?.email} connecté
          </p>
          <button onClick={handleLogout}>Se déconnecter</button>
          <Home />
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <p>S'identifier</p>
          <label>
            Nom d'utilisateur:
            <input
              type="email"
              defaultValue={email.current}
              onChange={handleEmailChange}
            />
          </label>
          <label>
            Mot de passe:
            <input
              type="password"
              defaultValue={password.current}
              onChange={handlePasswordChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default Auth;

