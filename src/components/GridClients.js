const GridClients = ({ content }) => {
  return (
    <div className="pt-9 pb-9 bg-0">
      <div className="container">
        <h2 className="text-title mb-6"> clientes atendidos </h2>
        <div className="row  align-items-stretch g-3 g-sm-4 g-md-4 g-lg-4 g-xl-5">
          {content.map((item, index) => (
            <div key={index} className="col-4 col-md-2  align-items-start ">
              <div className=" bg-1 grid-item ">
                <img src={item.logo} className="img-fluid grid-clients-image" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridClients;
