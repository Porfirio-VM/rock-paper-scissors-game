import title from '../../../assets/images/logo.svg'
import titleBonus from '../../../assets/images/logo-bonus.svg'
import './score.css'
function Score ({score, bonusGame}){

    return(
        <header className='header-game'>
            <picture className='logo-container'>
                <img src={bonusGame? (titleBonus) : (title)} alt="" />
            </picture>
            <article className='score'>
                <h3>SCORE</h3>
                <h1>{score}</h1>
            </article>
        </header>
    )
}

export default Score