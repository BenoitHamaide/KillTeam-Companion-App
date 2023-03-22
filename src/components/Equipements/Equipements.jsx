import { useState } from 'react';
import AgentEquipementAffremite from '../AgentEquipement/AgentEquipementAffremite';

function Equipements() {

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <h1>Equipements</h1>
      <div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        Affremite
      </div>
      {isChecked && (
      <AgentEquipementAffremite />
      )}
    </div>
  );
}
export default Equipements;
