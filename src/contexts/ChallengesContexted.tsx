import { createContext, useState, ReactNode, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';
import challenges from "../../challenges.json";

interface challanger {
    type: "body" | "eye";
    description: String;
    amount: number;
}

interface challengerDateContext {
    level: number;
    currentExperience: number;
    challengerComplete: number;
    experienceToNextLevel: number;
    activeLevelUpModal: boolean;
    activeChallenger: challanger;
    levelUp: () => void;
    startNewChallenger: () => void;
    resetChallenger: () => void;
    completeChallenger: () => void;
    openCloseModal: () => void;
}

interface ChallagesProviderProps {
    children: ReactNode;
    level: number 
    currentExperience: number; 
    challengerComplete: number;
}

export const ChallengesContexted = createContext({} as challengerDateContext);

export function ChallagesProvider({children, ...rest} : ChallagesProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
    const [challengerComplete, setChallengerComplete] = useState(rest.challengerComplete ?? 0);
    const [activeChallenger, setActiveChallenger] = useState(null);
    const [activeLevelUpModal, setActiveLeveUpModal] = useState(false);

    let experienceToNextLevel = Math.pow((level + 1) * 4, 2);


    /* useEffect(() => {
        Notification.requestPermission();
    } ,[]);  */

    useEffect(() => {
        Cookies.set('level', String(level));
        Cookies.set('currentExperience', String(currentExperience));
        Cookies.set('challengerComplete', String(challengerComplete));
    }, [level, currentExperience, challengerComplete])

    function openCloseModal() {
        if (activeLevelUpModal) {
            setActiveLeveUpModal(false);
        } else {
            setActiveLeveUpModal(true);
        }
    }

    function levelUp() {
        setLevel(level + 1);
        openCloseModal();
    }

    function startNewChallenger() {
        var ramdomChallengeIndex = Math.floor(Math.random() * challenges.length);
        var challeger = challenges[ramdomChallengeIndex];
        setActiveChallenger(challeger);

        new Audio('download/public/notification.mp3').play();

        /* if(Notification.permission === "granted"){
            new Notification("Novo Desafio!",{
                body: `Valendo ${challeger.amount} pontos de XP`,
                icon: 'download/public/favicon.png',
            });
        } */
    }

    function resetChallenger (){
        setActiveChallenger(null);
    }
    
    function completeChallenger (){
        if (!activeChallenger) {
            return;
        }
            
        const { amount } = activeChallenger;

        let finalExperience = currentExperience + amount;

        if(finalExperience > experienceToNextLevel){
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenger(null);
        setChallengerComplete(challengerComplete + 1);
    }

    return(
        <ChallengesContexted.Provider value={{ 
            level, 
            currentExperience, 
            challengerComplete,
            activeChallenger,
            experienceToNextLevel,
            activeLevelUpModal,
            openCloseModal,
            levelUp, 
            startNewChallenger,
            resetChallenger,
            completeChallenger, }}>
            {children}
        </ChallengesContexted.Provider>
    )
}