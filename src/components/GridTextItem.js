import InfoIcon from "./InfoIcon";

// Componente para renderizar um item com seus bullets
const GridTextItem = ({ item, itemIndex, activeBullet, onToggleBullet, theme }) => {
  return (
    <div className="col-4 d-flex">
      <div className="service-container radius d-flex flex-column align-items-stretch p-0 bg-0 border-frame">
        <div className="service-title-container row g-4 mb-4">
          <div className="col-12">
            <h3 className={`grid-text-service-title ${theme.colorSubtitle}`}>
              {item.title}
            </h3>
          </div>
        </div>
        <ul className={`row g-2 ${theme.colorP}`}>
          {item.bullets.map((bullet, bulletIndex) => {
            const bulletKey = `${itemIndex}-${bulletIndex}`;
            return (
              <li key={bulletIndex} className="col-12 bg-0">
                <div className="grid-text-topic d-flex align-items-start">
                  <div className="bullet-text">
                    {bullet.text}
                    <span
                      className="bullet-toggle"
                      onClick={() => onToggleBullet(itemIndex, bulletIndex)}
                      style={{
                        cursor: 'pointer',
                        marginLeft: '8px',
                        color: 'blue',
                        display: 'inline-flex',
                        alignItems: 'center',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      <InfoIcon width="16" height="16" style={{ color: 'blue', display: 'inline-block' }} />
                    </span>

                    {activeBullet === bulletKey && (
                      <div
                        className="bullet-description"
                        style={{
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
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GridTextItem;