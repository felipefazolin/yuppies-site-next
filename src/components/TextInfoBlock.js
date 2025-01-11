import LogoIcon from "assets/LogoIcon";

const TextInfoBlock = ({ content }) => {
  const title = content.title;
  const text = content.text;

  return (
    <div className="pt-7 pb-6">
      <div className="container">
        <div className="row gx-5 align-items-center">         
          <div className="col-10 offset-1">
            <div className="p-0">
              <h2 className="text-title mb-4">{title}</h2>
              {text.map((paragraph, index) => (
                <p key={index} className="call-p">
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

export default TextInfoBlock;
