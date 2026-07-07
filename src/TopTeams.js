

function TopTeams({team}) {


    return (
        <div className="top-teams">
            
            <div className="top-team">
            <img src={`https://flagsapi.com/${team.flag_code}/flat/64.png`}></img>
          <h1>{team.name}</h1>
          </div>
          <div className="fifa-rank">
            
            <p>{team.fifa_rank}</p>

          </div>
        </div>
    )
}

export default TopTeams