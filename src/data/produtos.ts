// src/data/produtos.ts
import type { Produto } from '../types'

export const produtos: Produto[] = [
  {
    id: '1',
    nome: 'Galaxy S24',
    marca: 'Samsung',
    preco: 4299.90,
    precoPromocional: 3899.90,
    imagem: '/produtos/galaxy-s24.jpg',
    descricao: 'Smartphone com tela Dynamic AMOLED 2X de 6.2", câmera de 50MP e processador Snapdragon 8 Gen 3.',
    categoria: 'celulares',
    especificacoes: {
      armazenamento: '256GB',
      ram: '8GB',
      cor: 'Preto',
      tela: '6.2"'
    },
    estoque: 12,
    destaque: true
  },
  {
    id: '2',
    nome: 'Redmi Note 13',
    marca: 'Xiaomi',
    preco: 1699.90,
    imagem: '/produtos/redmi-note-13.jpg',
    descricao: 'Ótimo custo-benefício com tela AMOLED de 120Hz, câmera de 108MP e bateria de 5000mAh.',
    categoria: 'celulares',
    especificacoes: {
      armazenamento: '128GB',
      ram: '8GB',
      cor: 'Verde',
      tela: '6.67"'
    },
    estoque: 20,
    destaque: true
  },
  {
    id: '3',
    nome: 'Moto G84',
    marca: 'Motorola',
    preco: 1899.90,
    precoPromocional: 1699.90,
    imagem: '/produtos/moto-g84.jpg',
    descricao: 'Tela pOLED curva, resistente a água e poeira (IP54), com carregamento rápido de 30W.',
    categoria: 'celulares',
    especificacoes: {
      armazenamento: '256GB',
      ram: '12GB',
      cor: 'Azul Marinho',
      tela: '6.5"'
    },
    estoque: 15
  },
  {
    id: '4',
    nome: 'iPhone 15',
    marca: 'Apple',
    preco: 6999.00,
    imagem: '/produtos/iphone-15.jpg',
    descricao: 'Chip A16 Bionic, câmera principal de 48MP e conector USB-C.',
    categoria: 'celulares',
    especificacoes: {
      armazenamento: '128GB',
      ram: '6GB',
      cor: 'Rosa',
      tela: '6.1"'
    },
    estoque: 8,
    destaque: true
  },
  {
    id: '5',
    nome: 'Capinha Silicone Premium',
    marca: 'Genérica',
    preco: 49.90,
    imagem: '/produtos/capinha-silicone.jpg',
    descricao: 'Capinha em silicone com acabamento aveludado, proteção nas bordas e câmera.',
    categoria: 'capinhas',
    especificacoes: {
      cor: 'Diversas cores'
    },
    estoque: 45
  },
  {
    id: '6',
    nome: 'Capinha Anti-Impacto',
    marca: 'Genérica',
    preco: 39.90,
    precoPromocional: 29.90,
    imagem: '/produtos/capinha-antiimpacto.jpg',
    descricao: 'Proteção reforçada contra quedas, com bordas de silicone e traseira transparente.',
    categoria: 'capinhas',
    especificacoes: {
      cor: 'Transparente'
    },
    estoque: 60
  },
  {
    id: '7',
    nome: 'Fone Bluetooth TWS',
    marca: 'JBL',
    preco: 299.90,
    imagem: '/produtos/fone-tws.jpg',
    descricao: 'Fones sem fio com cancelamento de ruído, até 24h de bateria com o case e resistência à água.',
    categoria: 'fones',
    especificacoes: {
      cor: 'Preto'
    },
    estoque: 25,
    destaque: true
  },
  {
    id: '8',
    nome: 'Fone com Fio USB-C',
    marca: 'Xiaomi',
    preco: 59.90,
    imagem: '/produtos/fone-usbc.jpg',
    descricao: 'Fone de ouvido com conector USB-C, microfone embutido e cabo reforçado.',
    categoria: 'fones',
    especificacoes: {
      cor: 'Branco'
    },
    estoque: 30
  },
  {
    id: '9',
    nome: 'Carregador Turbo 33W',
    marca: 'Xiaomi',
    preco: 89.90,
    imagem: '/produtos/carregador-33w.jpg',
    descricao: 'Carregador de parede com carregamento rápido de 33W, compatível com USB-C.',
    categoria: 'carregadores',
    especificacoes: {
      cor: 'Branco'
    },
    estoque: 40
  },
  {
    id: '10',
    nome: 'Power Bank 10000mAh',
    marca: 'Baseus',
    preco: 129.90,
    precoPromocional: 99.90,
    imagem: '/produtos/powerbank.jpg',
    descricao: 'Bateria portátil com duas saídas USB e entrada USB-C, carrega até dois aparelhos simultaneamente.',
    categoria: 'carregadores',
    especificacoes: {
      cor: 'Preto'
    },
    estoque: 18
  }
]