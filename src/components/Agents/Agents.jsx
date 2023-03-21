import Team from "../../data/Team";
import AgentsCaract from "./AgentsCaract";
import './AgentsCaract.scss';

function Agents() {
  const Agents = Team;
  return (
    <div className="listeAgent">
      <ul>
        {Agents.Agents.map((agent) => (
          <AgentsCaract key={agent.id} {...agent} />

        ))}
      </ul>
    </div>

  );
}

export default Agents;

