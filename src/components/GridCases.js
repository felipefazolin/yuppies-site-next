import Button from "@components/Button";

const GridCases = ({ content, title }) => {
  // Filtra os itens que têm a propriedade 'featured' como true
  const featuredContent = content.filter((item) => item.featured === true);

  return (
    <div className="pt-9 pb-9 bg-1">
      <div className="container">
        <h2 className="text-title mb-5">{title}</h2>
        <div className="row align-items-stretch  g-3 g-sm-4 g-md-4 g-lg-4 g-xl-5 ">
          {featuredContent.map((item, index) => (
            <div
              key={index}
              className="col-12 col-sm-6 col-md-4 d-flex flex-column align-items-start h-100 "
            >
              <div className="p-0 d-flex flex-column h-100">
                <a href={item.link}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid grid-cases-image"
                  />
                </a>
                <div className="flex-grow-1">
                  <h3 className="grid-cases-title mt-3 mb-3">{item.title}</h3>
                  <p className="grid-cases-p">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="col-12 d-flex justify-content-center mt-3">
          <Button label={"ver todos os cases"} bg={"button-bg-1"} link={"/"} />
        </div>
      </div>
    </div>
  );
};

export default GridCases;
