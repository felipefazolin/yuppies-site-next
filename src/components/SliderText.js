"use client";

const SliderText = ({ content }) => {
  // Criar o conteúdo duplicado para garantir o efeito contínuo
  const duplicatedTexts = [...content, ...content]; // Duplicar duas vezes

  return (
    <div className="text-slider pb-9 pt-9 bg-2">
      <div className="slider-container">
        <div className="slider-content-wrapper">
          {duplicatedTexts.map((text, index) => (
            <div key={index} className="slider-item">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SliderText;
