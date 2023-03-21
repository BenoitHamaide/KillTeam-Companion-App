import Team from "../../data/Team";
import AgentsCaract from "./AgentsCaract";

function Agents() {
  const Agents = Team;
  return (
    <div>
      <ul>
        {Agents.Agents.map((agent) => (
          <AgentsCaract key={agent.id} {...agent} />

        ))}
      </ul>
    </div>

  );
}

export default Agents;

