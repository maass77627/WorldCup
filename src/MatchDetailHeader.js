

function MatchDetailHeader({match}) {
console.log(match)



    return (
        <header className="match-detail-header">
            <div className="match-home-team">
            <h1>{match.home_team.name}</h1>
          <img src={`https://flagsapi.com/${match.home_team.flag_code}/flat/64.png`}></img>
          </div>

          <div className="match-details">
             <div className="match-score">
                <h1>{match.home_score}</h1> -  <h1>{match.away_score}</h1>
             </div>
             <div className="match-time">
             <p>{match.formatted_date}</p> - <p>{match.formatted_time}</p>
             </div>
              <p>{match.stadium}</p>
          </div>


           <div className="match-away-team">
            <h1>{match.away_team.name}</h1>
          <img src={`https://flagsapi.com/${match.away_team.flag_code}/flat/64.png`}></img>
          </div>
        </header>
    )
}

export default MatchDetailHeader