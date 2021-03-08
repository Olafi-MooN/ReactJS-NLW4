import { useContext } from "react";
import { ChallengesContexted } from "../contexts/ChallengesContexted";
import style from "../styles/components/CompletedChallegends.module.css";

export function CompletedChallegends() {
    const { challengerComplete } = useContext(ChallengesContexted);

    return (
        <div className={style.completadeStaged}>
            <span>Desafios completos</span>
            <span>{challengerComplete}</span>
        </div>
    )
}