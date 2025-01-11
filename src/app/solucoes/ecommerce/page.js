"use client";

// COMPONENTES
import GridText from "@components/GridText";
import Header from "@components/Header";
import CtaAction from "@components/CtaAction";

// CONTEÚDOS
import entregamos from "@contents/solucoes/ecommerce/entregamos.json";
import header from "@contents/solucoes/ecommerce/header.json";
import cta from "@contents/solucoes/ecommerce/cta.json";
import suporte from "@contents/solucoes/ecommerce/suporte.json";

import theme from "@contents/theme.json";

const SlideShow = () => {
  return (
    <>
      <Header content={header} />

      <GridText content={entregamos} theme={theme.light}  />
      <CtaAction content={cta} />
      <GridText content={suporte} theme={theme.dark} />
    </>
  );
};

export default SlideShow;
