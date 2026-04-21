import "./index.css";
import { Link } from "react-router-dom";
import footerLinks from "../../data/footer-links-data";
import socialLinks from "../../data/social-links-data";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const isExternalLink = (url) => /^(https?:|mailto:)/.test(url);
  const isDocumentLink = (url) => /\.pdf(\?|$)/i.test(url);
  const isPlaceholderLink = (url) => url === "#";

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section - Brand & Navigation */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo font-headline">
              Leonardo Pires
            </Link>
            <p className="footer-tagline font-body">
              Crafting digital experiences with precision & creativity
            </p>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-links-column">
                <h4 className="footer-column-title font-headline">{category}</h4>
                <ul className="footer-links-list">
                  {links.map((link) => (
                    <li key={link.label}>
                      {isPlaceholderLink(link.url) ? (
                        <span className="footer-link footer-link-disabled font-body" aria-disabled="true">
                          {link.label}
                        </span>
                      ) : isExternalLink(link.url) || isDocumentLink(link.url) ? (
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="footer-link font-body"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link to={link.url} className="footer-link font-body">
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Section - Socials & Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright font-body">
            © {currentYear} Leonardo Pires. All rights reserved.
          </p>

          <div className="footer-socials">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.url}
                  className="social-link"
                  aria-label={`Visit ${social.label}`}
                  title={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={20} aria-hidden="true" focusable="false" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animated Background Gradient */}
      <div className="footer-gradient-bg" />
    </footer>
  );
}
