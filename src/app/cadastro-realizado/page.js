import DivSlider from "@components/DivSlider/DivSlider";
import HeaderInternal from "@components/HeaderInternal";
import TextGrid from "@components/GridText";
// chamada json
import json from "@contents/cadastro.json";
import jsonDivSlider from "@contents/home/slider-services.json";

// METADATA
export const metadata = {
  title: "Cadastro realizado com sucesso",
  description: "Informação que o cadastro foi realizado no formulário de contato."
};

// MONTAGEM DO COMPONENTE
export default function Register() {
  const header = json.header;
  const list = json.list;

  return (
    <>
      <HeaderInternal content={header} />
      <DivSlider content={jsonDivSlider} />
    </>
  );
}
