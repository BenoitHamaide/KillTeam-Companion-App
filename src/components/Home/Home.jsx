import { useState } from "react";
import Agents from "../Agents/Agents";
import AgentsHierotek from "../Agents/AgentsHierotek";

function Home() {
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  function handleCheckBoxChange1() {
    setIsChecked1(!isChecked1);
  }

  function handleCheckBoxChange2() {
    setIsChecked2(!isChecked2);
  }

  return (
    <div className="App">
      <h2>Companion App</h2>
      <div>
        <label>
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={handleCheckBoxChange1}
          />
          Varioleux
        </label>
        <label>
          <input
            type="checkbox"
            checked={isChecked2}
            onChange={handleCheckBoxChange2}
          />
          Cercle Hierotek
        </label>
        {isChecked1 && <Agents />}
      </div>
      <div>
        {isChecked2 && <AgentsHierotek />}
      </div>
    </div>
  );
}

export default Home;
