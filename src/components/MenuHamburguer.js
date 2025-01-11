

const MenuHamburguer = ({isOpen,toggleMenu}) => {
  return (
    <button className="hamburger" onClick={toggleMenu}>
    {isOpen ? "✖" : "☰"}
  </button>
  );
};

export default MenuHamburguer;
