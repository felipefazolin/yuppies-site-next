import menuLinks from "@contents/menu.json"; // Certifique-se de que o caminho está correto

const FooterSitemap = () => {
  return (
    <div className="footer-sitemap">
      <h6 className="footer-title mb-3">mapa do site</h6>
      <ul className="sitemap-list">
        {menuLinks.map((link, index) => (
          <li key={index} className="sitemap-item mb-2">
            <a href={link.url} className="sitemap-link">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSitemap;
