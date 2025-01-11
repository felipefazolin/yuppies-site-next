import { useMemo } from "react";

const useFormatPrice = (price) => {
  const formattedPrice = useMemo(() => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  }, [price]);

  return formattedPrice;
};

export default useFormatPrice;
