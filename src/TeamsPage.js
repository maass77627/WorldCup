import TeamHeader from "./TeamHeader"
import {Link} from "react-router-dom"

function TeamsPage({teams}) {



    return (
        
        <div className="teams-page">
            <TeamHeader teams={teams}></TeamHeader>
          <main className="team-main">
            
            {teams.map((team) => 
            <Link key={team.id} to={`/team/${team.id}`}>
            <div key={team.id} className="team-card">
                <img src={`https://flagsapi.com/${team.flag_code}/flat/64.png`}></img>
                <h1>{team.name}</h1>
                <p>Fifa Rank: {team.fifa_rank}</p>
                <p>Group: {team.group_name}</p>

            </div>
            </Link>
        )}
          </main>
        </div>
        
    )
}

export default TeamsPage