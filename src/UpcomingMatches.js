import TopTeams from "./TopTeams"
function UpcomingMatches({matches, teams}) {



    return (
        
        
        
        <section className="main">
            <div className="matches-section">
                <h2 className="up-head">Upcoming Matches</h2>
            
            <div className="upcoming-matches">
                 
                
            {matches.slice(0,3).map((match) => ( 
              
              <div key={match.id} className="upcoming-card">
             <div className="up-time">
                <strong>
                 <p>{match.formatted_date}</p> 
                 <p>{match.formatted_time}</p> </strong>
             </div>
             <div className="up-teams">
                
                <img src={`https://flagsapi.com/${match.away_team.flag_code}/flat/64.png`}></img>
                <p>{match.away_team.name}</p> 
                <strong><p>VS</p> </strong>
                  <img src={`https://flagsapi.com/${match.home_team.flag_code}/flat/64.png`}></img>
                  <p>{match.home_team.name}</p>
                 

             </div>
             <div className="up-location">
               <strong><p>{match.stadium}</p></strong> 


             </div>
             </div>
             
             
))}
</div>
</div>
             

             

            <div className="top-teams-wrap">
                 <h2 className="top-team-heading">Top Teams</h2>
                   <div className="top-team-titles"> <p>Team</p> <p>Fifa Rank</p> </div>
            {teams.slice(0,5).map((team) => <TopTeams team={team}></TopTeams>)}

            </div>

        </section>
        

    )
}

export default UpcomingMatches