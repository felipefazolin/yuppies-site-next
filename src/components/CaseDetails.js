const CaseDetails = ({ content }) => {
  return (
    <>
      <div className="pt-5 pb-5 border-bottom border-dark">
        <div className="container">
          <div className="row g-3 g-sm-4 g-md-4 g-lg-4 g-xl-5">
            <div className="col-3 offset-1">
              <div className="container-tags ">
                <h3 className="text-title text-color-imob mb-2 color1">
                  cliente
                </h3>
                <div className="tags-wrapper">
                  <p className="case-p color1">Imob</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="container-tags  ">
                <h3 className="text-title text-color-imob mb-2 color1">Ramo</h3>
                <div className="tags-wrapper">
                  <p className="case-p color1">Imob</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="container-tags  ">
                <h3 className="text-title text-color-imob mb-2 color1">
                  o que fizemos
                </h3>
                <div className="tags-wrapper">
                  <div className={`tag`}>identidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseDetails;
