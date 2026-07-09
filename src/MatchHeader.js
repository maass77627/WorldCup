

function MatchHeader({matches}) {



    return (
        <header className="match-header">
         <h1>All Matches</h1>
         <p>{matches.length} Matches</p>
         <button className="add-match-button">+ Add Match</button>
        </header>
    )
}

export default MatchHeader