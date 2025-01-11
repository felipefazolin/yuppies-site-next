import FooterIconInstagram from "./FooterIconInstagram";
import FooterIconLinkedin from "./FooterIconLinkedin";
import FooterIconTiktok from "./FooterIconTiktok";

const FooterSocial = () => {
  return (
    <div>
      {/* <h5 className="footer-title mb-3">redes sociais</h5> */}
      <div className="d-flex">
        <a href=" instagram.com/agenciayuppies" className="text-light me-3">
          <FooterIconInstagram />
        </a>
        <a href="linkedin.com/in/agenciayuppies/" className="text-light me-3">
          <FooterIconLinkedin />
        </a>
        <a href="tiktok.com/@agenciayuppies" className="text-light me-3">
        <FooterIconTiktok />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
