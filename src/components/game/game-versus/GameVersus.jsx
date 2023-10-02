import GameItem from "../game-item/GameItem";
import { hands, bonusHands, rules, bonusRules} from "../../../constants";
import './gameversus.css';
import { useState, useEffect} from "react";

function GameVersus({ selected, scoreCount, playAgain, bonusGame }) {
  
 const [results, setResults] = useState(null);
 const [randomHand, setRandomHand] = useState(null)
 const [showResults, setShowResults] = useState(null) 

 const gameSelected = bonusGame? bonusHands : hands
 const rulesSelected = bonusGame? bonusRules : rules

  useEffect(()=>{
    const timeOutId = setTimeout(()=>{ //delay of hand selection by the bot
        const randomIndex = Math.floor(Math.random() * gameSelected.length);
        const randomHandData = gameSelected[randomIndex];
        setRandomHand(randomHandData)
    },1000)

    return () =>{  clearTimeout(timeOutId) }
  },[])

  useEffect(()=>{
    const userSelect = gameSelected.find(hand => hand.id === selected)
    const userHand = userSelect.hand
    const resultsDelay = setTimeout(()=>{
        if(randomHand){
            if(userHand === randomHand.hand){
             setResults('DRAW GAME!')
            }else if(rulesSelected[userHand].beats.includes(randomHand.hand)){ //check the imported object with the rules stored in constants.js, check it
             setResults('YOU WIN!')  
             
           }else{
            setResults('YOU LOSE!')
           }
           setShowResults(true);
        }    
    return () =>{clearTimeout(resultsDelay)}    
    },500) 
  },[randomHand])

  useEffect(() => {
    // Calls scoreCount when the results are changed
    if (results !== null) {
      scoreCount(results);
    }
  }, [results]);

  return (
    <div className={`versus-container ${showResults && 'space'}`}>
      <div className="your-sel">
        <h3>YOU PICKED</h3>
        <GameItem selected={selected} bonusGame={bonusGame}/>
      </div>

      {results !== null && (
        <div className={`results ${showResults && 'results-growth'}`}>
          <h1>{results}</h1>
          <button className="play" onClick={playAgain}>Play Again</button>
        </div>
      )}

      <div className="bot-sel">
        <h3>THE HOUSE PICKED</h3>
                {randomHand ? <GameItem selected={randomHand.id} bonusGame={bonusGame}/> : <div className="wait"></div>}
      </div>
    </div>
  );
}

export default GameVersus;
