import PlayerHeader from "./PlayerHeader"

function PlayersPage({players, setPlayerSearch, playerSearch}) {

const filteredPlayers = playerSearch ? players.filter((player) => player.name.toLowerCase().includes(playerSearch.toLowerCase())) : players

    return (
        <div className="players-page">
          <PlayerHeader setPlayerSearch={setPlayerSearch}></PlayerHeader>
           <table className="player-table">
            <thead>
               <tr>
                <td>age</td>
                <td>name</td>
                <td>team</td>
                <td>position</td>
                <td>jersey #</td>
               </tr>
            </thead>
            <tbody>
                {
                    filteredPlayers.slice(0,10).map((play) => (
                        <tr key={play.id}>
                <td>{play.age}</td>
                <td>{play.name}</td>
                <td>{play.team.name}</td>
                <td>{play.position}</td>
                <td>{play.number}</td>
               </tr>
                    ))
                }

            </tbody>
           </table>
        </div>
    )
}

export default PlayersPage