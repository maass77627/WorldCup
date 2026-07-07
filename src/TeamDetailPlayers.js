

function TeamDetailPlayers({team}) {
    console.log(team)






    return (


        <div className="team-detail-players">
        <header className="team-detail-players-head">
            <h1>Players</h1>
            <button className="add-player-button">+ Add Player</button>
        </header>
        <table className="players-table">
            
            <thead>
                
                <td>Age</td>
                <td>Name</td>
                <td>Position</td>
                <td>Jersey Number</td>
                <td>Actions</td>
                
            </thead>
            
            <tbody>
                {team.players.map((player) => (
                <tr key={player.id}>
                    <td>{player.age}</td>
                    <td>{player.name}</td>
                     <td>{player.position}</td>
                     <td>{player.number}</td>

                </tr>
                ))}
                {/* <tr>

                </tr> */}

            </tbody>
        </table>
        </div>
    )
}

export default TeamDetailPlayers