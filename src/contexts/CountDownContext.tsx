import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContexted } from "./ChallengesContexted";

interface CountDownDate {
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinish: boolean;
    startCountDown: () => void;
    restartCountDown: () => void;
    stopCountDown: () =>  void;
}

interface CountDownProviderProps {
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownDate);

export function CountDownProvider ({ children } : CountDownProviderProps){
    const [time, setTime] = useState(1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinish, setHasFinished] = useState(false);
    const { startNewChallenger } = useContext(ChallengesContexted);

    let countDownTimeOut: NodeJS.Timeout;

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    function startCountDown(){
        setIsActive(true);
    }

    function stopCountDown(){
        clearTimeout(countDownTimeOut);
        setIsActive(false);
    }

    function restartCountDown(){
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setHasFinished(false);
        setTime(25 * 60);
    }

    useEffect(() => {
        if(isActive && time != 0) {
            countDownTimeOut = setTimeout(() => setTime(time - 1), 1000);
        } else if(isActive && time === 0) {
            setIsActive(false);
            setHasFinished(true);
            startNewChallenger();

        }
    }, [isActive, time]);

    return (
        <CountDownContext.Provider value={{
            minutes,
            seconds,
            isActive,
            hasFinish,
            startCountDown,
            restartCountDown,
            stopCountDown,
        }}>
            {children}
        </CountDownContext.Provider>
    )   
}