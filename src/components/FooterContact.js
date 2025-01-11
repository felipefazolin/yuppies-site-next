import Whats from "assets/whats";

const FooterContact = () => {
  return (
    <div>
      {/* <h5 className="footer-title mb-3 mt-2">&nbsp;</h5>      */}
      <a
        href="https://wa.me/5511912345678"
        className="btn btn-outline-light align-items-center gap-2 whats-button"
      >
        <Whats /> whatsapp
      </a>
    </div>
  );
};

export default FooterContact;
