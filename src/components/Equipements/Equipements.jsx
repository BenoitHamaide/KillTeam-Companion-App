import { useState } from 'react';
import PropTypes from 'prop-types';
import Team from "../../data/Team";

function Equipements() {
  const equipements = Team.Equipements;
  const Pv = equipements[0].PV;
  const [incrementePv, setIncrementePv] = useState(equipements[0].PV);

  const mouvement = incrementePv < Pv / 2 ? equipements[0].Mouvement - 1 : equipements[0].Mouvement;
  const armeCCTC = incrementePv < Pv / 2 ? equipements[0].ArmeCCTC + 1 : equipements[0].ArmeCCTC;

  const [isChecked, setIsChecked] = useState(false);


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const addPv = () => {
    if (incrementePv < Pv) {
      setIncrementePv(prev => prev + 1);
    }
  };

  const removePv = () => {
    if (incrementePv > 0) {
      setIncrementePv(prev => prev - 1);
    }
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

        <div className="card">

          {/* entete de card */}

          <div className={incrementePv === 0 ? "header-dead" : "header"}>
            <h2>{equipements[0].name}</h2>
            <img src={`../src/${equipements[0].picture}`} alt="agent" />
          </div>

          {/* caracteristique d'agent */}

          <div className={incrementePv === 0 ? "dead" : (Math.max(incrementePv, 1) < (Pv / 2) && Pv > 1) ? "blessé" : "caract"}>

            <p title="mouvement">M<span>{mouvement}</span></p>
            <p title="limite point d'action">LPA<span>{equipements[0].LimitePointAction}</span></p>
            <p title="activation de groupe">AG<span>{equipements[0].Activationgroupe}</span></p>
            <p title="défense">DF<span>{equipements[0].Defense}</span></p>
            <p title="sauvegarde">SVG<span>{equipements[0].Sauvegarde}</span></p>
            <p title="points de vie">PV<span>{incrementePv}</span></p>
          </div>

          {/* bouton d'incrémentation / décrémentation */}

          <div className="buttonCounter">
            <button title="augmente pv" onClick={addPv}> + </button>
            <button title="réduire pv" onClick={removePv}> - </button>
          </div>

          {/* caracteristique arme de corps a corp 1 */}

          <div className="armeCcCaract">
            <p title="arme de corps a corps">{equipements[0].ArmeCCName}</p>
            <p>A<span>{equipements[0].ArmeCCA}</span></p>
            <p>T/C<span>{armeCCTC}+</span></p>
            <p>D<span>{equipements[0].ArmeCCD}</span></p>
            <p>RS<span>{equipements[0].ArmeCCRS}</span></p>
          </div>

          <p>Aptitudes</p>
          <p>{equipements[0].Aptitudes}</p>
          <div className="keyword">
            <p>{equipements[0].Traits}</p>
          </div>

        </div>
      )}
    </div>
  );
}
Equipements.protoTypes = {
  name: PropTypes.string.isRequired,
  Mouvement: PropTypes.number.isRequired,
  LimitePointAction: PropTypes.number.isRequired,
  Activationgroupe: PropTypes.number.isRequired,
  Defense: PropTypes.number.isRequired,
  SVG: PropTypes.string.isRequired,
  AgentsPV: PropTypes.string.isRequired,
  Aptitudes: PropTypes.string.isRequired,
  Traits: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Equipements.defaultProps = {
  ArmeCTName: null,
  ArmeCTA: null,
  ArmeCTTC: null,
  ArmeCTD: null,
  ArmeCTRS: null,
  ArmeCCName: null,
  ArmeCCA: null,
  ArmeCCTC: null,
  ArmeCCD: null,
  ArmeCCRS: null,
  ArmeCC2Name: null,
  ArmeCC2A: null,
  ArmeCC2TC: null,
  ArmeCC2D: null,
  ArmeCC2RS: null,
};
export default Equipements;
