import Head from "next/head";
import { GetStaticProps } from "next";

import React from "react";

import {
  Content,
  Subtitle,
  Table,
  Td,
  Th,
  Title,
  Tr,
} from "@/styles/pages/List";
import { Container } from "@/components/Container";
import { ConfirmedArea } from "@/Models/Flood";
import api from "@/services/api";

interface Props {
  flood: ConfirmedArea[];
}

const ListFloodRegistration: React.FC<Props> = ({ flood }) => {
  return (
    <Container>
      <Head>
        <title>Listagem de Áreas Alagadas | Bot Salva-Vidas</title>
      </Head>

      <Content>
        <Title>Áreas Alagadas</Title>
        <Subtitle>Visualize as áreas alagadas</Subtitle>

        <Table>
          <thead>
            <Tr>
              <Th>Bairro</Th>
              <Th>Cidade</Th>
              <Th>Ruas afetadas até o momento</Th>
            </Tr>
          </thead>
          <tbody>
            {flood.map((area, index) => (
              <Tr key={index}>
                <Td>{area.bairro}</Td>
                <Td>{area.cidade}</Td>
                <Td>{area.ruas.map((rua) => rua.logradouro).join(", ")}</Td>
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
    const content = await api.get("listaAreasAlagadasConfirmadas");
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
