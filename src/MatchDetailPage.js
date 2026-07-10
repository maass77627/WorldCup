
import MatchDetailHeader from "./MatchDetailHeader"
import { useParams} from "react-router-dom"

function MatchDetailPage({matches}) {
const {id} = useParams()
    const match = matches.find((mat) => mat.id === Number(id))
   console.log(match)

    return (
        <div className="match-detail-page">
            <MatchDetailHeader match={match}></MatchDetailHeader>
          
        </div>
    )
}

export default MatchDetailPage