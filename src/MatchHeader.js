

function MatchHeader({matches}) {



    return (
        <header className="match-header">
            <div className="match-text">
         <h1>All Matches</h1>
         <p>{matches.length} Matches</p>
         </div>
         <button className="add-match-button">+ Add Match</button>
        </header>
    )
}

export default MatchHeader