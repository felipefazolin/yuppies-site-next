const CaseOverlayGridTwoColumns = ({ content }) => {
  return (
    <>
      <div className="pt-9 pb-9 bg-grid-overlay-two-columns">
        <div className="container">
          <div className="row gx-5 mt-5">
            <div className="col-12 offset-0">
              <div className="case-overlay-grid-two-columns-container">
                <div className="case-overlay-grid-two-columns-img1"></div>
                <div className="case-overlay-grid-two-columns-img2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseOverlayGridTwoColumns;
