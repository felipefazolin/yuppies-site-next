const CaseNewHeader = ({ content }) => {
  return (
    <>
      <div className="pb-9 d-flex justify-content-center">
        <div className="container p-0 m-0 g-0  ">
          <div className="row d-flex align-items-stretch gx-3 gx-sm-5  gx-md-4 gx-lg-4 gx-xl-5 ">
            <div className="col-3 d-flex">
              <div className="bg-new-header flex-grow-1 p-4">
                <div className="case-new-header-title p-2">Título Loren</div>
                <div className="case-new-header-p ">
                  Quent per conubia nostra, per inceptos himenaeos. Mauris in
                  erat justoac urna eu felis dapibus condin. Mentum sit amet a
                  augue sed non neque elit. Sed ut imperdiet nisi. Proin
                  condimentum fermentum nunc. Etiam pharetra, erat sed fermentum
                  feugiat, velit mauris egestas quam,ut iquam masendisse in orci
                  enim tincidunt auctor a ornare.
                </div>
              </div>
            </div>
            <div className="col-9 d-flex">
              <div className="bg-2 flex-grow-1">
                <img
                  src="/images/case-new-header-img.jpg"
                  alt="Minha Figura"
                  className="img-fluid h-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseNewHeader;
