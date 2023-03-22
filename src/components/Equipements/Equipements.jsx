import { useState } from 'react';
import AgentEquipementAffremite from '../AgentEquipement/AgentEquipementAffremite';
import AgentEquipementDardezieux from '../AgentEquipement/AgentEquipementDardezieux';

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

      <div>
        <input
          type="checkbox"
          checked={isAffremiteChecked}
          onChange={handleAffremiteCheckboxChange}
        />
        Affremite
        {isAffremiteChecked && (
          <AgentEquipementAffremite />
        )}
      </div>

      <div>
        <input
          type="checkbox"
          checked={isDardezieuxChecked}
          onChange={handleDardezieuxCheckboxChange}
        />
        Dardezieux
        {isDardezieuxChecked && (
          <AgentEquipementDardezieux />
        )}
      </div>
    </div>
  );
}

export default Equipements;
