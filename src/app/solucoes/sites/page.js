"use client";

// COMPONENTES
import GridText from "@components/GridText";
import Header from "@components/Header";
import CtaAction from "@components/CtaAction";

// CONTEÚDOS
import header from "@contents/solucoes/sites/header.json";
import entregamos from "@contents/solucoes/sites/entregamos.json";
import suporte from "@contents/solucoes/sites/suporte.json";

import cta from "@contents/solucoes/sites/cta.json";

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
