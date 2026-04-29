import { useState } from 'react';
import Container from '../common/Container';
import Button from '../common/Button';
import { NAV_ITEMS } from '../../constants/navigation';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((currentState) => !currentState);
  }

  function handleNavClick() {
    setIsMenuOpen(false);
  }

  return (
    <header className="site-header">
      <Container className="header-content">
        <a href="#top" className="brand-block" onClick={handleNavClick}>
          <div className="brand-logo">DP</div>
          <div>
            <p className="brand-title">Dom Preto</p>
            <p className="brand-subtitle">Artista independente</p>
          </div>
        </a>

        <nav className="desktop-nav" aria-label="Navegação principal">
          {NAV_ITEMS.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="menu-toggle"
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>

          <Button as="a" href="#contato" variant="primary" className="header-cta">
            Contratar show
          </Button>
        </div>
      </Container>

      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav" aria-label="Navegação mobile">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="mobile-nav-link"
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
            <Button as="a" href="#contato" variant="primary" onClick={handleNavClick}>
              Contratar show
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;
