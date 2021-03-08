import { GetServerSideProps } from 'next';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallegends } from "../components/CompletedChallegends";
import { CountDown } from "../components/CountDown";
import { ChallangerBox } from "../components/ChallengerBox";
import { CountDownProvider }  from "../contexts/CountDownContext";
import { LevelUpModal }  from "../components/LevelUpModal";

import Head from "next/head";

import styles from "../styles/Pages/Home.module.css";
import React from 'react';
import { ChallagesProvider } from '../contexts/ChallengesContexted';

interface ChallagesProviderProps {
  level: number 
  currentExperience: number; 
  challengerComplete: number;
}

export default function Home(props : ChallagesProviderProps) {

  return (
    <ChallagesProvider 
      level={props.level}
      currentExperience={props.currentExperience}
      challengerComplete={props.challengerComplete}>

      <LevelUpModal/>
      
      <div className={styles.containerHome}>
        <Head>
          <title>Inicio - PromodoroApp</title>
        </Head>

        <ExperienceBar/>

        <CountDownProvider>
          <section>
            <main>
              <Profile/>
              <CompletedChallegends/>
              <CountDown/>
            </main>
            <div>
              <ChallangerBox/>
            </div>
          </section>
        </CountDownProvider>
      </div>
    </ChallagesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ( ctx ) => {

  const { level, currentExperience, challengerComplete } = ctx.req.cookies;

  return{
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience), 
      challengerComplete: Number(challengerComplete),
    }
  }
}
