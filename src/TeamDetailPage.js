import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TeamDetailHeader from "./TeamDetailHeader"
import TeamDetailPlayers from "./TeamDetailPlayers";
import TeamDetailMatches from "./TeamDetailMatches";

function TeamDetailPage({teams, addPlayer}) {
    const [team, setTeam] = useState(null)
    const { id } = useParams()

    useEffect(() => {
  fetch(`http://localhost:9292/teams/${Number(id)}`)
    .then((res) => res.json())
    .then((data) => setTeam(data));
}, [id])


if (!team) {
  return <h2>Loading...</h2>;
}


return (
    <div className="team-detail-page">

        <TeamDetailHeader team={team}></TeamDetailHeader>
        <TeamDetailPlayers addPlayer={addPlayer} team={team}></TeamDetailPlayers>
         <TeamDetailMatches teams={teams} team={team}></TeamDetailMatches>
    </div>

)


}

export default TeamDetailPage



