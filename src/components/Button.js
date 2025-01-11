import Link from "next/link";

const Button = ({ label, bg, link, className  }) => {
  return (
    <Link href={link}>
      <button className={`btn btn-large custom-button ${bg} ${className}` }>{label}</button>
    </Link>
  );
};

export default Button;
