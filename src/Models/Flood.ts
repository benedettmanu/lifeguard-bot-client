export interface ListFloodResgistrations {
  bairro: string;
  cidade: string;
  descricao: string;
  id: number;
  logradouro: string;
  cep: string;
  data: Date;
  area_confirmada: boolean;
}

export interface CreateFloodResgistration {
  bairro: string;
  cidade: string;
  descricao: string;
  logradouro: string;
  cep: string;
}

export interface Street {
  descricao: string;
  logradouro: string;
}

export interface Area {
  bairro: string;
  cidade: string;
}

export interface ConfirmedArea {
  bairro: string;
  cidade: string;
  ruas: Street[];
}
