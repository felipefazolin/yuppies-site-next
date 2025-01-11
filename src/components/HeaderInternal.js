const HeaderInternal = ({ content }) => {
 
  return (
    <div className="pt-11 pb-9 header-bg  position-relative">
      <div className={`bg-header ${content.image}`}></div>
      <div className="container position-relative">
        <div className="box-break"></div>
        <div className="row gx-5 bg-full">
          <div className="col-12 col-md-6 offset-md-3 align-content-center order-1 order-md-1 text-center">
            <div className="p-0 ">
              <h1 className="header-title mb-4">{content.title}</h1>
              <h3 className="header-subtitle mb-5 ">{content.subtitle}</h3>
              {content.description.map((desc, index) => (
                <p className="header-p mb-3" key={index}>
                  {desc}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="gradient-box-top"></div>
      <div className="gradient-box-left"></div>
      <div className="gradient-box-right"></div>
    </div>
  );
};

export default HeaderInternal;
