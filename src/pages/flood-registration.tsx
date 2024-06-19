import Head from "next/head";
import React, { useState } from "react";
import { useRouter } from "next/router";

import { Button, Col, Form, Input, Row, Select } from "antd";

import { BackgroundComponent } from "@/styles/pages/Home";
import { StyledModal } from "@/styles/pages/Registration";
import { CreateFloodResgistration } from "@/Models/Flood";
import api from "@/services/api";

const FloodRegistration: React.FC = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: CreateFloodResgistration) => {
    try {
      const response = await api.post("cadastraArea", values);
      if (response.status !== 201) {
        setError("Não foi possível cadastrar área alagada. Tente novamente.");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      setError(
        "Ocorreu um erro ao tentar cadastrar área alagada. Tente novamente."
      );
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Cadastro de Área Alagada | Bot Salva-Vidas</title>
      </Head>

      <BackgroundComponent>
        <img src="background.png" />
        <StyledModal>
          <h1>Cadastrar Área Alagada</h1>
          <Form form={form} onFinish={handleSubmit}>
            <Form.Item
              name="logradouro"
              rules={[{ required: true, message: "Por favor, insira a rua!" }]}
            >
              <Input placeholder="Rua" />
            </Form.Item>
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  name="bairro"
                  rules={[
                    { required: true, message: "Por favor, insira o bairro!" },
                  ]}
                >
                  <Input placeholder="Bairro" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item name="cep">
                  <Input placeholder="CEP" />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item name="descricao">
              <Input placeholder="Descrição" />
            </Form.Item>
            <Form.Item
              name="cidade"
              style={{ marginBottom: "2rem" }}
              rules={[
                { required: true, message: "Por favor, selecione a cidade!" },
              ]}
            >
              <Select placeholder="Selecione a cidade">
                <Option value="itajai">Itajaí</Option>
                <Option value="balneario">Balneário Camboriú</Option>
                <Option value="camboriu">Camboriú</Option>
                <Option value="navegantes">Navegantes</Option>
                <Option value="itapema">Itapema</Option>
              </Select>
            </Form.Item>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Confirmar
              </Button>
            </Form.Item>
          </Form>
        </StyledModal>
      </BackgroundComponent>
    </>
  );
};

export default FloodRegistration;
