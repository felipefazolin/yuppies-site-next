import { useState } from "react";
import GridTextItem from "./GridTextItem";

// Componente principal para a grade
const GridText = ({ content, theme }) => {
  const { title, items } = content;

  // Estado para controlar qual bullet está ativo
  const [activeBullet, setActiveBullet] = useState(null);

  // Função para alternar a visibilidade da descrição de um bullet específico
  const toggleDescription = (itemIndex, bulletIndex) => {
    const key = `${itemIndex}-${bulletIndex}`; // Cria uma chave única para o item e bullet
    setActiveBullet((prevState) => (prevState === key ? null : key)); // Alterna a visibilidade
  };

  return (
    <div className={`pt-7 pb-7 ${theme.bg}`}>
      <div className="container">
        <h1 className={`grid-text-section-title mb-7 ${theme.colorTitle}`}>{title}</h1>
        <div className="row g-5">
          {items.map((item, itemIndex) => (
            <GridTextItem
              key={itemIndex}
              item={item}
              itemIndex={itemIndex}
              activeBullet={activeBullet}
              onToggleBullet={toggleDescription}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridText;