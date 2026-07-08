// import {Link} from "react-router-dom";
import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";

function TeamDetailPlayers({team}) {
    console.log(team)
const [togglePlayerForm, setTogglePlayerForm] = useState(false)





    return (


        <div className="team-detail-players">
        <header className="team-detail-players-head">
            <h1>Players</h1>
            
            <button onClick={() => setTogglePlayerForm(!togglePlayerForm)} className="add-player-button">+ Add Player</button>
            
        </header>
        <table className="players-table">
            
            <thead>
                <tr>
                <td>Age</td>
                <td>Name</td>
                <td>Position</td>
                <td>Jersey Number</td>
                <td>Actions</td>
                </tr>
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
               

            </tbody>
        </table>


        {togglePlayerForm && (<AddPlayerForm team={team}></AddPlayerForm>)}
        </div>
    )
}

export default TeamDetailPlayers