import React from "react";
import Head from "next/head";
import Link from "next/link";

import { BackgroundComponent, TextContainer, Title, Subtitle, Button } from "@/styles/pages/Home";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title> Home | Bot Salva-Vidas</title>
      </Head>
      <BackgroundComponent>
        <img src="/home/main.png" />
        <TextContainer>
          <Link href="/">
            <a><Title>BOT SALVA-VIDAS</Title></a>
          </Link>
          <Subtitle>O sistema que te protege das chuvas e das enchentes no Vale do Itajaí.</Subtitle>
          <Link href="/login">
            <a><Button>ACESSE</Button></a>
          </Link>
        </TextContainer>
      </BackgroundComponent>
    </>
  );
};

export default Home;