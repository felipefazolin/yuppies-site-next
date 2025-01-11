const PriceTableControls = ({ onPreviousClick, onNextClick }) => {
    return (
      <div className="row">
        <div className="col-6 d-flex justify-content-end">
          <button className="carousel-control-prev" onClick={onPreviousClick}>
            &#10094;
          </button>
        </div>
        <div className="col-6 d-flex justify-content-start">
          <button className="carousel-control-next" onClick={onNextClick}>
            &#10095;
          </button>
        </div>
      </div>
    );
  };
  
  export default PriceTableControls;
  