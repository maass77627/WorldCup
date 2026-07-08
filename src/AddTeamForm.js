
import { useState } from "react";



function AddTeamForm() {
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
}


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <input onChange={(e) => handleChange(e)} name="name" type="text" value={formData.name}></input>
            <input onChange={(e) => handleChange(e)} name = "group_name" type="text" value={formData.group_name}></input>
            <input onChange={(e) => handleChange(e)} name="flag_code" type="text" value={formData.flag_code}></input>
            <input onChange={(e) => handleChange(e)} name="fifa_rank" type="text"  value={formData.fifa_rank}></input>
           <button type="submit">Add Team</button>
        </form>
    )
}

export default AddTeamForm