import Agents from "../Agents/Agents";
import Equipements from "../Equipements/Equipements";

function Home() {
  return (
    <div className="App">
      <h1>Les Variolleux de Geller</h1>
      <h2>Companion App</h2>
      <Agents />
      <Equipements />
    </div>
  );
}

export default Home;
