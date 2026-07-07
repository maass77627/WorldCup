import { useState } from "react";


function TeamSearch() {
const [search, setSearch] = useState("")
    // function handleChange()



    return (
        <input className="input" onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search teams.."></input>
    )
}

export default TeamSearch