import { useEffect } from "react"
import { hands, bonusHands } from "../../../constants"
import './gameitem.css'

function GameItem({selectItem, render, selected, bonusGame}){

    const gameSelected = bonusGame? bonusHands : hands
    const selectedHand = gameSelected.find(hand => hand.id === selected)

    const hand = render === 'all'? //if the hand render are all render all the items
    (
        bonusGame? //ternary operator to check if the bonus game are true, then render depending on whether or not you have selected
        <div className="bonus-container">
            {bonusHands.map((bHand)=> (
                <article key={bHand.id} hand={bHand.hand} className="bonus" onClick={() => selectItem(bHand.id)} style={{background: `var(--${bHand.hand})`, 
                        boxShadow: `0 0.4rem var(--shadow-med), 0 0.4rem var(--${bHand.hand}-dark)`}}>
                    <picture className="image-container">
                        <img src={bHand.img} alt="" />
                    </picture>
                </article>
            ))}
        </div> 
        :
        <div className="all-container">{
                hands.map((hand) => (
                    <article 
                    key={hand.id}
                    hand={hand.hand}
                    className="item-container"
                    onClick={() => selectItem(hand.id)} 
                    style={{background: `var(--${hand.hand})`, 
                            boxShadow: `0 0.4rem var(--shadow-med), 0 0.4rem var(--${hand.hand}-dark)`}
                    }>
                        <picture className="image-container">
                            <img src={hand.img} alt=""/>
                        </picture>
                    </article>
                ))
        }</div>

    ) : ( //render only one item if the game is on versus
            <article 
            className="item-container" 
            key={selectedHand.id} 
            style={{background: `var(--${selectedHand.hand})`,
                    boxShadow: `0 0.4rem var(--shadow-med), 0 0.4rem var(--${selectedHand.hand}-dark)`}}>
                <picture className="image-container">
                    <img src={selectedHand.img} alt=""/>
                </picture>
            </article>
        )

    return <>{hand}</>            
}

export default GameItem