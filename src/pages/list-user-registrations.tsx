
import Head from 'next/head';
import { GetStaticProps } from 'next';

import React from 'react';

import { FaRegCheckCircle, FaRegTimesCircle } from 'react-icons/fa';

import { Content, Subtitle, Table, Td, Th, Title, Tr } from "@/styles/pages/List";
import { Container } from "@/components/Container";
import { ListUserResgistrations } from '@/Models/User';
import api from '@/services/api';


interface Props {
  user: ListUserResgistrations[];
}

const ListUserRegistration: React.FC<Props> = ({ user }) => {
  return (
    <Container>
      <Head>
        <title>Listagem de Usuários | Bot Salva-Vidas</title>
      </Head>

      <Content>
        <Title>Usuários</Title>
        <Subtitle>Visualize os usuários do sistema</Subtitle>

        <Table>
          <thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Email</Th>
              <Th>Telefone</Th>
              <Th>Rua</Th>
              <Th>Bairro</Th>
              <Th>CEP</Th>
              <Th>Cidade</Th>
              <Th style={{ width: '50px' }}>Autoridade</Th>
            </Tr>
          </thead>
          <tbody>
            {user.map((usuario, index) => (
              <Tr key={index}>
                <Td>{usuario.nome}</Td>
                <Td>{usuario.email}</Td>
                <Td>{usuario.telefone}</Td>
                <Td>{usuario.logradouro}</Td>
                <Td>{usuario.bairro}</Td>
                <Td>{usuario.cep}</Td>
                <Td>{usuario.cidade}</Td>
                <Td style={{ textAlign: 'center' }}>
                  {usuario.autoridade ? <FaRegCheckCircle /> : <FaRegTimesCircle />}
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default ListUserRegistration;

export const getStaticProps: GetStaticProps = async () => {
  try {
    const content = await api.get("listaUsuario");
    const userContent = content.data;

    return {
      props: {
        user: userContent || [],
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
