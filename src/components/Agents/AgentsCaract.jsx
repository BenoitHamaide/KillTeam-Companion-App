import { useState } from "react";
import PropTypes from 'prop-types';
import './AgentsCaract.scss';

function AgentsCaract({
  name, Mouvement, LimitePointAction, Activationgroupe, Defense, Sauvegarde, Aptitudes, Traits, ArmeCT, ArmeCC, ArmeCC2, picture, PV,
}) {
  const [incrementePv, setIncrementePv] = useState(PV);

  function addPv() {
    if (incrementePv < PV) {
      setIncrementePv(prev => prev + 1);
    }
  }
  function removePv() {
    if (incrementePv > 0) {
      setIncrementePv(incrementePv - 1);
    }
  }
  return (
    <div className="card">
      <div className="header">
        <h2>{name}</h2>
        <img src={`../src/${picture}`} alt="agent" />
      </div>
      <div className="caract">
        <p title="mouvement">M<span>{Mouvement}</span></p>
        <p title="limite point d'action">LPA<span>{LimitePointAction}</span></p>
        <p title="activation de groupe">AG<span>{Activationgroupe}</span></p>
        <p title="défense">DF<span>{Defense}</span></p>
        <p title="sauvegarde">SVG<span>{Sauvegarde}</span></p>
        <p title="points de vie">PV<span>{incrementePv}</span></p>
      </div>
      <div className="buttonCounter">
        <button title="augmente pv" onClick={() => addPv(incrementePv)}> + </button>
        <button title="réduire pv" onClick={() => removePv(incrementePv)}> - </button>
      </div>
      <p title="arme de tir">{ArmeCT}</p>
      <p title="arme de corps a corps">{ArmeCC}</p>
      <p title="arme de corps a corps">{ArmeCC2}</p>
      <p>{Aptitudes}</p>
      <div className="keyword">
        <p>{Traits}</p>
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
  ArmeCT: null,
  ArmeCC: null,
  ArmeCC2: null,
};

export default AgentsCaract;
