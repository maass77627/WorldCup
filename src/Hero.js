import {Link} from "react-router-dom"


function Hero() {


return (
    <section className="hero">
        <div className="hero-text">
        <h1>Fifa World Cup 2026</h1>
        <h2>United States : Canada : Mexico</h2>
         <h3>June 11th - July 19th, 2026 </h3>
         <Link to="/teams">
         <button className="hero-button">Explore Teams</button>
         </Link>
         </div>
    </section>
)

    
}

export default Hero