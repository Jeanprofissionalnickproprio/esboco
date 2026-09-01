// src/components/BannerCategoria.tsx
import './BannerCategoria.css'

interface BannerCategoriaProps {
  categoria: string
  imagemFundo: string
}

function BannerCategoria({ categoria, imagemFundo }: BannerCategoriaProps) {
  return (
    <div className="banner-categoria" style={{ backgroundImage: `url(${imagemFundo})` }}>
      <div className="banner-overlay">
        <h1>{categoria}</h1>
      </div>
    </div>
  )
}
export default BannerCategoria