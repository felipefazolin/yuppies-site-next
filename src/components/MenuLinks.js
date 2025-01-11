import Link from "next/link";


const MenuLinks = ({content}) => {
  return (
    <div className="menu-items">
      <ul>
        {content.map((item, index) => (
          <li key={index} className="menu-item">
            <Link href={item.link} className="menu-link">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuLinks;
