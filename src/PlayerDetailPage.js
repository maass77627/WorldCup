import { useParams } from "react-router-dom"
import { useEffect } from "react"
import PlayerDetailProfile from "./PlayerDetailProfile"
import PlayerDetailRecentMatches from "./PlayerDetailRecentMatches"
import PlayerDetailStatistics from "./PlayerDetailStatistics"

function PlayerDetailPage({players}) {
const {id} = useParams()

const player = players.find((play) => play.id === Number(id))
console.log(player)


const imageSrc = player.photo_url
  ? (player.photo_url.startsWith("/") ? player.photo_url : `/${player.photo_url}`) : "/default-player.png";

console.log(player)



    return (
        <div className="player-detail-page">
          
            <PlayerDetailProfile imageSrc={imageSrc}  player={player}></PlayerDetailProfile>
            <PlayerDetailStatistics></PlayerDetailStatistics>
            <PlayerDetailRecentMatches></PlayerDetailRecentMatches>
        
        </div>

    )
}

export default PlayerDetailPage

{/* <p>{player.team.name}</p> */}