import React, { useState } from 'react';
import InfoIcon from './InfoIcon';

const GridText = ({ content, theme }) => {
  const title = content.title;
  const items = content.items;

  // Estado para controlar qual bullet está ativo
  const [activeBullet, setActiveBullet] = useState(null);

  // Função para alternar a visibilidade da descrição de um bullet específico
  const toggleDescription = (itemIndex, bulletIndex) => {
    const key = `${itemIndex}-${bulletIndex}`; // Cria uma chave única para o item e bullet
    setActiveBullet(prevState => (prevState === key ? null : key)); // Alterna a visibilidade
  };

  return (
    // SESSÃO
    <div className={`pt-7 pb-7 ${theme.bg}`}>
      <div className="container">
        <h1 className={`grid-text-section-title mb-7 ${theme.colorTitle}`}>
          {title}
        </h1>
        <div className="row g-5">
          {/* GRID DE ITENS */}
          {items.map((item, itemIndex) => (
            <div key={itemIndex} className="col-4 d-flex">
              <div className="service-container radius d-flex flex-column align-items-stretch p-0 bg-0 border-frame">
                <div className="service-title-container row g-4 mb-4">
                  <div className="col-12">
                    <h3 className={`grid-text-service-title ${theme.colorSubtitle}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
                <ul className={`row g-2 ${theme.colorP}`}>
                  {/* LISTA DE BULLETS */}
                  {item.bullets.map((bullet, bulletIndex) => {
                    const bulletKey = `${itemIndex}-${bulletIndex}`;
                    return (
                      <div key={bulletIndex}>
                        <li className="col-12 bg-0">
                          <div className="grid-text-topic d-flex align-items-start">
                            <div className="bullet-text">
                              {bullet.text}
                              <span
                                className="bullet-toggle"
                                onClick={() => toggleDescription(itemIndex, bulletIndex)} // Ao clicar, alterna a visibilidade
                                style={{ cursor: 'pointer', marginLeft: '8px', color: 'blue' }}
                              >
                                <InfoIcon width="16" height="16" style={{ color: 'blue' }} />
                              </span>

                              {/* Mostrar a descrição somente se o bullet estiver ativo */}
                              <div
                                className={`bullet-description ${activeBullet === bulletKey ? 'show' : ''}`}
                                style={{
                                  display: activeBullet === bulletKey ? 'block' : 'none',
                                  marginTop: '5px',
                                  fontSize: '0.8em',
                                  lineHeight: '1.2em',
                                  color: '#555',
                                  backgroundColor: '#f9f9f9',
                                  padding: '5px',
                                  border: '1px solid #f4f4f4',
                                  borderRadius: '4px',
                                }}
                              >
                                {bullet.description}
                              </div>
                            </div>
                          </div>
                        </li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridText;
