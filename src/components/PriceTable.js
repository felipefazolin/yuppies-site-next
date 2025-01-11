import PriceTableCard from "./PriceTableCard";
import useFormatPrice from "@hooks/useFormatPrice";

const PriceTable = ({ name, content, price, type }) => {
  const formattedPrice = useFormatPrice(price);

  return (
    <>
      <div className="price-table-container price-table-bg">
        <div className="price-table-title mb-4">{name}</div>
        <div className="price-table-general">
          <div className="row">
            {content.map((item, index) => (
              <PriceTableCard
                key={index}
                title={item.title}
                content={item.content}
                badge={item.badge}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="price-table-container-price price-table-bg">
        <div className="price-table-price">{formattedPrice}</div>
        <div className="price-table-type">{type}</div>
      </div>
    </>
  );
};

export default PriceTable;
