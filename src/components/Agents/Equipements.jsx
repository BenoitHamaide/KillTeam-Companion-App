import { useState, useEffect } from "react";
import axios from "axios";
import './AgentsCaract.scss';

function Equipements() {
  const API_HIEROTEK_EQUIPEMENTS = "https://killteamcompanionappback-production.up.railway.app/items/HierotekEquipements";
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(API_HIEROTEK_EQUIPEMENTS)
      .then((response) => {
        console.log(response.data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {data.map((equipement) => (
          <li key={equipement.id}>
            <div className="card">
              <h2>{equipement.Name} ( {equipement.cout}PE )</h2>
              {equipement.contenu_principal && (
              <p>{equipement.contenu_principal}</p>
              )}
              {equipement.titre_contenu_secondaire && (
              <p>{equipement.titre_contenu_secondaire}</p>
              )}
              {equipement.contenu_secondaire && (
              <p>{equipement.contenu_secondaire}</p>
              )}
              {equipement.armeTirName && (
              <div>
                <p className="armeName">{equipement.armeTirName}</p>
                <p>{equipement.armeTirAttaque}</p>
                <p>{equipement.armeTirCt}</p>
                <p>{equipement.armeTirDegat}</p>
                <p>{equipement.armeTirRs}</p>
                <p>{equipement.armeTirCritique}</p>
              </div>
              )}
              {equipement.supplement && (
              <p>{equipement.supplement}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Equipements;

