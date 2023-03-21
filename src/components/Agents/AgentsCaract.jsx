import { useState } from "react";
import PropTypes from 'prop-types';
import './AgentsCaract.scss';

function AgentsCaract({
  name, Mouvement, LimitePointAction, Activationgroupe, Defense, Sauvegarde, Aptitudes, Traits, ArmeCTName, ArmeCTA, ArmeCTTC, ArmeCTD, ArmeCTRS, ArmeCCName, ArmeCCA, ArmeCCTC, ArmeCCD, ArmeCCRS, ArmeCC2Name, ArmeCC2A, ArmeCC2TC, ArmeCC2D, ArmeCC2RS, picture, PV,
}) {

  const [incrementePv, setIncrementePv] = useState(PV);
  const mouvement = incrementePv < PV / 2 ? Mouvement - 1 : Mouvement;
  const armeCTTC = incrementePv < PV / 2 ? ArmeCTTC + 1 : ArmeCTTC;
  const armeCCTC = incrementePv < PV / 2 ? ArmeCCTC + 1 : ArmeCCTC;
  const armeCC2TC = incrementePv < PV / 2 ? ArmeCC2TC + 1 : ArmeCC2TC;
  // fonctions d'incrémentation / décrémentation
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

      {/* entete de card */}

      <div className={incrementePv === 0 ? "header-dead" : "header"}>
        <h2>{name}</h2>
        <img src={`../src/${picture}`} alt="agent" />
      </div>

      {/* caracteristique d'agent */}

      <div className={incrementePv === 0 ? "dead" : (Math.max(incrementePv, 1) < (PV / 2) && PV > 1) ? "blessé" : "caract"}>
        <p title="mouvement">M<span>{mouvement}</span></p>
        <p title="limite point d'action">LPA<span>{LimitePointAction}</span></p>
        <p title="activation de groupe">AG<span>{Activationgroupe}</span></p>
        <p title="défense">DF<span>{Defense}</span></p>
        <p title="sauvegarde">SVG<span>{Sauvegarde}</span></p>
        <p title="points de vie">PV<span>{incrementePv}</span></p>
      </div>

      {/* bouton d'incrémentation / décrémentation */}

      <div className="buttonCounter">
        <button title="augmente pv" onClick={() => addPv(incrementePv)}> + </button>
        <button title="réduire pv" onClick={() => removePv(incrementePv)}> - </button>
      </div>

      {/* caracteristique arme de tir */}

      <div className="armeTirCaract">
        <p title="arme de tir"> {ArmeCTName}</p>
        <p>A<span>{ArmeCTA}</span></p>
        <p>T/C<span>{armeCTTC}+</span></p>
        <p>D<span>{ArmeCTD}</span></p>
        <p>RS<span>{ArmeCTRS}</span></p>
      </div>

      {/* caracteristique arme de corps a corp 1 */}

      <div className="armeCcCaract">
        <p title="arme de corps a corps">{ArmeCCName}</p>
        <p>A<span>{ArmeCCA}</span></p>
        <p>T/C<span>{armeCCTC}+</span></p>
        <p>D<span>{ArmeCCD}</span></p>
        <p>RS<span>{ArmeCCRS}</span></p>
      </div>

      {/* caracteristique arme de corps a corp 2 */}

      <div className="armeCc2Caract">
        <p title="arme de corps a corps">{ArmeCC2Name}</p>
        <p>A<span>{ArmeCC2A}</span></p>
        <p>T/C<span>{armeCC2TC}+</span></p>
        <p>D<span>{ArmeCC2D}</span></p>
        <p>RS<span>{ArmeCC2RS}</span></p>
      </div>

      <p>Aptitudes</p>
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
