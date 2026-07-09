
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
// import { useParams } from 'react-router-dom/dist';

function App() {
const [teams, setTeams] = useState([])
const [matches, setMatches] = useState([])
const [players, setPlayers] = useState([])
const [stats, setStats] = useState([])
const [teamFilter, setTeamFilter] = useState(null)
const [playerSearch, setPlayerSearch] = useState([])


function addTeam(team) {
  console.log("adding team")
  setTeams((prev) => [...prev, team])
}

function addPlayer(player) {
  console.log("adding player")
  setPlayers((prev) => [...prev, player])
}

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
      <Route path="/team/:id" element={<TeamDetailPage addPlayer={addPlayer} teams={teams} ></TeamDetailPage>}></Route>
      <Route path="/players" element={<PlayersPage setPlayerSearch={setPlayerSearch} players={players}></PlayersPage>}></Route>
      <Route path="/matches" element={<MatchesPage matches={matches}></MatchesPage>}></Route>


      </Routes>
      
      
      
      </BrowserRouter>
     
       
    </div>
  );
}


export default App;
