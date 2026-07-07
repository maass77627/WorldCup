import { FaPeopleGroup } from "react-icons/fa6";
import { PiSoccerBallFill } from "react-icons/pi";
import { FaRegCalendarAlt } from "react-icons/fa";


function TotalSection({teams, matches, stats}) {
console.log(stats)


    return (
        <section className="total-section">
            <div className="total-div">
                <FaPeopleGroup className="total-icon" />
                <div className="total-text">
                <h1>{teams.length}</h1>
                <p>Teams</p>
                </div>
            </div>

            <div className="total-div">
                <PiSoccerBallFill className="total-icon" />
                <div className="total-text">
                <h1>{matches.length}</h1>
                <p>Matches</p>
                </div>
            </div>

            <div className="total-div">
                <FaRegCalendarAlt className="total-icon" />
               <div className="total-text">
                <h1>{stats.days_left}</h1>
                <p>Days of Football</p>
                </div>
            </div>

           

        </section>


    )
}

export default TotalSection