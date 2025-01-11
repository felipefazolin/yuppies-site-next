import Button from "@components/Button";

const CtaAction = ({ content, button }) => {
  return (
    <div className="cta-text-section pt-0 pb-0">
      <div className="container position-relative">
        <div className="row gx-3 gx-sm-5 gx-md-4 gx-lg-4 gx-xl-5">
          <div className="col-12 col-md-6 offset-0 position-relative">
            <div className="position-relative bg-0">
              <div className="cta-image-content">
                <img src={content.image} alt="CTA Image" />
              </div>
              <div className="cta-bg-esq">
                <div className="cta-bg-alpha"></div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 offset-0 position-relative">
            <div className="position-relative h-100">
              <div className="cta-text-content align-content-center">
                <div className="container-items">
                  <h2 className="mb-4">{content.title}</h2>
                  <div className="mb-4">
                    {content.text.map((item, index) => (
                      <h4 key={index} className="text-cta-p mb-2">
                        {item}
                      </h4>
                    ))}
                  </div>
                  {/* Verifica se o valor de button é "show" */}
                  {button === "show" && (
                    <Button label={"saiba mais"} bg={"button-bg-3"} link={"/"} />
                  )}
                </div>
              </div>
              <div className="cta-bg-dir"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaAction;
