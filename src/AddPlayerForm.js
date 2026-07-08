import { useState } from "react";

function AddPlayerForm({team, addPlayer, setTogglePlayerForm}) {

    const [formData, setFormData] = useState({
        name: "",
        position: "",
        age: "",
        number: ""
    })

    function handleChange(e) {
        console.log(e)
        // let symbol = e.target.name
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))

    }

function handleSubmit(e) {
    e.preventDefault()
    
    console.log("submitting form")
    fetch("http://localhost:9292/players", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({...formData, team_id: team.id})
    })
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        addPlayer(json)

    })
    setTogglePlayerForm(false)
}


    return (
        <form className="player-form" onSubmit={(e) => handleSubmit(e)}>
            <label>Name:</label>
            <input onChange={(e) => handleChange(e)} name="name"  value={formData.name} type="text"/>
            <label>Position:</label>
            <input onChange={(e) => handleChange(e)} name="position" value={formData.position} type="text"/>
            <label>Age:</label>
            <input onChange={(e) => handleChange(e)} name="age" value={formData.age} type="text"/>
            <label>Number:</label>
            <input onChange={(e) => handleChange(e)} name="number" value={formData.number} type="text"/>
            <input  value="submit" type="submit"></input>
        </form>

    )
}

export default AddPlayerForm