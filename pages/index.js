import React, { useEffect, useState } from "react";
import PlayerList from "../components/PlayerList";
import Loading from "../components/Loading";

export default function Home() {
  const [players_data, setplayersData] = useState("");
  const [teams_data, setteamsData] = useState("");

  useEffect(() => {
    fetch("/api/players")
      .then((res) => res.json())
      .then((data) => {
        setplayersData(data);
      });
    fetch("/api/teams")
      .then((res) => res.json())
      .then((data) => {
        setteamsData(data);
      });
  }, []);

  if (!players_data || !teams_data) {
    return <Loading />;
  } else {
    const teams = [];
    for (let i = 0; i < teams_data.length; i++) {
      teams[teams_data[i].ta] = teams_data[i];
    }

    return (
      <div className="m-5 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {players_data.map((person, index) => {
          let playerTeam = teams[person.ta];
          return (
            <PlayerList
              key={index}
              headImage={person.headshot}
              jersey={person.num}
              position={person.pos}
              firstName={person.fn}
              lastName={person.ln}
              teamColor={playerTeam.color}
              logo={playerTeam.logo}
              ppg={person.pts}
              rpg={person.reb}
              apg={person.ast}
              stl={person.stl}
            />
          );
        })}
      </div>
    );
  }
}
