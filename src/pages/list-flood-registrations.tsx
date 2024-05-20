import Head from "next/head";
import { GetStaticProps } from "next";

import React from "react";

import { Content, Subtitle, Table, Td, Th, Title, Tr } from "@/styles/pages/List";
import { Container } from "@/components/Container";
import { ListFloodResgistrations } from "@/Models/Flood";
import api from "@/services/api";

interface Props {
  flood: ListFloodResgistrations[];
}

const ListFloodRegistration: React.FC<Props> = ({ flood }) => {
  return (
    <Container>
      <Head>
        <title>Listagem de Áreas Alagada | Bot Salva-Vidas</title>
      </Head>


      <Content>
        <Title>Áreas Alagadas</Title>
        <Subtitle>Visualize as áreas alagadas registradas</Subtitle>

        <Table>
          <thead>
            <Tr>
              <Th>Descrição</Th>
              <Th>Rua</Th>
              <Th>Bairro</Th>
              <Th>CEP</Th>
              <Th>Cidade</Th>
            </Tr>
          </thead>
          <tbody>
            {flood.map((area, index) => (
              <Tr key={index}>
                <Td>{area.descricao}</Td>
                <Td>{area.logradouro}</Td>
                <Td>{area.bairro}</Td>
                <Td>{area.cep}</Td>
                <Td>{area.cidade}</Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default ListFloodRegistration;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const content = await api.get("listaAreaAlagada");
    const floodContent = content.data;

    return {
      props: {
        flood: floodContent || [],
      },
      revalidate: 60,
    };
  } catch (e: any) {
    if (e.response && e.response.status === 404) {
      return {
        notFound: true,
      };
    } else {
      return {
        props: {
          content: [],
        },
        revalidate: 60,
      };
    }
  }
};