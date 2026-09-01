// src/types/index.ts
export interface Produto {
  id: string
  nome: string
  marca: string
  preco: number
  precoPromocional?: number
  imagem: string
  descricao: string
  categoria: 'celulares' | 'capinhas' | 'fones' | 'carregadores'
  especificacoes?: {
    armazenamento?: string
    ram?: string
    cor: string
    tela?: string
  }
  estoque: number
  destaque?: boolean
}