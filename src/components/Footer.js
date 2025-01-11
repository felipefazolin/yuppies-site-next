import FooterAbout from "./FooterAbout";
import FooterConsulting from "./FooterConsulting";
import FooterContact from "./FooterContact";
import FooterServicesFirst from "./FooterServicesFirst";
import FooterServicesSecond from "./FooterServicesSecond";
import FooterSitemap from "./FooterSiteMap";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="footer bg-7 pt-9 pb-9">
      <div className="container">
        <div className="row gy-4">
          <div className="col-6 col-xxs-6 col-xs-6 col-sm-6 offset-sm-0 col-md-3 col-xl-3 col-lg-3 col-xxl-3 d-flex flex-column gap-2">
            <FooterAbout />
            <FooterSocial />
            <FooterContact />
          </div>
          <div className="col-6 col-xxs-6 col-xs-6 col-sm-6 offset-sm-0 offset-0 col-md-3 col-xl-3 col-lg-3 col-xxl-3 d-flex flex-column gap-2">
            <FooterSitemap />
          </div>
          <div className="col-6 col-xxs-6 col-xs-6 col-sm-6 offset-sm-0 col-xl-3 col-md-3 col-xxl-3 col-lg-3 d-flex flex-column">
            <FooterServicesFirst />
          </div>
          <div className="col-6 col-xxs-6 col-xs-6 col-sm-6 offset-sm-0 col-md-3 col-xl-3 col-xxl-3 col-lg-3 d-flex flex-column gap-3 gy-4">
            <FooterServicesSecond />          
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
