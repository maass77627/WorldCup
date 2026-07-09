


function PlayerSearch({setPlayerSearch}) {



    return (
        <input placeholder="search player name..." onChange={(e) => setPlayerSearch(e.target.value)} className="input" type="text"></input>
    )
}

export default PlayerSearch