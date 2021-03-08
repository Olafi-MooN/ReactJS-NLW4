import { useContext } from "react";
import style from "../styles/components/ChallengerBox.module.css";
import { ChallengesContexted } from "../contexts/ChallengesContexted";
import { CountDownContext } from "../contexts/CountDownContext";

export function ChallangerBox () {
    const { activeChallenger, resetChallenger, completeChallenger } = useContext(ChallengesContexted);
    const { restartCountDown } = useContext(CountDownContext);

    const handleSucceedChallenger = () => {
        completeChallenger();
        restartCountDown();
    }

    const handleFailChallenger = () => {
        resetChallenger();
        restartCountDown();
    }

    return (
        <div className={style.containerChallangerBox}>
            { activeChallenger ? 
                <div className={style.challangerIsActive}>
                    <header>
                        { `Ganhe ${activeChallenger.amount} XP` }
                    </header>
                    <main>
                        <img src={`download/public/icons/${activeChallenger.type}.svg`} alt="Ganhe Xp"/>
                        <strong> Novo Desafio </strong>
                        <p>{ activeChallenger.description }</p>
                    </main>
                    <footer>
                        <button 
                            type="button"
                            className={style.challangedFaildBuntton}
                            onClick={handleFailChallenger} >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={style.challangedSuccessBuntton}
                            onClick={handleSucceedChallenger} >
                            Completei
                        </button>
                    </footer>
                </div> :
                <div className={style.challengerIsNotActive}>
                <strong>
                    Finalize um ciclo para receber um desafio
                </strong>
                <p>
                    <img src="download/public/icons/level-up.svg" alt="Level Uo"/>
                    Avance níveis completando desafios
                </p>
                </div>
            }
        </div>
    )
}