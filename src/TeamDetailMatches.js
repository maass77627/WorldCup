


function TeamDetailMatches({team, teams}) {
console.log(team)



    return (
        <div className="team-detail-matches">

            <header className="team-detail-matches-head">
            <h1>Matches</h1>
            <button className="add-match-button">+ Add Match</button>
        </header>

        <table className="matches-table">
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Opponent</td>
                    <td>Venue</td>
                    <td>Home/Away</td>
                    <td>Score</td> 
                    <td>Result</td>
                </tr>
            </thead>
            <tbody>
                {team.matches.map((match) => {
                    let opponent
                    let homeaway
                   
                    if (match.home_team_id === team.id) {
                        opponent = teams.find((tem) => tem.id === match.away_team_id)
                        homeaway = "Home"
                    } else {
                        opponent = teams.find((tem) => tem.id === match.home_team_id)
                        homeaway = "Away"
                    }

                    let result
                    if (homeaway === "Home" && match.home_score > match.away_score || homeaway === "Away" && match.away_score > match.home_score) {
                        result = "Win"
                    } else {
                        result = "Loss"
                    }

                    
                    return (
                    // console.log(match)
                    <tr key={match.id}>
                        <td>{new Date(match.kickoff).toLocaleDateString()}</td>
                        <td>{opponent.name}</td> 
                        <td>{match.stadium}</td>
                        <td>{homeaway}</td> 
                        <td>{match.home_score} - {match.away_score}</td> 
                        <td>{result}</td>
                    </tr>
                )})}
            </tbody>
        </table>

        </div>


    )
}

export default TeamDetailMatches