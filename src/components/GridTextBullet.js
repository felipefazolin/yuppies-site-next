// Componente para renderizar um bullet
const Bullet = ({ bullet, isActive, onToggle }) => {
    return (
      <li className="col-12 bg-0">
        <div className="grid-text-topic d-flex align-items-start">
          <div className="bullet-text">
            {bullet.text}
            <span
              className="bullet-toggle"
              onClick={onToggle}
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
  
            {isActive && (
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
  };