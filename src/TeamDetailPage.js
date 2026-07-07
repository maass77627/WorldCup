import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import TeamDetailHeader from "./TeamDetailHeader"
import TeamDetailPlayers from "./TeamDetailPlayers";

function TeamDetailPage() {
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
        <TeamDetailPlayers team={team}></TeamDetailPlayers>

    </div>

)


}

export default TeamDetailPage



