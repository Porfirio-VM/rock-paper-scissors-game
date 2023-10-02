
import { useState } from 'react'
import './App.css'
import Game from './components/game/Game'

function App() {
  
  const [bonusGame, setBonusGame] = useState(false) //useState to check if you have selected to play the bonus game

  const enableBonusGame = () =>{ //function to change the assigned value of useState bonusGame
    setBonusGame(!bonusGame)
  }

  return (
    <>
    <Game enableBonusGame={enableBonusGame} bonusGame={bonusGame}/>
    </>
  )
}

export default App
