import { useState } from 'react';
import Team from "../../data/Team";

function AgentEquipementDardezieux() {
  const equipements = Team.Equipements;
  const Pv = equipements[1].PV;
  const [incrementePv, setIncrementePv] = useState(equipements[1].PV);

  const mouvement = incrementePv < Pv / 2 ? equipements[1].Mouvement - 1 : equipements[1].Mouvement;
  const armeCTTC = incrementePv < Pv / 2 ? equipements[1].ArmeCTTC + 1 : equipements[1].ArmeCTTC;
  const armeCCTC = incrementePv < Pv / 2 ? equipements[1].ArmeCCTC + 1 : equipements[1].ArmeCCTC;
  const [isActive, setIsActive] = useState(true);

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

  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <div>


      <div className="card">

        {/* entete de card */}

        <div className={incrementePv === 0 ? "header-dead" : "header"}>
          <h2>{equipements[1].name}</h2>
          <img src={`../src/${equipements[1].picture}`} alt="agent" />
        </div>
        <div className={isActive ? "actif" : "inactif"}>
          <button type="text" onClick={handleClick}>
            {isActive ? "Actif" : "Inactif"}
          </button>
        </div>
        {/* caracteristique d'agent */}

        <div className={incrementePv === 0 ? "dead" : (Math.max(incrementePv, 1) < (Pv / 2) && Pv > 1) ? "blessé" : "caract"}>

          <p title="mouvement">M<span>{mouvement}</span></p>
          <p title="limite point d'action">LPA<span>{equipements[1].LimitePointAction}</span></p>
          <p title="activation de groupe">AG<span>{equipements[1].Activationgroupe}</span></p>
          <p title="défense">DF<span>{equipements[1].Defense}</span></p>
          <p title="sauvegarde">SVG<span>{equipements[1].Sauvegarde}</span></p>
          <p title="points de vie">PV<span>{incrementePv}</span></p>
        </div>

        {/* bouton d'incrémentation / décrémentation */}

        <div className="buttonCounter">
          <button title="augmente pv" onClick={addPv}> + </button>
          <button title="réduire pv" onClick={removePv}> - </button>
        </div>

        {/* caracteristique arme de tir */}

        <div className="armeTirCaract">
          <p title="arme de tir"> {equipements[1].ArmeCTName}</p>
          <p>A<span>{equipements[1].ArmeCTA}</span></p>
          <p>T/C<span>{armeCTTC}+</span></p>
          <p>D<span>{equipements[1].ArmeCTD}</span></p>
          <p>RS<span>{equipements[1].ArmeRS}</span></p>
        </div>

        {/* caracteristique arme de corps a corp 1 */}

        <div className="armeCcCaract">
          <p title="arme de corps a corps">{equipements[1].ArmeCCName}</p>
          <p>A<span>{equipements[1].ArmeCCA}</span></p>
          <p>T/C<span>{armeCCTC}+</span></p>
          <p>D<span>{equipements[1].ArmeCCD}</span></p>
          <p>RS<span>{equipements[1].ArmeCCRS}</span></p>
        </div>

        <p>Aptitudes</p>
        <p>{equipements[1].Aptitudes}</p>
        <div className="keyword">
          <p>{equipements[1].Traits}</p>
        </div>

      </div>
    </div>
  );
}
export default AgentEquipementDardezieux;
