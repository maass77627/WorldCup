
import {useState} from "react";


function PlayerEditForm({setPlayers, playerId}) {
    const [formData, setFormData] = useState({
        name: "",
        position: "",
        age: "",
        number: "",
        photo_url: ""
    })

    function handleChange(e) {
        setFormData((prev) => ({...prev, [e.target.name]: e.target.value}))

    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9292/players/${playerId}`, {
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




    return(

        <form className="player-edit-form" onSubmit={() => handleSubmit()}>
            <h3>Edit Player</h3>
             <label>Name:</label>
            <input onChange={(e) => handleChange(e)} name="name"  value={formData.name} type="text"/>
            <label>Position:</label>
            <input onChange={(e) => handleChange(e)} name="position" value={formData.position} type="text"/>
            <label>Age:</label>
            <input onChange={(e) => handleChange(e)} name="age" value={formData.age} type="text"/>
            <label>Number:</label>
            <input onChange={(e) => handleChange(e)} name="number" value={formData.number} type="text"/>
            <label>photo_url</label>
            <input onChange={(e) => handleChange(e)} name="photo_url" value={formData.photo_url} type="text"/>
            <input  value="submit" type="submit"></input>
        </form>

    )
}

export default PlayerEditForm