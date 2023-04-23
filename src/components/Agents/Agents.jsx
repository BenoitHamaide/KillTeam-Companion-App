import { useState, useEffect } from "react";
import './AgentsCaract.scss';
import axios from "axios";
import AgentsCaract from "./AgentsCaract";

function Agents() {
  const API_URL = "benoithamaide-server.eddi.cloud/items/Agents";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="listeAgent">
      <ul>
        {data.map((agent) => (
          <li
            key={agent.id}
          >
            <AgentsCaract key={agent.id} {...agent} />
          </li>
        ))}
      </ul>
    </div>

  );
}

export default Agents;

