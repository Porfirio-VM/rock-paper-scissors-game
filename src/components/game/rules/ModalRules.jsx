import './modalrules.css'
import close from '../../../assets/images/icon-close.svg'
import rules from '../../../assets/images/image-rules.svg'
import bonusRules from '../../../assets/images/image-rules-bonus.svg'

function ModalRules({showModal, bonusGame}){ //component that returs the rules modal

    return(<section className="modal">
                <main className='modal-container'>
                    <div className="main-header">
                        <h1>RULES</h1>
                        <picture className='close' onClick={showModal}>
                            <img src={close} alt="" />
                        </picture>
                    </div>
                    <picture className='ruless'>
                        <img src={bonusGame? bonusRules : rules} alt="" /> {/* assigns the rules depending on the selected game type  */}
                    </picture>
                </main>
           </section>)
}

export default ModalRules