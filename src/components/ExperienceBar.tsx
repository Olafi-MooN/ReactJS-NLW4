import { useContext } from "react";
import styles from "../styles/components/ExperienceBar.module.css";
import { ChallengesContexted } from "../contexts/ChallengesContexted";

export function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContexted);

    return (
        <header className={styles.containerExperienceBar}>
            <span>0 xp</span>
            <div className={styles.containerBar}>
                <progress id="file" max={ experienceToNextLevel } value={currentExperience}/>
                <div className={styles.porcentageBar}><span>{currentExperience}</span></div>
            </div>
            <span>{ experienceToNextLevel } xp</span>
        </header>
    )
}