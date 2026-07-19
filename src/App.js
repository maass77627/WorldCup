
import './App.css';
import Nav from "./Nav";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Hero from "./Hero";
import { useState, useEffect} from "react";
import TotalSection from './TotalSection';
import UpcomingMatches from './UpcomingMatches';
import TeamsPage from './TeamsPage';
import Home from "./Home";
import TeamDetailPage from "./TeamDetailPage";
import PlayersPage from './PlayersPage';
import MatchesPage from "./MatchesPage";
import PlayerDetailPage from './PlayerDetailPage';
// import { useParams } from 'react-router-dom/dist';
// import PlayerDetailPage from './PlayerDetailPage';

function App() {
const [teams, setTeams] = useState([])
const [matches, setMatches] = useState([])
const [players, setPlayers] = useState([])
const [stats, setStats] = useState([])
const [teamFilter, setTeamFilter] = useState(null)
const [playerSearch, setPlayerSearch] = useState("")
// const [photo, setPhoto] = useState("")
const apiKey = "057d82cda823962afbd449e2f3005f5e"

function addTeam(team) {
  console.log("adding team")
  setTeams((prev) => [...prev, team])
}

function addPlayer(player) {
  console.log("adding player")
  setPlayers((prev) => [...prev, player])
}

// function getPlayerPhoto(name, fullname) {
//   console.log(name)
//    const cleanName = name
//     .normalize("NFD")
//     .replace(/[\u0300-\u036f]/g, "");
//   // console.log(name)
//   // console.log(fullname)
//   fetch(`https://v3.football.api-sports.io/players/profiles?search=${cleanName}`, {
//   method: "GET",
//   headers: {
//     "x-apisports-key": apiKey
//   }

// })
// .then((res) => res.json())
// .then((json) => {
//   console.log(json.response)
//   const player = json.response.find((play) => play.player.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(fullname.toLowerCase()))
//   // let player = json.response.find((player) => player.player.name === fullname)
//   console.log(player)
//   if (player) {
//     console.log(player)
//     setPhoto(player.player.photo)
//   }
// })
// }

// }, [])
// fetch("https://v3.football.api-sports.io/players/profiles?search=messi", {
//   method: "GET",
//   headers: {
//     "x-apisports-key": apiKey
//   }

// })
// .then((res) => res.json())
// .then((json) => {
//   console.log(json)
// })

useEffect(() => {
fetch("http://localhost:9292/teams")
.then((res) => res.json())
.then((json) => {
  console.log(json)
  setTeams(json)
})
}, [])

useEffect(() => {
fetch("http://localhost:9292/players")
.then((res) => res.json())
.then((json) => {
  console.log(json)
  setPlayers(json)
})
}, [])

useEffect(() => {
fetch("http://localhost:9292/matches")
.then((res) => res.json())
.then((json) => {
  console.log(json)
  setMatches(json)
})
}, [])

useEffect(() => {
fetch("http://localhost:9292/stats")
.then((res) => res.json())
.then((json) => {
  console.log(json)
  setStats(json)
})
}, [])




  return (
    <div className="App">
      
      
      <BrowserRouter>
       <Nav></Nav>
     


      <Routes>
      <Route path="/" element={<Home stats={stats} teams={teams} matches={matches}></Home>}></Route>
      <Route path="/teams" element={<TeamsPage addTeam={addTeam} teamFilter={teamFilter} setTeamFilter={setTeamFilter} teams={teams}></TeamsPage>}></Route>
      <Route path="/team/:id" element={<TeamDetailPage players={players} addPlayer={addPlayer} teams={teams} ></TeamDetailPage>}></Route>
      <Route path="/players" element={<PlayersPage playerSearch={playerSearch} setPlayerSearch={setPlayerSearch} players={players}></PlayersPage>}></Route>
      <Route path="/matches" element={<MatchesPage setMatches={setMatches} matches={matches}></MatchesPage>}></Route>
       <Route path="/playerdetails/:id" element={<PlayerDetailPage players={players}></PlayerDetailPage>}></Route>

      </Routes>
      
      
      
      </BrowserRouter>
     
       
    </div>
  );
}


export default App;
