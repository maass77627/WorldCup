import { useParams } from "react-router-dom"
import { useEffect } from "react"

function PlayerDetailPage({photo, players, getPlayerPhoto, setPhoto}) {
const {id} = useParams()

const player = players.find((play) => play.id === Number(id))
console.log(player)

useEffect(() => {
    setPhoto("")
    if (player) {
        const playername = player.name.split(" ").pop()
        getPlayerPhoto(playername, player.name)
    }
}, [player])


console.log(photo)
    return (
        <div className="player-detail-page">
           <h1>details</h1>
            <p>{player.name}</p> 
            {photo && <img src={photo} alt="player"></img>}
        </div>

    )
}

export default PlayerDetailPage