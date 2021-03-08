import { useContext } from 'react';
import { ChallengesContexted } from '../contexts/ChallengesContexted';
import style from '../styles/components/LevelUpModal.module.css';

export function LevelUpModal() {

    const { activeLevelUpModal, openCloseModal, level } = useContext(ChallengesContexted);

    return (
        activeLevelUpModal &&
            <div className={style.containerLevelUpModal}>
                <div className={style.continaerBoxModal}>
                    <header>{ level }</header>
                    <strong>Parabéns</strong>
                    <p>Você alcançou um novo level</p>
                    <button type="button" onClick={openCloseModal} >
                        <img src="download/public/icons/close.svg" alt="fechar"/>
                    </button>
                </div>
            </div>
    )
}