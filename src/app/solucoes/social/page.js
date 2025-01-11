"use client";

// COMPONENTES
import GridText from "@components/GridText";
import Header from "@components/Header";
import CtaAction from "@components/CtaAction";

// CONTEÚDOS
import header from "@contents/solucoes/social/header.json";
import entregamos from "@contents/solucoes/social/entregamos.json";
import suporte from "@contents/solucoes/social/suporte.json";

import cta from "@contents/solucoes/social/cta.json";

import theme from "@contents/theme.json";

const SlideShow = () => {
  return (
    <>
      <Header content={header} />
      <GridText
        content={entregamos}
        theme={theme.light} 
      />
      <CtaAction content={cta} 
      />
      <GridText
        content={suporte}
        theme={theme.dark} 
      />
      
    </>
  );
};

export default SlideShow;
