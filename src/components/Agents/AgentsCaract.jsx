import { useState } from "react";
import PropTypes from 'prop-types';
import './AgentsCaract.scss';

function AgentsCaract({
  name, thumbnail, mouvement, lpa, ag, defense, svg, aptitudes, traits, armeTir1Name, armeTir1Attaque, armeTir1TC, armeCorp1TC, armeTir1Degat, armeTir1Rs, armeTir1Critique, armeTir2Name, armeTir2Attaque, armeTir2TC, armeTir2Degat, armeTir2Rs, armeTir2Critique, armeCorp1Name, armeCorp1Attaque, armeCorp1Degat, armeCorp1Rs, armeCorp1Critique, armeCorp2Name, armeCorp2Attaque, armeCorp2TC, armeCorp2Degat, armeCorp2Rs, armeCorp2Critique, pv,
}) {

  const [incrementePv, setIncrementePv] = useState(pv);
  const Mouvement = incrementePv < pv / 2 ? mouvement - 1 : mouvement;
  const armeCTTC = incrementePv < pv / 2 ? armeTir1TC + 1 : armeTir1TC;
  const armeCT2TC = incrementePv < pv / 2 ? armeTir2TC + 1 : armeTir2TC;
  const armeCCTC = incrementePv < pv / 2 ? armeCorp1TC + 1 : armeCorp1TC;
  const armeCC2TC = incrementePv < pv / 2 ? armeCorp2TC + 1 : armeCorp2TC;
  const [isActive, setIsActive] = useState(true);
  // fonctions d'incrémentation / décrémentation
  function addPv() {
    if (incrementePv < pv) {
      setIncrementePv(prev => prev + 1);
    }
  }
  function removePv() {
    if (incrementePv > 0) {
      setIncrementePv(incrementePv - 1);
    }
  }

  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <div className="card">

      {/* entete de card */}

      <div className={incrementePv === 0 ? "header-dead" : "header"}>
        <h2>{name}</h2>
        <img src={`http://localhost:8055/assets/${thumbnail}`} alt="agent" />
      </div>
      <div className={isActive ? "actif" : "inactif"}>
        <button type="text" onClick={handleClick}>
          {isActive ? "Active" : "Inactif"}
        </button>
      </div>
      {/* caracteristique d'agent */}

      <div className={incrementePv === 0 ? "dead" : (Math.max(incrementePv, 1) < (pv / 2) && pv > 1) ? "blessé" : "caract"}>
        <p title="mouvement">M<span>{Mouvement}</span></p>
        <p title="limite point d'action">LPA<span>{lpa}</span></p>
        <p title="activation de groupe">AG<span>{ag}</span></p>
        <p title="défense">DF<span>{defense}</span></p>
        <p title="sauvegarde">SVG<span>{svg}</span></p>
        <p title="points de vie">PV<span>{incrementePv}</span></p>
      </div>

      {/* bouton d'incrémentation / décrémentation */}

      <div className="buttonCounter">
        <button title="augmente pv" onClick={() => addPv(incrementePv)}> + </button>
        <button title="réduire pv" onClick={() => removePv(incrementePv)}> - </button>
      </div>

      {/* caracteristique arme de tir 1 */}

      <div className="armeTirCaract">
        <p title="arme de tir">{armeTir1Name}</p>
        <p>A<span>{armeTir1Attaque}</span></p>
        <p>T/C<span>{armeCTTC}+</span></p>
        <p>D<span>{armeTir1Degat}</span></p>
        <p>RS<span>{armeTir1Rs}</span></p>
        <p>!<span>{armeTir1Critique}</span></p>
      </div>

      {/* caracteristique arme de tir 2 */}
      {armeTir2Name && (
      <div className="armeTirCaract2 ">
        <p title="arme de tir">{armeTir2Name}</p>
        <p>A<span>{armeTir2Attaque}</span></p>
        <p>T/C<span>{armeCT2TC}+</span></p>
        <p>D<span>{armeTir2Degat}</span></p>
        <p>RS<span>{armeTir2Rs}</span></p>
        <p>RS<span>{armeTir2Critique}</span></p>
      </div>
      )}

      {/* caracteristique arme de corps a corp 1 */}

      <div className="armeCcCaract">
        <p title="arme de corps a corps">{armeCorp1Name}</p>
        <p>A<span>{armeCorp1Attaque}</span></p>
        <p>T/C<span>{armeCCTC}+</span></p>
        <p>D<span>{armeCorp1Degat}</span></p>
        <p>RS<span>{armeCorp1Rs}</span></p>
        <p>!<span>{armeCorp1Critique}</span></p>
      </div>

      {/* caracteristique arme de corps a corp 2 */}
      {armeCorp2Name && (
      <div className="armeCcCaract2">
        <p title="arme de corps a corps">{armeCorp2Name}</p>
        <p>A<span>{armeCorp2Attaque}</span></p>
        <p>T/C<span>{armeCC2TC}+</span></p>
        <p>D<span>{armeCorp2Degat}</span></p>
        <p>RS<span>{armeCorp2Rs}</span></p>
        <p>!<span>{armeCorp2Critique}</span></p>
      </div>
      )}

      <p>Aptitudes</p>
      <p>{aptitudes}</p>
      <div className="keyword">
        <p>{traits}</p>
      </div>
    </div>
  );
}

AgentsCaract.protoTypes = {
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

AgentsCaract.defaultProps = {
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

export default AgentsCaract;
