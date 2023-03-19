import PropTypes from 'prop-types';
import './AgentsCaract.scss';

function AgentsCaract({
  name, Mouvement, LimitePointAction, ActivationGroupe, Defense, Sauvegarde, PV, Aptitudes, Traits, ArmeCT, ArmeCC, ArmeCC2, picture,
}) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <img src={`../src/${picture}`} alt="agent" />
      <p>M : {Mouvement} LPA : {LimitePointAction} AG : {ActivationGroupe} DF : {Defense} SVG : {Sauvegarde} PV : {PV}</p>
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
  PV: PropTypes.number.isRequired,
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
