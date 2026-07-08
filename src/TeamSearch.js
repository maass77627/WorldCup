import { useState } from "react";


function TeamSearch({setTeamFilter}) {
// const [teamFilter, setTeamFilter] = useState("")
    // function handleChange()



    return (
        <input className="input" onChange={(e) => setTeamFilter(e.target.value)} type="text" placeholder="Search teams.."></input>
    )
}

export default TeamSearch