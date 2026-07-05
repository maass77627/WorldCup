
import './App.css';
import Nav from "./Nav";
import {Route, Routes, BrowserRouter} from "react-router-dom"
import Hero from "./Hero";
import { useState, useEffect} from "react";
import TotalSection from './TotalSection';
import UpcomingMatches from './UpcomingMatches';

function App() {
const [teams, setTeams] = useState([])
const [matches, setMatches] = useState([])
const [players, setPlayers] = useState([])

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




  return (
    <div className="App">
      
      
      <BrowserRouter>
      <Nav></Nav>
      <Hero></Hero>
      <TotalSection teams={teams} matches={matches}></TotalSection>
      <UpcomingMatches></UpcomingMatches>
      <Routes>
      <Route></Route>



      </Routes>
      
      
      
      </BrowserRouter>
     
       
    </div>
  );
}


export default App;
