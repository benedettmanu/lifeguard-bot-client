import Head from "next/head";

import { Container } from "@/components/Container";

import { AboutUsContent, TextContent } from "@/styles/pages/AboutUs";

const AboutUs: React.FC = () => {

  return (
    <Container>
      <Head>
        <title>Sobre nós | Bot Salva-Vidas</title>
      </Head>

      <AboutUsContent>
        <img src="/about-us/pedro.png" />

        <TextContent>
          <h1>Conheça Pedro</h1>
          <p>Inspirado em São Pedro, o guardião celestial das chuvas, apresentamos Pedro. Pedro é uma Inteligência Artificial avançada que se comunica com os usuários através do WhatsApp para fornecer informações em tempo real sobre as condições de alagamento nas ruas. Para os usuários cadastrados, Pedro monitora constantemente as condições climáticas e as áreas propensas a inundações, fornecendo alertas oportunos para ajudar a evitar áreas alagadas. Junte-se a nós e deixe o Pedro ajudá-lo a navegar com segurança durante os períodos de chuva intensa.</p>
        </TextContent>

      </AboutUsContent>

    </Container>
  );
};

export default AboutUs;
