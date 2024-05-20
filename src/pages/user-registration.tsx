import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useState } from 'react';

import { Button, Form, Input, Checkbox, Row, Col, Select } from 'antd';

import { BackgroundComponent } from '@/styles/pages/Home';
import { StyledModal } from '@/styles/pages/Registration';
import api from '@/services/api';
import { CreateUserResgistration } from '@/Models/User';

const UserRegistration: React.FC = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: CreateUserResgistration) => {
    try {
      if (values.privacyPolicy) {
        const { privacyPolicy, ...userValues } = values;
        const response = await api.post('criaLogin', userValues);
        if (response.status !== 201) {
          setError('Não foi possível criar o usuário. Tente novamente.');
        } else {
          console.log(response.data);
          router.push('/login');
        }
      } else {
        setError('Política de privacidade não aceita');
      }
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        setError('Já existe um usuário com este e-mail.');
      } else {
        setError('Ocorreu um erro ao tentar criar o usuário. Tente novamente.');
      }
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Faça Parte | Bot Salva-Vidas</title>
      </Head>
      <BackgroundComponent>
        <img src="background.png" />
        <StyledModal>
          <h1>FAÇA PARTE</h1>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item name="nome" rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}>
              <Input placeholder="Nome" />
            </Form.Item >
            <Form.Item name="telefone" rules={[{ required: true, message: 'Por favor, insira seu número de telefone!' }]}>
              <Input placeholder="Número de Telefone" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, message: 'Por favor, insira seu e-mail!' }]}>
              <Input placeholder="Seu Melhor E-mail" />
            </Form.Item>
            <Form.Item name="senha" rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}>
              <Input placeholder="Senha" />
            </Form.Item>
            <Form.Item name="logradouro" rules={[{ required: true, message: 'Por favor, insira seu logradouro!' }]}>
              <Input placeholder="Rua" />
            </Form.Item>
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item name="bairro" rules={[{ required: true, message: 'Por favor, insira seu bairro!' }]}>
                  <Input placeholder="Bairro" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="cep">
                  <Input placeholder="CEP" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="cidade" rules={[{ required: true, message: 'Por favor, selecione sua cidade!' }]}>
              <Select placeholder="Selecione a cidade">
                <Option value="itajai">Itajaí</Option>
                <Option value="balneario">Balneário Camboriú</Option>
                <Option value="camboriu">Camboriú</Option>
                <Option value="navegantes">Navegantes</Option>
                <Option value="itapema">Itapema</Option>
              </Select>
            </Form.Item>
            <Form.Item name="privacyPolicy" valuePropName="checked" rules={[{ required: true, message: 'Por favor, aceite a política de privacidade!' }]}>
              <Checkbox>Aceito a política de privacidade</Checkbox>
            </Form.Item>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Cadastrar
              </Button>
            </Form.Item>
          </Form>
          <p>Já tem login? <Link href="/login">Entrar</Link></p>
        </StyledModal>
      </BackgroundComponent>
    </>
  );
};


export default UserRegistration;
