import PlayerSearch from "./PlayerSearch"
import { useState} from "react"
import AddPlayerForm from "./AddPlayerForm"
function PlayerHeader({setPlayerSearch}) {
const [formToggle, setFormToggle] = useState(false)




    return (
        <header className="player-header">
            <h1>All Players</h1>
            <PlayerSearch setPlayerSearch={setPlayerSearch} ></PlayerSearch>
             
           <button onClick={() => setFormToggle(!formToggle)} className="add-player-button">+ Add Player</button>
           {formToggle && <AddPlayerForm></AddPlayerForm>}
        </header>
    )
}

export default PlayerHeader