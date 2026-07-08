
import { useState } from "react";



function AddTeamForm({addTeam, setToggle}) {
const [formData, setFormData] = useState({
    name: "",
    group_name: "",
    flag_code: "",
    fifa_rank: ""

})

function handleChange(e) {
    setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))
}

function handleSubmit(e) {
    e.preventDefault()
    console.log("submitting form")
    fetch("http://localhost:9292/teams", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        addTeam(json)
        
    })
    setToggle(false)
}


    return (
        <form className="add-team-form" onSubmit={(e) => handleSubmit(e)}>
            <label>Name:</label>
            <input onChange={(e) => handleChange(e)} name="name" type="text" value={formData.name}></input>
             <label>Group Name:</label>
            <input onChange={(e) => handleChange(e)} name = "group_name" type="text" value={formData.group_name}></input>
            <label>Flag Code:</label>
            <input onChange={(e) => handleChange(e)} name="flag_code" type="text" value={formData.flag_code}></input>
            <label>Fifa Rank:</label>
            <input onChange={(e) => handleChange(e)} name="fifa_rank" type="text"  value={formData.fifa_rank}></input>
           <button type="submit">Add Team</button>
        </form>
    )
}

export default AddTeamForm