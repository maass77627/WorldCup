import TeamSearch from "./TeamSearch";




function TeamHeader({teams, setTeamFilter, setToggle, toggle}) {



    return (
        <header className="teams-page-header">
            <div className="header-text">
            <h1>All Teams</h1>
            <p>{teams.length} Teams Competing</p>
            </div>
            <TeamSearch setTeamFilter={setTeamFilter}></TeamSearch>
            <button onClick={() => setToggle(!toggle)} className="add-team-button">+ Add Team</button>
        </header>


    )
}

export default TeamHeader