
import confetti from 'canvas-confetti'
import Score from './game-score/Score'
import GameBoard from './game-board/GameBoard'
import ModalRules from './rules/ModalRules'
import { useState } from 'react'
import './game.css'

function Game({enableBonusGame, bonusGame}){

  const [score, setScore] = useState(0) //Initial value of score
  const [modal, setModal] = useState(false) //to check if the rules are selected
  const [onVersus, setOnVersus] = useState(false)

  const scoreCount = (results) =>{ //function to check if the user win
    if(results==='YOU WIN!'){
      confetti()
      setScore(prevScore => prevScore + 1);
    }else if(results === 'YOU LOSE!'){
      setScore(prevScore => (prevScore > 0 ? prevScore - 1 : 0));
    }else{
      return
    }
  }

  const showModal = () =>{
    setModal(!modal)
  }

  const handleOnVersus = () =>{
    setOnVersus(!onVersus)
  }


  return (
    <>
     {modal && <ModalRules showModal={showModal} bonusGame={bonusGame}/>}
     <div className="game-wrapper">
      <main>
        <Score score={score} bonusGame={bonusGame}/>
        <GameBoard scoreCount={scoreCount} bonusGame={bonusGame} handleOnVersus={handleOnVersus}/>
      </main>
      <footer>
        {
          !onVersus &&
          <button className='rules' onClick={enableBonusGame}>{bonusGame? 'NORMAL' : 'BONUS'}</button>
        }
        <button className='rules' onClick={showModal}>RULES</button>
      </footer>
     </div>
    </>
  )

}

export default Game