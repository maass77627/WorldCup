// import {Link} from "react-router-dom";
import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import { FaEdit, FaTrash } from "react-icons/fa";
import PlayerEditForm from "./PlayerEditForm";

function TeamDetailPlayers({team, addPlayer, setPlayers, players}) {
    console.log(team)
const [togglePlayerForm, setTogglePlayerForm] = useState(false)
const [editToggle, setEditToggle] = useState(false)
const [playerId, setPlayerId] = useState(null)

function handleEdit(id) {
    setPlayerId(id)
    setEditToggle(!editToggle)

}

function handleDelete(id) {
    fetch(`http://localhost:9292/players/${id}`, {
        method: "DELETE",

    })
    const updatedPlayers = players.filter((play) => play.id !== id)
    setPlayers(updatedPlayers)
}

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
                     <td><FaEdit onClick={() => handleEdit(player.id)}></FaEdit><FaTrash onClick={() => handleDelete(player.id)}/></td>
                </tr>
                ))}
               

            </tbody>
        </table>

             {editToggle && (<PlayerEditForm playerId={playerId} setPlayers={setPlayers}></PlayerEditForm>)}
        {togglePlayerForm && (<AddPlayerForm setTogglePlayerForm={setTogglePlayerForm} addPlayer={addPlayer} team={team}></AddPlayerForm>)}
        </div>
    )
}

export default TeamDetailPlayers