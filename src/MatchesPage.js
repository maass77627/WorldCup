import MatchHeader from "./MatchHeader"
import { FaEdit, FaTrash } from "react-icons/fa";
import AddMatchForm from "./AddMatchForm";
import {useState} from "react"
function MatchesPage({matches, setMatches}) {
    const [toggle, setToggle] = useState(false)
    const [editToggle, setEditToggle] = useState(false)

    function handleDelete(id) {
        
        fetch(`http://localhost:9292/matches/${id}`, {
            method: "DELETE"
        })

        const updatedMatches = matches.filter((mat) => mat.id !== id)
        setMatches(updatedMatches)
        
    }


    return (
        <div className="matches-page">
            <MatchHeader toggle={toggle} setToggle={setToggle} matches={matches}></MatchHeader>
                 <table className="match-table">
                    <thead>
                      <tr>
                        <td>Date</td>
                        <td>Home Team</td>
                       <td>Away Team</td> 
                       <td>Venue</td>
                       <td>Score</td>
                       <td>Status</td>
                      </tr>
                    </thead>
                    <tbody>
                        {
                            matches.map((match) => (
                                <tr>
                                    <td>{match.formatted_date}</td>
                                    <td>
                                        <div className="match-wrap">
                                        <img src={`https://flagsapi.com/${match.home_team.flag_code}/flat/64.png`}></img>
                                        {match.home_team.name}
                                        </div>
                                        </td>
                                    <td><div className="match-wrap"><img src={`https://flagsapi.com/${match.away_team.flag_code}/flat/64.png`}></img>{match.away_team.name}</div></td>
                                    <td>{match.stadium}</td>
                                    <td>{match.home_score} - {match.away_score}</td>
                                    <td><FaEdit onClick={() => setEditToggle(!editToggle)} ></FaEdit>< FaTrash   onClick={() => handleDelete(match.id)}/></td>
                                </tr>
                            ))
                        }

                    </tbody>
                 </table>
                 {toggle && <AddMatchForm></AddMatchForm>}
        </div>
    )
}

export default MatchesPage

