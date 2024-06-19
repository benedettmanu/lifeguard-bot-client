import Head from "next/head";
import Link from "next/link";
import router from "next/router";

import React, { useState } from "react";

import { Button, Form, Input } from "antd";

import { BackgroundComponent } from "@/styles/pages/Home";
import { StyledModal, StyledPassword } from "@/styles/pages/Registration";
import api from "@/services/api";
import { UserLogin } from "@/Models/User";

const Login: React.FC = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: UserLogin) => {
    try {
      const response = await api.post("login", values);
      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data));
        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
      } else {
        setError("Não foi possível realizar login. Tente novamente.");
      }
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("Usuário ou senha incorretos. Tente novamente.");
      } else {
        setError("Erro de conexão com o servidor.");
      }
    }
  };

  return (
    <>
      <Head>
        <title>Login | Bot Salva-Vidas</title>
      </Head>
      <BackgroundComponent>
        <img src="background.png" />
        <StyledModal>
          <h1>Login</h1>
          <Form onFinish={handleSubmit}>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Por favor, insira seu e-mail!" },
              ]}
            >
              <Input placeholder="E-mail" />
            </Form.Item>
            <Form.Item
              name="senha"
              rules={[
                { required: true, message: "Por favor, insira sua senha!" },
              ]}
            >
              <StyledPassword placeholder="Senha" />
            </Form.Item>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Entrar
              </Button>
            </Form.Item>
          </Form>
          <p>
            Não tem conta? <Link href="/user-registration">Cadastrar</Link>
          </p>
        </StyledModal>
      </BackgroundComponent>
    </>
  );
};

export default Login;
