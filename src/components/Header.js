const Header = ({ content }) => {
  return (
    <div className="pt-10 pb-9 header-services-bg">
      <div className="container">
        <div className="row gx-5 ">
          <div className="col-7  align-content-center ">
            <div className="p-0 ">
              <h1 className="header-services-title mb-4">{content.title}</h1>
              <h2 className="header-services-subtitle mb-5">
                {content.subtitle}
              </h2>
              {content.description.map((desc, index) => (
                <p className="header-services-p mb-3" key={index}>
                  {desc}
                </p>
              ))}
            </div>
          </div>

          <div className="col-5 align-content-center ">
            <div className="p-0 ">
              {/* <img className="header-image"  src={content.imageSrc} alt="Imagem de Exemplo" /> */}
              <img
                className="header-services-image"
                src={"/images/header-solutions/automacao.png"}
                alt="Imagem de Exemplo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
