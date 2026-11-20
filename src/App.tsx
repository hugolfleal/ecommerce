import { useState } from 'react';
import { products } from './data/products';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="site-shell">
      <div className="announcement">Feito sob demanda, com cuidado em cada camada. <span>Frete grátis acima de R$ 250</span></div>
      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Forma3D, início">forma<span>3d</span><i>.</i></a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#loja">Loja</a>
          <a href="#servicos">Impressão sob medida</a>
          <a href="#sobre">Nossa ideia</a>
        </nav>
        <button className="cart-button" type="button" aria-label={`Sacola com ${cartCount} itens`}>
          Sacola <span className="cart-count">{cartCount}</span>
        </button>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Design consciente · impressão 3D</p>
            <h1>Ideias que<br />ganham <em>forma.</em></h1>
            <p className="hero-description">Objetos para o dia a dia, criados com intenção e impressos camada por camada. Do nosso ateliê direto para a sua casa.</p>
            <a className="button button-dark" href="#loja">Explore a loja <span aria-hidden="true">↗</span></a>
            <div className="hero-note"><span className="note-mark">✳</span> Produção local, em pequenos lotes</div>
          </div>
          <div className="hero-visual" role="img" aria-label="Objeto decorativo feito por impressão 3D">
            <div className="hero-image"></div>
            <div className="image-caption"><span>FORMA, FUNÇÃO & FUTURO</span><span>01 — 04</span></div>
            <div className="hero-sticker">feito<br />para durar</div>
          </div>
        </section>

        <section className="benefits" aria-label="Vantagens Forma3D">
          <div><span className="benefit-icon">✳</span><span><strong>Feito sob demanda</strong><small>Menos desperdício, mais intenção</small></span></div>
          <div><span className="benefit-icon">◌</span><span><strong>Materiais selecionados</strong><small>PLA, PETG e opções especiais</small></span></div>
          <div><span className="benefit-icon">⌁</span><span><strong>Feito no Brasil</strong><small>Do nosso estúdio até você</small></span></div>
        </section>

        <section className="shop-section section-wrap" id="loja">
          <div className="section-heading">
            <div><p className="eyebrow">Peças com personalidade</p><h2>Feitas para ficar.</h2></div>
            <a className="text-link" href="#produtos">Ver todos os produtos <span aria-hidden="true">→</span></a>
          </div>
          <div className="category-row" aria-label="Categorias">
            <a className="category active" href="#produtos">Todos <span>04</span></a>
            <a className="category" href="#produtos">Casa & decoração</a>
            <a className="category" href="#produtos">Organização</a>
            <a className="category" href="#produtos">Acessórios</a>
            <a className="category" href="#produtos">Personalizados</a>
          </div>
          <div className="product-grid" id="produtos">
            {products.map((product) => (
              <article className="product-card" key={product.id}>
                <a className="product-image" href="#servicos" style={{ backgroundImage: `url('${product.image}')` }} aria-label={`Conheça ${product.name}`}>
                  {product.tag && <span className="product-tag">{product.tag}</span>}
                  <span className="quick-view" aria-hidden="true">↗</span>
                </a>
                <div className="product-meta"><span>{product.category}</span><span>Impressão 3D</span></div>
                <div className="product-title-row"><div><h3>{product.name}</h3><p>{product.description}</p></div><strong>{currency.format(product.price)}</strong></div>
                <button className="add-button" type="button" onClick={() => setCartCount((count) => count + 1)}>Adicionar à sacola <span aria-hidden="true">+</span></button>
              </article>
            ))}
          </div>
        </section>

        <section className="custom-banner" id="servicos">
          <div className="custom-art" aria-hidden="true"><span>3D</span><span>✳</span></div>
          <div className="custom-copy"><p className="eyebrow">Uma ideia só sua</p><h2>Seu projeto.<br /><em>Do seu jeito.</em></h2><p>Precisa de uma peça específica, protótipo ou pequena produção? A gente ajuda sua ideia a sair do papel.</p><a className="button button-light" href="mailto:oi@forma3d.com.br?subject=Projeto%20personalizado">Conte sua ideia <span aria-hidden="true">↗</span></a></div>
          <div className="custom-index">SERVIÇO 01 / 03</div>
        </section>

        <section className="about-strip" id="sobre"><span className="about-symbol">✳</span><p>Acreditamos em objetos melhores, feitos com menos. <strong>Design pensado para durar — e não para descartar.</strong></p><a href="mailto:oi@forma3d.com.br">Conheça nosso processo <span aria-hidden="true">↗</span></a></section>
      </main>

      <footer className="site-footer">
        <a className="wordmark" href="#inicio">forma<span>3d</span><i>.</i></a>
        <p>Ideias que ganham forma.<br />Impressas com cuidado no Brasil.</p>
        <div className="footer-links"><a href="mailto:oi@forma3d.com.br">Contato</a><a href="#servicos">Projetos personalizados</a><a href="#loja">Instagram ↗</a></div>
        <small>© 2026 Forma3D. Feito camada por camada.</small>
      </footer>
    </div>
  );
}

export default App;
