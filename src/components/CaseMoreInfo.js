const CaseMoreInfo = ({ content }) => {
  return (
    <div className="pt-9 pb-9 bg-text-imob">
      <div className="container">
        <div className="row gx-5">
          <div className="col-10 offset-1">
            <div className="p-0">
              {/* Renderiza o título apenas se ele não estiver vazio */}
              {content.title && (
                <h2 className="text-title text-color-imob mb-4">
                  {content.title}
                </h2>
              )}
              {/* Mapeia os parágrafos a partir do array content.text */}
              {content.text.map((paragraph, index) => (
                <p key={index} className="call-p text-color-imob">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseMoreInfo;
