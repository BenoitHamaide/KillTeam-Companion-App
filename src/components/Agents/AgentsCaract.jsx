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
      <h2>{name}</h2>
      <img src={`../src/${picture}`} alt="agent" />
      <div className="caract">
        <p>M<span>{Mouvement}</span></p>
        <p>LPA<span>{LimitePointAction}</span></p>
        <p>AG<span>{Activationgroupe}</span></p>
        <p>DF<span>{Defense}</span></p>
        <p>SVG<span>{Sauvegarde}</span></p>
        <p>PV<span>{incrementePv}</span></p>
      </div>
      <div className="buttonCounter">
        <button onClick={() => addPv(incrementePv)}> + </button>
        <button onClick={() => removePv(incrementePv)}> - </button>
      </div>
      <p>{ArmeCT}</p>
      <p>{ArmeCC}</p>
      <p>{ArmeCC2}</p>

      <p>{Aptitudes}</p>
      <p>{Traits}</p>
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
