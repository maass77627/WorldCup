import Nav from "./Nav";
import Hero from "./Hero";
import TotalSection from "./TotalSection";
import UpcomingMatches from "./UpcomingMatches";


function Home({teams, matches, stats}) {





    return (
        <>
        {/* <Nav></Nav> */}
      <Hero></Hero>
      <TotalSection stats={stats} teams={teams} matches={matches}></TotalSection>
      <UpcomingMatches matches={matches} teams={teams}></UpcomingMatches>
      </>
    )
}

export default Home