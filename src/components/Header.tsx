// src/components/Header.tsx
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  const categorias = ['Celulares', 'Capinhas', 'Fones', 'Carregadores']

  return (
    <header>
      <div className="header-top">
        <div className="logo">Loja de Celulares</div>
        <input type="search" placeholder="Buscar produtos..." className="search-bar" />
      </div>
      <nav className="header-nav">
        <div className="nav-left">
          <div className="dropdown">
            <button className="dropdown-trigger">Categorias ▾</button>
            <div className="dropdown-menu">
              {categorias.map((categoria) => (
                <Link
                  key={categoria}
                  to={`/categoria/${categoria.toLowerCase()}`}
                  className="dropdown-item"
                >
                  {categoria}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="nav-right">
          <button>Login</button>
          <button>Carrinho</button>
        </div>
      </nav>
    </header>
  )
}
export default Header