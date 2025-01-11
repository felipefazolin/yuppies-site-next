import FooterContact from "@components/FooterContact";
import Link from "next/link";

const MenuFull = ({ content, isOpen }) => {
  return (
    <div className={`menu-full ${isOpen ? "active" : ""}`}>
      <div className="vertical-list">
        {content.map((item, index) => (
          <div  key={index} className="list-item">
            <Link href={item.link} className="menu-link">
              {item.label}
            </Link>
          </div>
        ))}

      </div>
      <div className="menu-full-whats">
        {/* <h3>Whatsapp:</h3>
        <p> 11. 9 9876-4321</p> */}
        <FooterContact />
      </div>
    </div>
  );
};

export default MenuFull;
