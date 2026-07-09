

function MatchSearch() {



    return (
        <input className="match-search-input" type="text" onChange={(e) => setMatchSearch(e.target.value)}></input>
    )
}

export default MatchSearch