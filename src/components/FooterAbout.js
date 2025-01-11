import LogoFooter from "@components/LogoFooter";
// import LogoIcon from "assets/logoIcon";
import Link from "next/link";

const FooterAbout = () => {
  return (
    <div className="logo-footer">
      <Link href={"/"}>
        <LogoFooter />
      </Link>    
    </div>
  );
};

export default FooterAbout;
