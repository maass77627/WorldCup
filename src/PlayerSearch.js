


function PlayerSearch({setPlayerSearch}) {



    return (
        <input onChange={(e) => setPlayerSearch(e.target.value)} className="input" type="text"></input>
    )
}

export default PlayerSearch