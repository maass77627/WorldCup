
import {useState} from "react";

function TeamEditForm({team}) {

    const [formData, setFormData] = useState({
        name: team.name,
        group_name: team.group_name,
        flag_code: team.flag_code,
        fifa_rank: team.fifa_rank

    })

    function handleChange(e) {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
    }


function handleSubmit(e) {
    let id = team.id
    e.preventDefault()
    fetch(`http://localhost:9292/teams/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
        
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)

    })
}

    return (
     <form className="team-edit-form" onSubmit={(e) => handleSubmit(e)}>
        Edit Team
        <label>Name:</label>
        <input onChange={(e) => handleChange(e)} type="text" name="name" value={formData.name}></input>
        <label>Group Name:</label>
        <input onChange={(e) => handleChange(e)} type="text" name="group_name" value={formData.group_name}></input>
        <label>Flag Code:</label>
        <input onChange={(e) => handleChange(e)} type="text" name="flag_code" value={formData.flag_code}></input>
        <label>Fifa Rank:</label>
        <input onChange={(e) => handleChange(e)} type="text" name="fifa_rank" value={formData.fifa_rank}></input>
        <button type="submit">Submit</button>

     </form>


    )
}

export default TeamEditForm