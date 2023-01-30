export interface Pratos {
    id?: number;
    nome: string;
    desc: string;
    preco: number;
    tipo: string;
  }

export interface Tipo_prato{
    id: number;
    nome: string;
}

export interface Pedidos {
  id?: number
  nome: string
  endereco: string
  total: number
  createdAt?: Date
}