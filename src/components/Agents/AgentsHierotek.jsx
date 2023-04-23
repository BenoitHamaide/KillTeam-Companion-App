import { useState, useEffect } from "react";
import "./AgentsCaract.scss";
import axios from "axios";
import AgentsCaract from "./AgentsCaract";
import Equipements from "./Equipements";

function AgentsHierotek() {
  const API_URL = "benoithamaide-server.eddi.cloud/items/CercleHierotek";
  const [data, setData] = useState([]);
  const [isCheckedEquipement, setIsCheckedEquipement] = useState(false);

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

  function handleCheckBox() {
    setIsCheckedEquipement(!isCheckedEquipement);
  }

  return (
    <div className="listeAgent">
      <label>
        <input
          type="checkbox"
          checked={isCheckedEquipement}
          onChange={handleCheckBox}
        />
        Equipement
      </label>
      <ul>
        {data.map((agent) => (
          <li key={agent.id}>
            <AgentsCaract {...agent} />
          </li>
        ))}
      </ul>
      {isCheckedEquipement && (
      <Equipements />
      )}
    </div>
  );
}

export default AgentsHierotek;

