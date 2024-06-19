import Head from "next/head";
import { GetStaticProps } from "next";

import React from "react";

import { FaRegCheckCircle } from "react-icons/fa";

import {
  ConfirmButton,
  Content,
  Subtitle,
  Table,
  Td,
  Th,
  Title,
  Tr,
} from "@/styles/pages/List";
import { Container } from "@/components/Container";
import { Area, ListFloodResgistrations } from "@/Models/Flood";
import api from "@/services/api";

interface Props {
  flood: ListFloodResgistrations[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

const ListFloodRegistration: React.FC<Props> = ({ flood }) => {
  async function confirmArea(area: Area) {
    const confirm = window.confirm(
      `Você realmente quer confirmar a área de ${area.cidade}, ${area.bairro} como alagada?`
    );
    if (confirm) {
      try {
        const response = await api.put("confirmarAreaAlagada", area);
        if (response.status === 200) {
          alert("Áreas confirmadas com sucesso!");
          window.location.reload();
        }
      } catch (error) {
        alert("Houve um erro ao confirmar as áreas.");
      }
    }
  }

  return (
    <Container>
      <Head>
        <title>Listagem de Áreas Alagadas | Bot Salva-Vidas</title>
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
              <Th>Data</Th>
              <Th>Confirmada</Th>
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
                <Td>{formatDate(area.data.toLocaleString())}</Td>
                <Td style={{ textAlign: "center" }}>
                  {area.area_confirmada ? (
                    <FaRegCheckCircle />
                  ) : (
                    <>
                      <ConfirmButton
                        onClick={() =>
                          confirmArea({
                            cidade: area.cidade,
                            bairro: area.bairro,
                          })
                        }
                      >
                        Confirmar
                      </ConfirmButton>
                    </>
                  )}
                </Td>
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
