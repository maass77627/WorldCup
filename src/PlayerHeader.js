import PlayerSearch from "./PlayerSearch"

function PlayerHeader({setPlayerSearch}) {





    return (
        <header className="player-header">
            <h1>All Players</h1>
            <PlayerSearch setPlayerSearch={setPlayerSearch} ></PlayerSearch>
             <button className="add-player-button">+ Add Player</button>
        </header>
    )
}

export default PlayerHeader