import Container from '../common/Container';
import { SOCIAL_LINKS } from '../../constants/site';

function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-content">
        <p>© 2026 MAOP Digital Solutions. Todos os direitos reservados.</p>

        <div className="footer-links">
          {SOCIAL_LINKS.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
