// src/pages/Categoria.tsx
import { useParams } from 'react-router-dom'
import { produtos } from '../data/produtos'
import './Categoria.css'

function Categoria() {
  const { nomeCategoria } = useParams()

  const produtosFiltrados = produtos.filter(
    (produto) => produto.categoria === nomeCategoria
  )

  return (
    <div>
      <h1>{nomeCategoria}</h1>
      <div className="lista-produtos">
        {produtosFiltrados.map((produto) => (
          <div key={produto.id} className="produto-card-horizontal">
            <img
              src={`https://placehold.co/400x400?text=${encodeURIComponent(produto.nome)}`}
              alt={produto.nome}
              className="produto-imagem"
            />
            <div className="produto-info">
              <h3>{produto.nome}</h3>
              <p className="produto-marca">{produto.marca}</p>
              <p className="produto-preco">R$ {produto.preco.toFixed(2)}</p>
              <button className="btn-comprar">Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
export default Categoria