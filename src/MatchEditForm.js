
import {useState} from "react";


function MatchEditForm({}) {
    const [formData, setFormData] = useState({
    home_team: "",
    away_team: "",
    kickoff: "",
    stadium: "",
    round: "",
    home_score: "",
    away_score: ""
    })


function handleSubmit(e) {
    e.preventDefault()
    fetch("http://localhost:9292/matches", {
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
        <form onSubmit={(e) => handleSubmit(e)} className="match-edit-form">
            Edit Match 
          <label>Home Team</label>
            <input type="text" name="home_team" value={FormData.home_team}></input>
            <label>Away Team</label>
            <input type="text" name="away_team" value={FormData.away_team}></input>
            <label>KickOff</label>
            <input type="date" name="kickoff" value={FormData.kickoff}></input>
            <label>Stadium</label>
            <input type="text" name="stadium" value={FormData.stadium} ></input>
            <label>Round</label>
            <input type="text" name="round" value={FormData.round}></input>
            <label>Home Score</label>
            <input type="text" name="home_score" value={FormData.home_score}></input>
            <label>Away Score</label>
            <input type="text" name="away_score" value={FormData.away_score}></input>


        <button>Submit</button>
        </form>

    )
}

export default MatchEditForm