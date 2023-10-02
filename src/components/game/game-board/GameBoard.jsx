import { useEffect, useState } from "react"
import GameItem from "../game-item/GameItem"
import './gameboard.css'
import GameVersus from "../game-versus/GameVersus"

function GameBoard({scoreCount, bonusGame, handleOnVersus}){

    const [selected, setSelected] = useState()

    const selectItem = (id) =>{
        setSelected(id)
    }

    const playAgain = () =>{
        selectItem(null)
        handleOnVersus();
    }

    useEffect(()=>{
        if(selected){
           handleOnVersus();
        }
    },[selected])

    return(
        <section className="game-board">
            {
                selected? 
                    <GameVersus render={'one'} selected={selected} scoreCount={scoreCount} playAgain={playAgain} bonusGame={bonusGame}/> 
                    : 
                    <GameItem  selectItem={selectItem} render={'all'} bonusGame={bonusGame}/>
            }
        </section>
    )
}

export default GameBoard