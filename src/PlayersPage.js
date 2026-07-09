import PlayerHeader from "./PlayerHeader"

function PlayersPage({players, setPlayerSearch}) {



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
                    players.map((play) => (
                        <tr>
                <td>{play.age}</td>
                <td>{play.name}</td>
                <td>{play.team}</td>
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