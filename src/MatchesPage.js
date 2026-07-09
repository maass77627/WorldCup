import MatchHeader from "./MatchHeader"

function MatchesPage({matches}) {



    return (
        <div className="matches-page">
            <MatchHeader matches={matches}></MatchHeader>
                 <table className="match-table">
                    <thead>
                      <tr>
                        <td>Date</td>
                        <td>Home Team</td>
                       <td>Away Team</td> 
                       <td>Venue</td>
                       <td>Score</td>
                       <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            matches.map((match) => (
                                <tr>
                                    <td>{match.formatted_date}</td>
                                    <td>
                                        <div className="match-wrap">
                                        <img src={`https://flagsapi.com/${match.home_team.flag_code}/flat/64.png`}></img>
                                        {match.home_team.name}
                                        </div>
                                        </td>
                                    <td><div className="match-wrap"><img src={`https://flagsapi.com/${match.away_team.flag_code}/flat/64.png`}></img>{match.away_team.name}</div></td>
                                    <td>{match.stadium}</td>
                                    <td>{match.home_score} - {match.away_score}</td>
                                    <td>{}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                 </table>
        </div>
    )
}

export default MatchesPage

