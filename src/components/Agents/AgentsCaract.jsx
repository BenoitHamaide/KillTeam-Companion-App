import { useState } from "react";
import PropTypes from 'prop-types';
import './AgentsCaract.scss';

function AgentsCaract({
  name, Mouvement, LimitePointAction, ActivationGroupe, Defense, Sauvegarde, Aptitudes, Traits, ArmeCT, ArmeCC, ArmeCC2, picture, PV,
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
      <p>M : {Mouvement} LPA : {LimitePointAction} AG : {ActivationGroupe} DF : {Defense} SVG : {Sauvegarde}</p>
      <p> PV : {incrementePv}</p>
      <button onClick={() => addPv(incrementePv)}> + </button>
      <button onClick={() => removePv(incrementePv)}> - </button>
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
  ActivationGroupe: PropTypes.number.isRequired,
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
