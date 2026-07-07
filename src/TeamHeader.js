import TeamSearch from "./TeamSearch";




function TeamHeader({teams}) {



    return (
        <header className="teams-page-header">
            <div className="header-text">
            <h1>All Teams</h1>
            <p>{teams.length} Teams Competing</p>
            </div>
            <TeamSearch></TeamSearch>
            <button className="add-team-button">+ Add Team</button>
        </header>


    )
}

export default TeamHeader