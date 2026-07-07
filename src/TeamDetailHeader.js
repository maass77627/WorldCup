

function TeamDetailHeader({team}) {



    return (
        <header className="team-detail-header">
            <img className="detail-flag" src={`https://flagsapi.com/${team.flag_code}/flat/64.png`}></img>
            <div className="team-detail-text">
           
           <h1>{team.name}</h1>
           <p>Fifa Rank: {team.fifa_rank}</p>
           <p>Group: {team.group_name}</p>
           </div>
           <button className="edit-team-button">Edit Team</button>
        </header>
    )
}

export default TeamDetailHeader