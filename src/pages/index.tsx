import { useState } from 'react';

import Head from 'next/head';
import { GetServerSideProps } from 'next';
import ChallengeBox from '../components/ChallengeBox';
import { CountdownProvider } from '../contexts/CountdownContext';
import CompletedChallenges from '../components/CompletedChallenges';
import Countdown from '../components/Countdown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import { ChallengesProvider,  } from '../contexts/ChallengesContext';
import styles from '../styles/pages/Home.module.css';
import { ProfileProvider } from '../contexts/ProfileContext';

interface HomeProps {
  username: string;
  avatar_url: string;
  isLogged: boolean;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Move.Yourself</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <ProfileProvider username={props.username} avatar_url={props.avatar_url} isLogged={props.isLogged}>
                <Profile />
              </ProfileProvider>
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username, avatar_url, isLogged, level, currentExperience, challengesCompleted } = ctx.req.cookies;

  return {
    props: {
      username: String(username),
      avatar_url: String(avatar_url),
      isLogged: Boolean(isLogged),
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
