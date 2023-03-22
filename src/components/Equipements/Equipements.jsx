import { useState } from 'react';
import AgentEquipementAffremite from '../AgentEquipement/AgentEquipementAffremite';
import AgentEquipementDardezieux from '../AgentEquipement/AgentEquipementDardezieux';
import './Equipements.scss';

function Equipements() {

  const [isAffremiteChecked, setIsAffremiteChecked] = useState(false);
  const [isDardezieuxChecked, setIsDardezieuxChecked] = useState(false);

  const handleAffremiteCheckboxChange = (event) => {
    setIsAffremiteChecked(event.target.checked);
  };

  const handleDardezieuxCheckboxChange = (event) => {
    setIsDardezieuxChecked(event.target.checked);
  };

  return (
    <div>
      <h1>Equipements</h1>

      <div className="equipementsChoice">
        <label htmlFor="affremite-checkbox" className="checkbox-label">
          <input
            id="affremite-checkbox"
            className="roundOne"
            type="checkbox"
            checked={isAffremiteChecked}
            onChange={handleAffremiteCheckboxChange}
          />
          Affremite
        </label>

        <label htmlFor="dardezieux-checkbox" className="checkbox-label">
          <input
            id="dardezieux-checkbox"
            className="roundOne"
            type="checkbox"
            checked={isDardezieuxChecked}
            onChange={handleDardezieuxCheckboxChange}
          />
          Dardezieux
        </label>
      </div>

      <div>
        {isDardezieuxChecked && (
        <AgentEquipementDardezieux />
        )}
        {isAffremiteChecked && (
        <AgentEquipementAffremite />
        )}
      </div>

    </div>
  );
}

export default Equipements;
