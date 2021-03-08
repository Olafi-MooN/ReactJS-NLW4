import { useContext } from "react";
import { ChallengesContexted } from "../contexts/ChallengesContexted";
import styles from "../styles/components/Profile.module.css";

export function Profile () {
    const { level } = useContext(ChallengesContexted);
    
    return (
        <div className={styles.containerProfile}>
            <figure>
                <img src="https://avatars.githubusercontent.com/u/54686408?s=460&u=0c058e3ef358e53838a2259b0f000f0982caca14&v=4" alt="foto de perfil"/>
            </figure>
            <div>
                <strong>Alef Santos</strong>
                <p>
                    <img src="download/public/icons/level.svg" alt=""/>
                    Level { level }</p>
            </div>
        </div>
    )
}