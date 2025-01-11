// JSON
import jsonTextHome from "@contents/textHome.json";
import jsonTextSliderHome from "@contents/textSliderHome.json";
import jsonGridCases from "@contents/gridCases.json";
import jsonGridClients from "@contents/gridClients.json";
import jsonSliderServices from "@contents/home/slider-services.json";
import jsonTextCtaHome from "@contents/textCtaHome.json";

// COMPONENTS
import SliderAction from "@components/SliderAction";
import HeaderHome from "@components/HeaderHome";
import TextInfoBlock from "@components/TextInfoBlock";
import SliderText from "@components/SliderText";
import GridCases from "@components/GridCases";
import GridClients from "@components/GridClients";
import ContactForm from "@components/ContactForm";
import CtaAction from "@components/CtaAction.js";
//

// METADATA
export const metadata = {
  title: "Home",
  description: "Descrição da Home",
};

// MONTAGEM DO COMPONENTE
const Home = () => {
  return (
    <>
      <HeaderHome />
      <TextInfoBlock content={jsonTextHome} />
      <SliderAction content={jsonSliderServices} />
      <GridCases content={jsonGridCases} title={"principais cases"} />
      <CtaAction content={jsonTextCtaHome} button={'show'} />
      {/* <ContactForm /> */}
      <GridClients content={jsonGridClients} />
      <SliderText content={jsonTextSliderHome} />
    </>
  );
};

export default Home;
