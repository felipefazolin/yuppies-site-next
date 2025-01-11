import Button from "@components/Button";

const CaseGridCta = ({ content }) => {
  return (
    <>
      <div className="pt-9 pb-9 d-flex justify-content-center">
        <div className="container   ">
          <div className="row d-flex align-items-stretch gx-3 gx-sm-5  gx-md-4 gx-lg-4 gx-xl-5 ">
            <div className="col-3 ">
              <div className="flex-grow-1 case-grid-cta-col">
                <img src="/images/case-grid-cta.jpg" />
              </div>
            </div>
            <div className="col-3  d-flex">
              <div className="flex-grow-1 case-grid-cta-col">
                <img src="/images/case-grid-cta.jpg" />
              </div>
            </div>
            <div className="col-3 d-flex">
              <div className="flex-grow-1 case-grid-cta-col">
                <img src="/images/case-grid-cta.jpg" />
              </div>
            </div>
            <div className="col-3 d-flex">
              <div className="flex-grow-1 case-grid-cta-col case-grid-cta-bg p-4">
                <div className="case-grid-cta-title">Título Loren</div>
                <div className="case-grid-cta-text mt-4">
                  Few facts about our company Donec sollicitudin est eu suscipit
                  porttitor
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseGridCta;
