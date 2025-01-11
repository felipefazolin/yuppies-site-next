import jsonServices from "@contents/home/slider-services.json";

const FooterServices2 = () => {
  // Obtenha apenas os títulos
  const sitemapLinks = jsonServices.map(service => ({
    name: service.title,  // Pega apenas o título
    url: "/" // URL padrão, você pode ajustar se necessário
  }));

  // Divide o array em dois
  const midIndex = Math.ceil(sitemapLinks.length / 2);
  const firstColumn = sitemapLinks.slice(0, midIndex);
  const secondColumn = sitemapLinks.slice(midIndex);

  return (
    <div className="footer-sitemap ">
      <h6 className="footer-title mb-3">&nbsp;</h6>
      <div className="sitemap-columns">     
        <ul className="sitemap-list">
          {secondColumn.map((link, index) => (
            <li key={index} className="sitemap-item mb-2">
              <a href={link.url} className="sitemap-link">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterServices2;
