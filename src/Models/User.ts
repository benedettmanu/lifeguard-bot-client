export interface ListUserResgistrations {
  bairro: string;
  cidade: string;
  descricao: string;
  id: number;
  logradouro: string;
  cep: string;
  nome: string;
  email: string;
  telefone: string;
  autoridade: boolean;
  adm: boolean;
}

export interface CreateUserResgistration {
  bairro: string;
  cidade: string;
  descricao: string;
  logradouro: string;
  cep: string;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  privacyPolicy: boolean;
}

export interface UserLogin {
  email: string;
  senha: string;
}
