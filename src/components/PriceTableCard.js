const PriceTableCard = ({ title, content, badge }) => {
  return (
    <div className="col-12 border-table">
      <div className="row d-flex align-items-center flex-nowrap">
        <div className="col d-flex align-items-center flex-grow-1">
          <div className="price-table-card-text my-2">{content}</div>
        </div>
        <div className="col-auto d-flex align-items-center justify-content-end">
          <span className="price-table-card-badge">{badge}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceTableCard;
